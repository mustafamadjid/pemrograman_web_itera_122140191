function hitungKalkulator(angka1, angka2, operasi) {
  let hasil = 0;
  switch (operasi) {
    case "tambah":
      hasil = angka1 + angka2;
      break;
    case "kurang":
      hasil = angka1 - angka2;
      break;
    case "kali":
      hasil = angka1 * angka2;
      break;
    case "bagi":
      if (angka2 === 0) {
        return "Error: Pembagian dengan nol tidak diperbolehkan";
      }
      hasil = angka1 / angka2;
      break;
    case "pangkat":
      hasil = Math.pow(angka1, angka2);
      break;
    case "modulo":
      hasil = angka1 % angka2;
      break;
    case "akar":
      hasil = Math.sqrt(angka1);
      break;
    default:
      return "Operasi tidak valid";
  }
  return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "tambah");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kurang").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kurang");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-kali").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "kali");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-bagi").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "bagi");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-pangkat").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "pangkat");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} pangkat ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-modulo").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);
  const angka2 = parseFloat(document.getElementById("angka2").value);

  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, angka2, "modulo");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
  }
});

document.getElementById("btn-akar").addEventListener("click", function () {
  const angka1 = parseFloat(document.getElementById("angka1").value);

  if (isNaN(angka1)) {
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p class="text-red-500">Masukkan angka yang valid!</p>`;
  } else {
    const hasil = hitungKalkulator(angka1, 0, "akar");
    document.getElementById(
      "hasil-kalkulator"
    ).innerHTML = `<p>Hasil: akar ${angka1} = ${hasil}</p>`;
  }
});
