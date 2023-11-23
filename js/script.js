document.addEventListener("DOMContentLoaded", function () {
    const districtButtons = document.querySelectorAll(".district-button");
    const districtInfos = document.querySelectorAll(".district-info");

    districtButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const districtName = button.getAttribute("data-district");

            // Oculta todos los distritos
            districtInfos.forEach((info) => {
                info.classList.remove("active");
            });

            // Muestra el distrito seleccionado
            const selectedDistrict = document.querySelector(`.district-info[data-district="${districtName}"]`);
            selectedDistrict.classList.add("active");

            // Activa el botón seleccionado y desactiva los demás
            districtButtons.forEach((btn) => {
                btn.classList.remove("active");
            });
            button.classList.add("active");
        });
    });
});