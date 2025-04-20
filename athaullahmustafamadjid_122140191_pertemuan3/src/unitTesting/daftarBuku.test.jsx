import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DaftarBuku from "../pages/DaftarBuku/daftarBuku";
import getBookData from "../services/getBook";

import React from "react";

// Mock data
jest.mock("../services/getBook", () => jest.fn());

const mockBooks = [
  { id: 1, judul: "Belajar React", penulis: "Budi", status: "Sedang dibaca" },
  { id: 2, judul: "Belajar Vue", penulis: "Ani", status: "Selesai dibaca" },
  { id: 3, judul: "Belajar Angular", penulis: "Cici", status: "Ingin dibeli" },
];

describe("DaftarBuku Component", () => {
  beforeEach(() => {
    getBookData.mockReturnValue(mockBooks);
  });

  test("renders component properly", () => {
    render(<DaftarBuku />);

    expect(screen.getByText(/Tambah Buku Baru/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Cari buku/i)).toBeInTheDocument();
    expect(screen.getByText(/Tampilkan Buku Berdasarkan/i)).toBeInTheDocument();
  });

  test("displays list of books initially", () => {
    render(<DaftarBuku />);

    expect(screen.getByText(/Belajar React/i)).toBeInTheDocument();
    expect(screen.getByText(/Belajar Vue/i)).toBeInTheDocument();
    expect(screen.getByText(/Belajar Angular/i)).toBeInTheDocument();
  });

  test("filters books based on search input", async () => {
    render(<DaftarBuku />);

    const searchInput = screen.getByPlaceholderText(/Cari buku/i);
    await userEvent.type(searchInput, "Vue");

    expect(screen.queryByText(/Belajar React/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Belajar Vue/i)).toBeInTheDocument();
  });

  test("filters books based on status", () => {
    render(<DaftarBuku />);

    const radioSedangDibaca = screen.getByLabelText(/Sedang dibaca/i);
    fireEvent.click(radioSedangDibaca);

    expect(screen.getByText(/Belajar React/i)).toBeInTheDocument();
    expect(screen.queryByText(/Belajar Vue/i)).not.toBeInTheDocument();
  });

  test("toggle add book form visibility", () => {
    render(<DaftarBuku />);

    const addButton = screen.getByText(/Tambah Buku Baru/i);
    expect(screen.queryByTestId("form-tambah-buku")).not.toBeInTheDocument();

    fireEvent.click(addButton);
    expect(screen.getByTestId("form-tambah-buku")).toBeInTheDocument();

    fireEvent.click(addButton);
    expect(screen.queryByTestId("form-tambah-buku")).not.toBeVisible();
  });

  test("shows message when no books match the filter", async () => {
    render(<DaftarBuku />);

    const searchInput = screen.getByPlaceholderText(/Cari buku/i);
    await userEvent.type(searchInput, "Python");

    expect(screen.getByText(/Tidak ada buku ditemukan./i)).toBeInTheDocument();
  });
});
