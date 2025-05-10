def includeme(config):
                """Add routes to the config."""
                config.add_static_view('static', 'static', cache_max_age=3600)
                
                # Default route
                config.add_route('home', '/')
                
                # Mata Kuliah routes dengan request_method untuk membedakan endpoint dengan URL yang sama
                config.add_route('matakuliah_list', '/mahasiswa/matakuliah', request_method='GET')
                config.add_route('matakuliah_tambah', '/mahasiswa/matakuliah', request_method='POST')
                config.add_route('matakuliah_edit', '/mahasiswa/matakuliah/{id}', request_method='PUT')
                config.add_route('matakuliah_update', '/mahasiswa/matakuliah/{id}', request_method='DELETE')
                