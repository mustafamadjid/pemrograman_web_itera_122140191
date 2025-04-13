const inputNama = document.getElementById("input-nama");
const inputEmail = document.getElementById("input-email");
const inputPassword = document.getElementById("input-password");

const btnSubmit = document.getElementById("btn-submit");

const popupWrapper = document.getElementById("popup");
const popupText = document.getElementById("popup-text");

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const nama = inputNama.value;
  const email = inputEmail.value;
  const password = inputPassword.value;

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nama.trim() === "" || email.trim() === "" || password.trim() === "") {
    alert("Silakan lengkapi data");
  } else {
    if (nama.length < 3) {
      alert("Nama minimal 3 karakter");
    } else {
      if (!emailRegex.test(email)) {
        alert("Email anda tidak valid");
      } else {
        if (password.length < 8) {
          alert("Password minimal 8 karakter");
        } else {
          const successText = `Nama: ${inputNama.value} <br> Email: ${inputEmail.value}`;
          popupText.innerHTML = successText;
          popupWrapper.classList.remove("hidden");
        }
      }
    }
  }

  //   popupWrapper.style.display = "block";
});
