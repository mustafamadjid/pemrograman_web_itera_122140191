from pyramid.view import view_config
from pyramid.httpexceptions import (
    HTTPFound,
    HTTPNotFound,
    HTTPBadRequest,
)
from sqlalchemy.exc import DBAPIError
from pyramid.response import Response

from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json')
def matakuliah_list (request):
    """ View untuk menampilkan data matakuliah """
    try:
        # Ambil semua data matakuliah
        query = request.dbsession.query(Matakuliah)
        matakuliah = query.all()
    except DBAPIError:
        db_err_msg = 'Database error'
        return Response(db_err_msg, content_type='text/plain', status=500)
    
    # Kembalikan data dalam format JSON
    return {'matakuliah': [m.to_dict() for m in matakuliah]}

@view_config(route_name='matakuliah_tambah', request_method='POST', renderer='json')
def matakuliah_tambah(request):
    """ View untuk menambah data matakuliah """
    try:
        # Ambil data dari request JSON
        json_data = request.json_body
        
        # Validasi data
        required_fields = ["kode_mk", "nama_mk", "sks", "semester"]
        for field in required_fields:
            if field not in json_data:
                  return HTTPBadRequest(json_body={'error': f'Field {field} wajib diisi'})

        matakuliah = Matakuliah(
            kode_mk=json_data['kode_mk'],
            nama_mk=json_data['nama_mk'],
            sks=json_data['sks'],
            semester=json_data['semester']
        )
        # Simpan data ke database
        request.dbsession.add(matakuliah)
        
        # Commit transaksi
        request.dbsession.flush()
        
        return {'success': True, 'matakuliah': matakuliah.to_dict()}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})

@view_config(route_name='matakuliah_edit',request_method='PUT', renderer='json')
def matakuliah_edit(request):
    """ View untuk mengedit data matakuliah """
    dbsession = request.dbsession
    matakuliah_id = request.matchdict['id']
    
    matakuliah = dbsession.query(Matakuliah).filter_by(id=matakuliah_id).first()
    if matakuliah is None:
         return HTTPNotFound(json_body={'error': 'Mata kuliah tidak ditemukan'})
    
    try:
        # Ambil data dari request JSON
        json_data = request.json_body
        
        # Edit atribut yang hanya ingin di edit
        if 'kode_mk' in json_data:
            matakuliah.kode_mk = json_data['kode_mk']
        if 'nama_mk' in json_data:
            matakuliah.nama_mk = json_data['nama_mk']
        if 'sks' in json_data:
            matakuliah.sks = json_data['sks']
        if 'semester' in json_data:
            matakuliah.semester = json_data['semester']
        
        # Commit transaksi
        dbsession.flush()
        return {'success': True, 'matakuliah': matakuliah.to_dict()}
    except Exception as e:
        # Rollback transaksi
        return HTTPBadRequest(json_body={'error': str(e)})


@view_config(route_name='matakuliah_update',request_method='DELETE', renderer='json')
def matakuliah_hapus(request):
    """View untuk menghapus data matakuliah"""
    dbsession = request.dbsession
    matakuliah_id = request.matchdict['id']
    
    # Cari data matakuliah yang akan dihapus
    matakuliah = dbsession.query(Matakuliah).filter_by(id=matakuliah_id).first()
    if matakuliah is None:
         return HTTPNotFound(json_body={'error': 'Mata kuliah tidak ditemukan'})
    
    try:
        # Hapus data matakuliah
        dbsession.delete(matakuliah)
        
        # Commit transaksi
        dbsession.flush()
        return {'success': True}
    except Exception as e:
        return HTTPBadRequest(json_body={'error': str(e)})