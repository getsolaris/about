const darkSwitch = document.getElementById("darkSwitch");
const switchToggleLabel = document.getElementById('color-toggle-label')

function initTheme() {
    const e = null !== localStorage.getItem("darkSwitch") && "dark" === localStorage.getItem("darkSwitch");
    darkSwitch.checked = e, e ? (document.body.setAttribute("data-theme", "dark"), switchToggleLabel.innerHTML = 'Light Mode') : document.body.removeAttribute("data-theme")
}

function resetTheme() {
    darkSwitch.checked ?
        (document.body.setAttribute("data-theme", "dark"), localStorage.setItem("darkSwitch", "dark"), switchToggleLabel.innerHTML = 'Light Mode')
        : (document.body.removeAttribute("data-theme"), localStorage.removeItem("darkSwitch"), switchToggleLabel.innerHTML = 'Dark Mode')
}

window.addEventListener("load", () => {
    darkSwitch && (initTheme(), darkSwitch.addEventListener("change", () => {
        resetTheme()
    }))
});
