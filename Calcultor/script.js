const result = document.querySelector(".result");
const button = document.querySelectorAll(".btn");

button.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("calculate")) {
            result.value = eval(result.value);
        } else if (button.classList.contains("clear")) {
            result.value = "";
        } else {
            result.value += button.value;
        }
    });
});
