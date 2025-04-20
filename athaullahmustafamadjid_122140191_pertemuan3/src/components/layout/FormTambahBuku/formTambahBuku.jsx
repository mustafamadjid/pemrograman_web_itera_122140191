import Button from "../../elements/Button/button";
import InputElement from "../../elements/Input/input";
import InputRadio from "../../elements/Input/inputRadio";
import PropTypes from "prop-types";

import { useState } from "react";
import useLocalStorage from "../../../hooks/LocalStorageHook/useLocalStorage";

const FormTambahBuku = ({ addBtnStatus }) => {
  const [addBuku, setAddBuku] = useLocalStorage("buku", []);
  const [statusBuku, setStatusBuku] = useState("");

  const handleTambahBuku = (newBuku) => {
    setAddBuku([...addBuku, newBuku]);
  };

  const handleStatusBuku = (value) => {
    setStatusBuku(value);
  };

  const handleSubmit = (e) => {
    const formData = new FormData(e.target);

    const newBuku = {
      id: addBuku.length + 1,
      judul: formData.get("judul"),
      penulis: formData.get("penulis"),
      penerbit: formData.get("penerbit"),
      tahunTerbit: formData.get("tahunTerbit"),
      urlCover: formData.get("urlCover"),
      status: statusBuku,
    };

    handleTambahBuku(newBuku);
    alert("Buku berhasil ditambahkan!");
  };

  return (
    <div
      className={`mt-10 mb-10 bg-white p-10 rounded-xl border-4 border-[#d76e5e] transition-all duration-200 ease-in-out overflow-hidden ${
        addBtnStatus ? "max-h-auto opacity-100" : "max-h-0 opacity-0 "
      }`}
    >
      <form className="space-y-13 " onSubmit={handleSubmit}>
        <h1 className="relative font-poppins font-bold text-xl text-[#234258] after:content-[''] after:bg-[#234258] after:absolute after:-bottom-3 after:left-0 after:h-[4px] after:w-1/4">
          Silakan isi data buku anda
        </h1>

        <div className="flex flex-col gap-5">
          <InputElement
            type="text"
            placeholder="Judul Buku"
            name={"judul"}
            variant={"w-1/2 rounded-xl ring-2 ring-[#234258]"}
          />
          <InputElement
            type="text"
            placeholder="Penulis"
            name={"penulis"}
            variant={"w-1/2 rounded-xl ring-2 ring-[#234258]"}
          />
          <InputElement
            type="text"
            placeholder="Penerbit"
            name={"penerbit"}
            variant={"w-1/2 rounded-xl ring-2 ring-[#234258]"}
          />
          <InputElement
            type="text"
            placeholder="Tahun Terbit"
            name={"tahunTerbit"}
            variant={"w-1/2 rounded-xl ring-2 ring-[#234258]"}
          />
          <InputElement
            type="text"
            placeholder="Link Gambar Cover Buku"
            name={"urlCover"}
            variant={"w-1/2 rounded-xl ring-2 ring-[#234258]"}
          />

          <InputRadio
            data={[
              "Buku yang dimiliki",
              "Sedang dibaca",
              "Selesai dibaca",
              "Ingin dibeli",
            ]}
            label="Pilih Status"
            name={"status"}
            onChange={handleStatusBuku}
          />
          <div className="mt-5">
            <Button
              variant={
                "px-5 py-3 rounded-[40px] bg-[#d76e5e] w-1/4 active:scale-95"
              }
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
FormTambahBuku.propTypes = {
  addBtnStatus: PropTypes.bool,
};

export default FormTambahBuku;
