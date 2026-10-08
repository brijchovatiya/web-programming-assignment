/*
Adds a light/dark theme with vanilla JavaScript, without any libraries.
Based on codedgar's example: CSS variables, a class toggle, and localStorage.
https://dev.to/codedgar/how-to-create-a-dark-theme-system-in-5-minutes-or-less-with-vanilla-js-2922
*/

/* Finds the HTML element and the theme button shared by all four pages. */
const page = document.documentElement;
const themeButton = document.querySelector("#theme-toggler");
const storageKey = "web_programming_theme";

/* Shows the action the button will perform when it is clicked next. */
function updateButton() {
    if (page.classList.contains("dark_mode")) {
        themeButton.textContent = "Switch to light theme";
    } else {
        themeButton.textContent = "Switch to dark theme";
    }
}

/* Restores only a recognized theme, so unexpected saved values are ignored. */
function retrieveTheme() {
    try {
        const savedTheme = localStorage.getItem(storageKey);
        page.classList.toggle("dark_mode", savedTheme === "dark_mode");
    } catch (error) {
        /* Keeps the default light theme if the browser blocks localStorage. */
    }

    updateButton();
}

/* Changes the CSS variables by toggling one class, then saves the choice. */
themeButton.addEventListener("click", function () {
    page.classList.toggle("dark_mode");
    updateButton();

    try {
        if (page.classList.contains("dark_mode")) {
            localStorage.setItem(storageKey, "dark_mode");
        } else {
            localStorage.setItem(storageKey, "default");
        }
    } catch (error) {
        /* The button still works when the browser cannot save the choice. */
    }
});

/* Applies the saved choice when a page opens or the visitor refreshes it. */
retrieveTheme();

/* Keeps other open tabs in sync when the saved theme changes. */
window.addEventListener("storage", function (event) {
    if (event.key === storageKey || event.key === null) {
        retrieveTheme();
    }
});
