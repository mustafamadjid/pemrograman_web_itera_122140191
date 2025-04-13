class Jadwal {
  constructor(matkul, jam, hari, gedung, ruangan, dosen) {
    this.matkul = matkul;
    this.hari = hari;
    this.jam = jam;
    this.gedung = gedung;
    this.ruangan = ruangan;
    this.dosen = dosen;
  }

  show() {
    return `${this.matkul} - ${this.hari} - ${this.jam} - ${this.gedung} - ${this.ruangan} - ${this.dosen}`;
  }
}

export const getJadwal = async () => {
  const data = localStorage.getItem("jadwal");

  if (data) {
    const jadwalArray = JSON.parse(data);
    return jadwalArray.map(
      (item) =>
        new Jadwal(
          item.matkul,
          item.hari,
          item.jam,
          item.gedung,
          item.ruangan,
          item.dosen
        )
    );
  }
  return [];
};

const setJadwal = async (jadwal) => {
  try {
    localStorage.setItem("jadwal", JSON.stringify(jadwal));
    console.log(jadwal);
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

export const addJadwal = async (matkul, hari, jam, gedung, ruangan, dosen) => {
  try {
    const data = await getJadwal();
    data.forEach((element) => {
      if (
        element.matkul === matkul &&
        element.hari === hari &&
        element.jam === jam &&
        element.gedung === gedung &&
        element.ruangan === ruangan &&
        element.dosen === dosen
      ) {
        alert("Jadwal sudah ada");
        return;
      }
    });
    const tambahJadwal = new Jadwal(matkul, hari, jam, gedung, ruangan, dosen);
    data.push(tambahJadwal);
    await setJadwal(data);
  } catch (error) {
    console.log(error);
  }
};

export const updateJadwal = async (
  index,
  matkul,
  hari,
  jam,
  gedung,
  ruangan,
  dosen
) => {
  try {
    const data = await getJadwal();
    data[index].matkul = matkul;
    data[index].hari = hari;
    data[index].jam = jam;
    data[index].gedung = gedung;
    data[index].ruangan = ruangan;
    data[index].dosen = dosen;
    await setJadwal(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteJadwal = async (index) => {
  try {
    const data = await getJadwal();
    data.splice(index, 1);
    await setJadwal(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
};

const clearJadwal = async () => {
  try {
    localStorage.removeItem("jadwal");
  } catch (error) {
    console.log(error);
  }
};

// Menampilkan Jadwal
const showJadwal = async () => {
  const data = await getJadwal();

  const result = data
    .map(
      (element, index) => `
      <div class="bg-white p-5 rounded-lg mt-5" id="jadwal-list">
        <div class="flex justify-between mt-3">
          <p class="font-semibold text-xl w-[150px] text-center">${element.matkul}</p>
          <p class="font-semibold text-xl w-[200px] text-center">${element.dosen}</p>
          <p class="font-semibold text-xl w-[100px] text-center">${element.hari}</p>
          <p class="font-semibold text-xl w-[120px] text-center">${element.jam}</p>
          <p class="font-semibold text-xl w-[100px] text-center">${element.gedung}</p>
          <p class="font-semibold text-xl w-[100px] text-center">${element.ruangan}</p>
        </div>
        <div class="flex justify-end gap-5 mt-2">
          <a href="formUpdateJadwal.html?index=${index}">
            <button class="bg-green-400 p-1 rounded-lg text-white font-semibold cursor-pointer hover-btn transition-all ease-in-out duration-300">
              <i class="fa-regular fa-pen-to-square"></i> Edit Jadwal
            </button>
          </a>
          <a href="#" >
            <button class="bg-red-400 p-1 rounded-lg text-white font-semibold cursor-pointer hover-btn transition-all ease-in-out duration-300 delete-btn" index="${index}" id="delete-btn">
              <i class="fa-regular fa-trash-can"></i> Hapus
            </button>
          </a>
        </div>
      </div>`
    )
    .join("");

  document.getElementById("jadwal-list").innerHTML = result;
};

const jadwalList = document.getElementById("jadwal-list");

if (jadwalList) {
  jadwalList.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("delete-btn")) {
      const index = e.target.getAttribute("data-index");
      deleteJadwal(index);
    }
  });
} else {
  console.warn(
    "Elemen dengan id 'jadwal-list' tidak ditemukan di halaman ini."
  );
}

showJadwal();
