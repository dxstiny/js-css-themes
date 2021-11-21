// November 2021, dxstiny (https://github.com/dxstiny)
// check out the README.md!

import themes from "./themes.json";
//fetch("/assets/themes/themes.json").then(x => x.json()).then(json => themes = json) // in case you can't use import


const LOCAL_STORAGE_KEY = "theme" // change it to whatever you like

window.getThemes = () => { // returns a string array of all available themes
    window.themes = Object.keys(themes[Object.keys(themes)[0]]);
    return window.themes;
}

window.setTheme = (theme) => { // accepts a string (theme name)
    if (!window.getThemes().includes(theme))
    {
        return;
    }

    window.localStorage.setItem(LOCAL_STORAGE_KEY, theme)
    for (const key of Object.keys(themes))
    {
        document.documentElement.style.setProperty(`--${key}`, themes[key][theme]);
    }
}

window.setTheme(window.localStorage.getItem(LOCAL_STORAGE_KEY) || "dark-neon") // optional, loads the default theme
