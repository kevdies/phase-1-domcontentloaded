document.addEventListener("DOMContentLoaded", () => {
    changeText();
});

function changeText() {
    let p = document.getElementById("text")

        p.textContent = "This is really cool!";
}
