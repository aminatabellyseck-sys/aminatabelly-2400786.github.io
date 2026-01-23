const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            sec.classList.add("show");
        }
    });
});

const texts = ["Génie Informatique", "Développement Web", "Cybersécurité"];
let i = 0, j = 0;

setInterval(() => {
    document.querySelector(".multiple-text").textContent =
        texts[i].slice(0, j++);
    if (j > texts[i].length) {
        j = 0;
        i = (i + 1) % texts.length;
    }
}, 120);

const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.innerHTML = document.body.classList.contains("light")
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';

window.addEventListener("load", () => {
    document.querySelector("section").classList.add("show");
});

};
