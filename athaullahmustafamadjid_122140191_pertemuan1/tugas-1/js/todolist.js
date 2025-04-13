const form = document.getElementById("form-tugas");

form.addEventListener("submit", (event) => {
  const input = document.getElementById("input-tugas");
  const taskValue = input.value;

  let data = [];

  if (localStorage.length == 0) {
    data = [
      {
        task: taskValue,
        status: false,
      },
    ];
  } else {
    const tasks = JSON.parse(localStorage.getItem("task"));
    data = [...tasks, { task: taskValue, status: false }];
  }

  if (taskValue === "") {
    alert("Masukkan Tugas");
    return;
  } else {
    console.log(data);
    localStorage.setItem("task", JSON.stringify(data));
  }

  input.value = "";
});

const taskList = document.getElementById("todoList");
const getTasks = JSON.parse(localStorage.getItem("task")) || [];

const renderTasks = getTasks
  .map((data, index) => {
    return `
    <li class="flex items-center justify-between p-2 ">
      <span class="flex-1 mb-4 ${data.status ? "line-through" : ""} text-xl">${
      data.task
    } </span>
      <button class="ml-4 mb-4 border rounded-md p-2 cursor-pointer hover:bg-gray-200" id="btn-status" data-index="${index}" type="button">
        ${data.status ? "Batalkan" : "Selesai"}
      </button>
      <button class="ml-4 mb-4 border rounded-md p-2 cursor-pointer hover:bg-gray-200" id="btn-hapus" data-index="${index}" type="button">
        Hapus
      </button>
    </li>
  `;
  })
  .join("");

taskList.innerHTML = renderTasks;

document.querySelectorAll("#btn-status").forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    if (getTasks[index].status) {
      getTasks[index].status = false;
    } else {
      getTasks[index].status = true;
    }
    localStorage.setItem("task", JSON.stringify(getTasks));
    location.reload();
  });
});

document.querySelectorAll("#btn-hapus").forEach((button) => {
  button.addEventListener("click", function () {
    const index = this.getAttribute("data-index");

    getTasks.splice(index, 1);

    localStorage.setItem("task", JSON.stringify(getTasks));
    location.reload();
  });
});
