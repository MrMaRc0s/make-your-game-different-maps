import { maps } from "./mapData.js";

export function initMapMenuInSettings() {
    const mapButtons = document.getElementById("mapButtons");

    let selectedMap = localStorage.getItem("selectedMap") || "default";

    function renderMapButtons() {
        mapButtons.innerHTML = "";

        Object.keys(maps).forEach(mapName => {
            const btn = document.createElement("button");
            btn.className = "mapBtn";
            btn.textContent = mapName.toUpperCase();

            if (mapName === selectedMap) {
                btn.classList.add("selected");
            }

            btn.addEventListener("click", () => {
                selectedMap = mapName;
                localStorage.setItem("selectedMap", mapName);
                renderMapButtons();
            });

            mapButtons.appendChild(btn);
        });
    }

    renderMapButtons();
}