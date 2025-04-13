import { updateJadwal, getJadwal } from "./jadwal.js";

// Mengambil parameter 'id' dari URL
const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get("index");
const intIndex = parseInt(index);

const getJadwalDataByIndex = async (index) => {
  const data = await getJadwal();
  return data[index];
};

const elementForm = (getData) => {
  return `
    <div class="flex flex-col">
      <label for="matkul" class="font-semibold text-2xl mb-2">Mata Kuliah</label>
      <input
        type="text"
        name="matkul"
        id="matkul"
        placeholder="Mata Kuliah"
        value="${getData.matkul}"
        class="border-2 border-black rounded-lg p-3 focus:border-amber-300 focus:border-4 focus:scale-103 focus:outline-none transition-all duration-100"
      />
    </div>

    <div class="flex flex-col">
      <label for="dosen" class="font-semibold text-2xl mb-2">Dosen Pengampu</label>
      <input
        type="text"
        name="dosen"
        id="dosen"
        placeholder="Dosen"
        value="${getData.dosen}"
        class="border-2 border-black rounded-lg p-3 focus:border-amber-300 focus:border-4 focus:scale-103 focus:outline-none transition-all duration-100"
      />
    </div>

    <div class="flex flex-col">
      <label for="hari" class="font-semibold text-2xl mb-2">Hari</label>
      <input
        type="text"
        name="hari"
        id="hari"
        placeholder="Hari"
        value="${getData.hari}"
        class="border-2 border-black rounded-lg p-3 focus:border-amber-300 focus:border-4 focus:scale-103 focus:outline-none transition-all duration-100"
      />
    </div>

    <div class="flex flex-col">
      <label for="jam" class="font-semibold text-2xl mb-2">Jam</label>
      <input
        type="time"
        name="jam"
        id="jam"
        placeholder="Jam"
        value="${getData.jam}"
        class="border-2 border-black rounded-lg p-3 focus:border-amber-300 focus:border-4 focus:scale-103 focus:outline-none transition-all duration-100"
      />
    </div>

    <div class="flex flex-col">
      <label for="gedung" class="font-semibold text-2xl mb-2">Gedung</label>
      <input
        type="text"
        name="gedung"
        id="gedung"
        placeholder="Gedung"
        value="${getData.gedung}"
        class="border-2 border-black rounded-lg p-3 focus:border-amber-300 focus:border-4 focus:scale-103 focus:outline-none transition-all duration-100"
      />
    </div>

    <div class="flex flex-col">
      <label for="ruangan" class="font-semibold text-2xl mb-2">Ruangan</label>
      <input
        type="text"
        name="ruangan"
        id="ruangan"
        placeholder="Ruangan"
        value="${getData.ruangan}"
        class="border-2 border-black rounded-lg p-3 focus:border-amber-300 focus:border-4 focus:scale-103 focus:outline-none transition-all duration-100"
      />
    </div>
    
    <button
      type="submit"
      class="bg-amber-200 p-3 rounded-lg cursor-pointer hover:scale-105 transition-all ease-in-out duration-100 hover:font-semibold hover-btn-submit"
    >
      Update Jadwal
    </button>
  `;
};

const formJadwal = document.getElementById("form-update-jadwal");

const populateForm = async () => {
  const getData = await getJadwalDataByIndex(intIndex);
  formJadwal.innerHTML = elementForm(getData);
};

populateForm();

formJadwal.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    await updateJadwal(
      intIndex,
      data.get("matkul"),
      data.get("hari"),
      data.get("jam"),
      data.get("gedung"),
      data.get("ruangan"),
      data.get("dosen")
    );
    alert("Jadwal berhasil diperbarui!");
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
});
