const initSlider = () => {
    const imageList = document.querySelector(".Project .mini-project");
    const moveButton = document.querySelectorAll(".Project .move-button");

    moveButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "move-left" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
}

window.addEventListener("load", initSlider);
