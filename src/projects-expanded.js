const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

// openModal.addEventListener("click", () => {
//   modal.showModal();
// });

// closeModal.addEventListener("click", () => {
//   modal.close();
// });


const modals = document.querySelectorAll(".modal");
const openModals = document.querySelectorAll(".open-button");
const closeModals = document.querySelectorAll(".close-button");

for(let i = 0; i < modals.length; i++){
  openModals[i].addEventListener("click", () => {
    console.log("open");
    modals[i].showModal();
    // document.body.style.overflow = 'hidden';
  });
  closeModals[i].addEventListener("click", () => {
    console.log("close");
    modals[i].close();
  });
}


const dialogs = document.querySelectorAll("dialog");

for(let i = 0; i < dialogs.length; i++){
  dialogs[i].addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target === dialogs[i]) {
      // dialogs[i].close();
    }
    if (!$(e.target).closest(".modal,open-button").length) {
      console.log(e.target);
      // modal.close();
      // $("body").find(".modal").removeClass("visible");
    }
  });
}