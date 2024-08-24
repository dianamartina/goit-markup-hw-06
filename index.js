const button = document.querySelector(".order-button");
const backdrop = document.querySelector(".modal-backdrop");
const menu = document.querySelector(".hamburger-menu");
const modalMenu = document.querySelector(".menu-modal");

// form modal open/close
button.addEventListener("click", toggleModal);
backdrop.addEventListener("click", (e) => {
  const target = e.target.closest(".close-modal-button");

  if (!target) {
    return;
  }
  toggleModal();
});

// menu modal open/close
menu.addEventListener("click", toggleModalMenu);
modalMenu.addEventListener("click", (e) => {
  const target = e.target.closest(".close-modal-button");

  if (!target) {
    return;
  }
  toggleModalMenu();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}

function toggleModalMenu() {
  modalMenu.classList.toggle("is-open");
}
