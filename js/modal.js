(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function toggleModal() {
  const body = document.querySelector('body');
  body.classList.toggle('no-scroll');
  refs.modal.classList.toggle('is-hidden');
}
})();


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }

//   function toggleModal() {
//   const body = document.querySelector('body');
//     body.classList.toggle('no-scroll');
    
//   const modalContent = refs.modal.querySelector('.modal-content');
//   if (modalContent) {
//     const isPortrait = window.innerHeight > window.innerWidth;
//     if (isPortrait) {
//       modalContent.classList.add('modal-scrollable');
//     } else {
//       modalContent.classList.remove('modal-scrollable');
//     }
//   }
  
//   refs.modal.classList.toggle('is-hidden');
// }
// })();

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }

//   function toggleModal() {
//     const body = document.querySelector('body');
//     body.classList.toggle('no-scroll');

//     const modalContent = refs.modal.querySelector('.modal-content');
//     if (modalContent) {
//       const isPortrait = window.innerHeight > window.innerWidth;
//       if (isPortrait) {
//         modalContent.style.height = '70vh'; // задаем высоту модального окна
//         modalContent.classList.add('modal-scrollable'); // добавляем класс со свойством overflow-y: auto;
//       } else {
//         modalContent.style.height = ''; // удаляем высоту модального окна, чтобы оно могло растягиваться по содержимому
//         modalContent.classList.remove('modal-scrollable');
//       }
//     }
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

