document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacte");
    const missatge = document.getElementById("missatgeConfirmacio");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            if (missatge) {
                missatge.classList.remove("d-none");
            }

            form.reset();
        });
    }
});