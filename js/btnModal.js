// const recetaDos
const btnReceta = document.querySelector(".yith-wcbm-badge-7571");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const modal = document.querySelector("#modal-receta");
console.log(btnReceta)
btnReceta.addEventListener("click", ()=>{
    alert();
    modal.showModal();
})
btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})