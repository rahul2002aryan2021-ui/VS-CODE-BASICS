// ===============================
// VS Code Guide | Devl Rahul
// ===============================

// Elements
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const progressBar = document.getElementById("progressBar");
const search = document.getElementById("search");

// ===============================
// Dark / Light Mode
// ===============================

let darkMode = true;

themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    if (darkMode) {

        document.body.style.background = "#0f172a";
        document.body.style.color = "#ffffff";

        themeBtn.innerHTML = '<i class="ri-moon-fill"></i>';

    } else {

        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#111";

        themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';

    }

});

// ===============================
// Mobile Sidebar
// ===============================

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// ===============================
// Scroll Progress Bar
// ===============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ===============================
// Live Search
// ===============================

search.addEventListener("keyup", () => {

    let value = search.value.toLowerCase();

    let links = document.querySelectorAll("#sidebar ul li");

    links.forEach(item => {

        let text = item.innerText.toLowerCase();

        if (text.includes(value)) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

});