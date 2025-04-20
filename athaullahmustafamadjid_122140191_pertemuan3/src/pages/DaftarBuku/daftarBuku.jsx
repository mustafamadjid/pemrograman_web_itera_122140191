import Navbar from "../../components/layout/Navbar/navbar";
import Footer from "../../components/layout/Footer/footer";
import Button from "../../components/elements/Button/button";
import SearchBar from "../../components/layout/SearchBar/searchBar";
import InputRadio from "../../components/elements/Input/inputRadio";
import FormTambahBuku from "../../components/layout/FormTambahBuku/formTambahBuku";
import CardBook from "../../components/layout/CardBook/cardBook";

import { useState, useEffect } from "react";
import React from "react";
import getBookData from "../../services/getBook";

const DaftarBuku = () => {
  const [addBtnStatus, setAddBtnStatus] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [filteredBook, setFilteredBook] = useState([]);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleStatusChange = (value) => {
    setFilterStatus(value);
  };

  const toggleAddForm = () => {
    setAddBtnStatus((prev) => !prev);
  };

  useEffect(() => {
    const books = getBookData();

    const filtered = books.filter((book) => {
      const judul = book?.judul?.toLowerCase() || "";
      const author = book?.penulis?.toLowerCase() || "";
      const status = book?.status || "";

      const matchSearch =
        judul.includes(searchItem.toLowerCase()) ||
        author.includes(searchItem.toLowerCase());

      const matchStatus = filterStatus === "Semua" || status === filterStatus;

      return matchSearch && matchStatus;
    });

    setFilteredBook(filtered);
  }, [searchItem, filterStatus]);

  return (
    <>
      <Navbar />

      <main className="px-[15%] py-[30px]">
        <section className="mb-10 mt-10">
          <SearchBar
            handleInputChange={handleInputChange}
            searchItem={searchItem}
          />

          <div className="mt-5">
            <h1 className="font-poppins text-[#234258] font-semibold text-lg mb-3">
              Tampilkan Buku Berdasarkan
            </h1>
            <InputRadio
              data={[
                "Semua",
                "Buku yang dimiliki",
                "Sedang dibaca",
                "Selesai dibaca",
                "Ingin dibeli",
              ]}
              label="Silakan Pilih"
              name="filterStatus"
              selected={filterStatus}
              onChange={handleStatusChange}
            />
          </div>
        </section>

        <div className="mb-10">
          <Button
            variant="px-5 py-3 rounded-[40px] bg-[#d76e5e] hover:scale-105 active:scale-95 transition-all duration-100"
            onClick={toggleAddForm}
          >
            + Tambah Buku Baru
          </Button>
        </div>

        <FormTambahBuku addBtnStatus={addBtnStatus} />

        <div className="flex flex-wrap justify-center mt-10">
          {filteredBook.length > 0 ? (
            filteredBook.map((item) => <CardBook key={item.id} data={item} />)
          ) : (
            <p className="text-gray-500 mt-10">Tidak ada buku ditemukan.</p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DaftarBuku;
