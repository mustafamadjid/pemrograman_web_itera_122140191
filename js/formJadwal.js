import { addJadwal } from "./jadwal.js";

const formJadwal = document.getElementById("form-jadwal");

formJadwal.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  try {
    await addJadwal(
      data.get("matkul"),
      data.get("hari"),
      data.get("jam"),
      data.get("gedung"),
      data.get("ruangan"),
      data.get("dosen")
    );
  } catch (error) {
    console.log(error);
  }
});
