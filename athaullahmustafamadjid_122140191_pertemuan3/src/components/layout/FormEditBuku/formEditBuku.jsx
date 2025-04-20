import Button from "../../elements/Button/button";
import InputElement from "../../elements/Input/input";
import InputRadio from "../../elements/Input/inputRadio";
import PropTypes from "prop-types";
import { useState } from "react";
import useLocalStorage from "../../../hooks/LocalStorageHook/useLocalStorage";

const FormEditBuku = ({ editBtnStatus, data }) => {
  const [editBuku, setEditBuku] = useLocalStorage("buku", []);

  // State untuk semua input
  const [judul, setJudul] = useState(data.judul);
  const [penulis, setPenulis] = useState(data.penulis);
  const [penerbit, setPenerbit] = useState(data.penerbit);
  const [tahunTerbit, setTahunTerbit] = useState(data.tahunTerbit);
  const [urlCover, setUrlCover] = useState(data.urlCover);
  const [statusBuku, setStatusBuku] = useState(data.status || "");

  const handleEditBuku = (updatedData) => {
    const newBukuList = editBuku.map((buku) =>
      buku.id === data.id ? { ...buku, ...updatedData } : buku
    );
    setEditBuku(newBukuList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      id: data.id,
      judul,
      penulis,
      penerbit,
      tahunTerbit,
      urlCover,
      status: statusBuku,
    };

    handleEditBuku(updatedData);
    alert("Buku berhasil diperbarui!");
    window.location.reload();
  };

  return (
    <div
      className={`${
        editBtnStatus
          ? "mt-10 mb-10 bg-white p-10 rounded-xl border-4 border-[#d76e5e] transition-all"
          : "hidden"
      }`}
    >
      <form className="space-y-13" onSubmit={handleSubmit}>
        <h1 className="relative font-poppins font-bold text-xl text-[#234258] after:content-[''] after:bg-[#234258] after:absolute after:-bottom-3 after:left-0 after:h-[4px] after:w-1/4">
          Perbarui Buku Anda
        </h1>

        <div className="flex flex-col gap-5">
          <InputElement
            type="text"
            placeholder="Judul Buku"
            name="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            variant="w-1/2 rounded-xl ring-2 ring-[#234258]"
          />
          <InputElement
            type="text"
            placeholder="Penulis"
            name="penulis"
            value={penulis}
            onChange={(e) => setPenulis(e.target.value)}
            variant="w-1/2 rounded-xl ring-2 ring-[#234258]"
          />
          <InputElement
            type="text"
            placeholder="Penerbit"
            name="penerbit"
            value={penerbit}
            onChange={(e) => setPenerbit(e.target.value)}
            variant="w-1/2 rounded-xl ring-2 ring-[#234258]"
          />
          <InputElement
            type="text"
            placeholder="Tahun Terbit"
            name="tahunTerbit"
            value={tahunTerbit}
            onChange={(e) => setTahunTerbit(e.target.value)}
            variant="w-1/2 rounded-xl ring-2 ring-[#234258]"
          />
          <InputElement
            type="text"
            placeholder="Link Gambar Cover Buku"
            name="urlCover"
            value={urlCover}
            onChange={(e) => setUrlCover(e.target.value)}
            variant="w-1/2 rounded-xl ring-2 ring-[#234258]"
          />

          <InputRadio
            data={[
              "Buku yang dimiliki",
              "Sedang dibaca",
              "Selesai dibaca",
              "Ingin dibeli",
            ]}
            label="Pilih Status"
            name="status"
            selected={statusBuku}
            onChange={setStatusBuku}
          />

          <div className="mt-5">
            <Button
              variant="px-5 py-3 rounded-[40px] bg-[#d76e5e] w-1/4 active:scale-95"
              type="submit"
            >
              Simpan
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

FormEditBuku.propTypes = {
  editBtnStatus: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    judul: PropTypes.string.isRequired,
    penulis: PropTypes.string.isRequired,
    penerbit: PropTypes.string.isRequired,
    tahunTerbit: PropTypes.string.isRequired,
    urlCover: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default FormEditBuku;
