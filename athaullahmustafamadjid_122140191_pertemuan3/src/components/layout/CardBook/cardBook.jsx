import Button from "../../elements/Button/button";
import FormEditBuku from "../FormEditBuku/formEditBuku";

import useLocalStorage from "../../../hooks/LocalStorageHook/useLocalStorage";
import { useState } from "react";

const CardBook = ({ data }) => {
  const [addBuku, setAddBuku] = useLocalStorage("buku", []);

  const [editBtnStatus, setEditBtnStatus] = useState();

  const bookStatus = () => {
    if (data.status === "Sedang dibaca") {
      return "bg-[#d76e5e]";
    } else if (data.status === "Selesai dibaca") {
      return "bg-[#90C67C]";
    } else if (data.status === "Ingin dibeli") {
      return "bg-[#60B5FF]";
    } else {
      return "bg-[#234258]";
    }
  };

  const handleEditBook = () => {
    setEditBtnStatus(!editBtnStatus);
  };

  const handleDeleteBook = () => {
    const newBuku = addBuku.filter((buku) => buku.id !== data.id);

    const isConfirm = window.confirm("Apakah anda yakin ingin menghapus buku?");
    if (isConfirm) {
      setAddBuku(newBuku);
      window.location.reload();
    } else {
      return;
    }
  };

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="flex flex-row items-center gap-10 border-5 border-[#234258] rounded-2xl p-10 w-3/5 mb-8 hover:border-[#d76e5e] hover:scale-105 hover-card transition-all duration-300 ease-in-out">
          <div>
            <img
              src={data.urlCover}
              alt=""
              className="w-[250px] border-2 border-[#234258] object-cover"
            />
          </div>

          <div className="font-poppins flex flex-col gap-5">
            <div>
              <h1 className="font-bold text-xl">Judul Buku</h1>
              <p className="text-lg">{data.judul}</p>
            </div>

            <div>
              <h1 className="font-bold text-xl">Penulis</h1>
              <p className="text-lg">{data.penulis}</p>
            </div>

            <div>
              <h1 className="font-bold text-xl">Penerbit</h1>
              <p className="text-lg">{data.penerbit}</p>
            </div>

            <div>
              <h1 className="font-bold text-xl">Tahun Terbit</h1>
              <p className="text-lg">{data.tahunTerbit}</p>
            </div>

            <div>
              <h1 className="font-bold text-xl">Status</h1>
              <div
                className={`p-2 rounded-full max-w-fit text-white font-semibold ${bookStatus()}`}
              >
                <p className="text-md">{data.status}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 relative left-5">
            <Button
              variant={
                "bg-[#234258] rounded-[40px] p-3 w-[100px] hover:scale-105 transition-all duration-300 ease-in-out"
              }
              onClick={handleEditBook}
            >
              Edit
            </Button>
            <Button
              variant={
                "bg-[#A62C2C] rounded-[40px] p-3 hover:scale-105 transition-all duration-300 ease-in-out"
              }
              onClick={handleDeleteBook}
            >
              Hapus
            </Button>
          </div>
        </div>

        <div className="w-3/5">
          <FormEditBuku data={data} editBtnStatus={editBtnStatus} />
        </div>
      </div>
    </>
  );
};

export default CardBook;
