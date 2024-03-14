console.log("Hello");
const button = document.querySelector(".js-button");
const header = document.querySelector(".header");

button.addEventListener("click", () => {
    header.classList.toggle("invisible");
    button.innerText = header.classList.contains("invisible") ? "Pokaż nagłówek" : "Usuń nagłóek";
});
