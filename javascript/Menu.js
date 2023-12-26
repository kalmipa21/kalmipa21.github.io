const menu_button = document.querySelector(".menu_button");
const menu_list = document.querySelector(".menu_list");
const close_active = document.querySelector(".close_active");
const menu_active = document.querySelector(".menu_active");
const home_button = document.querySelector(".home_button");

menu_button.addEventListener("click", () => {
  close_active.classList.toggle("active");
  menu_active.classList.toggle("active");
  menu_list.classList.toggle("active");
  menu_button.classList.toggle("active");
  home_button.classList.toggle("active");
});

document.querySelectorAll(".menu_list a").forEach((n) =>
  n.addEventListener("click", () => {
    close_active.classList.toggle("active");
    menu_active.classList.toggle("active");
    menu_list.classList.toggle("active");
    menu_button.classList.toggle("active");
    home_button.classList.toggle("active");
  })
);
