window.translateRadzenFilters = () => {
    document.addEventListener("click", () => {
        setTimeout(() => {
            // 🔹 Traducir las opciones dentro del dropdown
            document.querySelectorAll(".rz-dropdown-item").forEach(item => {
                let ariaLabel = item.getAttribute("aria-label");
                if (ariaLabel) {
                    switch (ariaLabel.trim()) {
                        case "Equals": item.innerText = "Igual a"; break;
                        case "Not equals": item.innerText = "Distinto de"; break;
                        case "Contains": item.innerText = "Contiene"; break;
                        case "Starts with": item.innerText = "Empieza con"; break;
                        case "Ends with": item.innerText = "Termina con"; break;
                        case "Less than": item.innerText = "Menor que"; break;
                        case "Greater than": item.innerText = "Mayor que"; break;
                        case "Less than or equals": item.innerText = "Menor o igual que"; break;
                        case "Greater than or equals": item.innerText = "Mayor o igual que"; break;
                        case "Is null": item.innerText = "Es nulo"; break;
                        case "Is not null": item.innerText = "No es nulo"; break;
                    }
                }
            });

            // 🔹 Traducir los botones "CLEAR" y "APPLY"
            document.querySelectorAll(".rz-button-text").forEach(btn => {
                let btnText = btn.innerText.trim();
                if (btnText === "CLEAR") btn.innerText = "LIMPIAR";
                if (btnText === "APPLY") btn.innerText = "APLICAR";
            });

            // 🔹 Traducir el título del filtro
            document.querySelectorAll(".rz-grid-filter span").forEach(title => {
                if (title.innerText.trim() === "Filter") {
                    title.innerText = "Filtrar";
                }
            });

        }, 200);
    });

    // **Detectar cambios en el dropdown y actualizar el input del filtro**
    document.addEventListener("click", (event) => {
        let selectedOption = event.target.closest(".rz-dropdown-item");
        if (selectedOption) {
            setTimeout(() => {
                let dropdownContainer = selectedOption.closest(".rz-dropdown");
                if (!dropdownContainer) return;  // Evitar errores si es null

                let selectedLabel = dropdownContainer.querySelector(".rz-dropdown-label");
                let selectedText = selectedOption.innerText.trim();  // Obtener la opción seleccionada

                if (selectedLabel) {
                    switch (selectedText) {
                        case "Equals": selectedLabel.innerText = "Igual a"; break;
                        case "Not equals": selectedLabel.innerText = "Distinto de"; break;
                        case "Contains": selectedLabel.innerText = "Contiene"; break;
                        case "Starts with": selectedLabel.innerText = "Empieza con"; break;
                        case "Ends with": selectedLabel.innerText = "Termina con"; break;
                        case "Less than": selectedLabel.innerText = "Menor que"; break;
                        case "Greater than": selectedLabel.innerText = "Mayor que"; break;
                        case "Less than or equals": selectedLabel.innerText = "Menor o igual que"; break;
                        case "Greater than or equals": selectedLabel.innerText = "Mayor o igual que"; break;
                    }
                }
            }, 100);
        }
    });

    // **Forzar la traducción del input después de cambiar una opción**
    const observer = new MutationObserver(() => {
        document.querySelectorAll(".rz-dropdown-label").forEach(label => {
            let text = label.innerText.trim();
            switch (text) {
                case "Equals": label.innerText = "Igual a"; break;
                case "Not equals": label.innerText = "Distinto de"; break;
                case "Contains": label.innerText = "Contiene"; break;
                case "Starts with": label.innerText = "Empieza con"; break;
                case "Ends with": label.innerText = "Termina con"; break;
                case "Less than": label.innerText = "Menor que"; break;
                case "Greater than": label.innerText = "Mayor que"; break;
                case "Less than or equals": label.innerText = "Menor o igual que"; break;
                case "Greater than or equals": label.innerText = "Mayor o igual que"; break;
            }
        });
    });

    // **Activar el observador para detectar cambios en el input**
    observer.observe(document.body, { childList: true, subtree: true });
};
