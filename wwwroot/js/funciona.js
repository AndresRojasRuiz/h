window.translateRadzenFilters = () => {
    document.addEventListener("click", () => {
        setTimeout(() => {
            // 🔹 Traducir opciones dentro del dropdown
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

            // 🔹 Traducir botones "CLEAR" y "APPLY"
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

            setTimeout(() => {
                document.querySelectorAll(".rz-dropdown-item").forEach(item => {
                    let text = item.innerText.trim();
                    if (text === "And") item.innerText = "Y";
                    if (text === "Or") item.innerText = "O";
                });
            }, 300);

        }, 200);
    });
};
