export function initDifficultyMenu() {
    const difficultyButtons = document.querySelectorAll(".difficultyBtn");

    //load saved difficulty or default
    let selectedDifficulty = localStorage.getItem("selectedDifficulty") || "easy";

    function renderDifficultyButtons() {
        difficultyButtons.forEach(btn => {
            const level = btn.dataset.level;

            if (level === selectedDifficulty) {
                btn.classList.add("selected");
            } else {
                btn.classList.remove("selected");
            }
        });
    }

    //add click listeners
    difficultyButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            selectedDifficulty = btn.dataset.level;
            localStorage.setItem("selectedDifficulty", selectedDifficulty);
            renderDifficultyButtons();
        });
    });

    //initial render
    renderDifficultyButtons();
}