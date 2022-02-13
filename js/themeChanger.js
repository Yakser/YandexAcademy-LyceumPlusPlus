let themeModeBtn = document.getElementById("js-theme-mode-btn");
let lightModeIco = document.getElementById("js-light-mode-ico");
let darkModeIco = document.getElementById("js-dark-mode-ico");

const setLightTheme = () => {
    lightModeIco.style.display = "block";
    darkModeIco.style.display = "none";
    localStorage.setItem("theme", "light");
};

const setDarkTheme = () => {
    lightModeIco.style.display = "none";
    darkModeIco.style.display = "block";
    localStorage.setItem("theme", "dark");
};

if (localStorage.getItem("theme") == "light") {
    setLightTheme();
    document.body.classList.remove("dark-mode");
} else {
    setDarkTheme();
    document.body.classList.add("dark-mode");
}

themeModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        setDarkTheme();
    } else {
        setLightTheme();
    }
});
