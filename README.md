# js-css-themes
allows simple css theme (e.g. dark mode, light mode, contrast, ...) management via vanilla-js

it basically allows you to set css variables easily, but to also change them in runtime.

For instance:

```html
<script>
    window.setTheme("light")
</script>
<style>
body {
    background: var(--neutral);
}
</style>
```

Now the background of the body should be #d4d4d4 (as defined in themes.json).

but after running `window.setTheme("dark");` the background should almost instantly turn into #374148 (as defined in themes.json).

works out of the box in vue and nuxt (else it might require slight modifications)
code is meant for client side only (no SSR (Server-Side Rendering)!)

## theme.client.js
main code, needs to be imported once
```html
<script src="theme.client.js"></script>
```
You can call `getThemes()` and `setTheme(themeName)` from any client js code.

You might need to reference the window object: `window.getThemes()` or `window.setTheme(themeName)`

## themes.json
All themes must be predefined here. Themes.json already has some predefined themes in this repository, but you can also just replace them with your own
