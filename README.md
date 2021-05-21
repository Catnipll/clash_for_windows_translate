# Clash for Windows Translate

A translated version of CFW

![Preview](https://github.com/zijianjiao2017/clash_for_windows_translate/raw/zh_CN/img/Preview.png)

## Requierments
* [electron/asar](https://github.com/electron/asar)
* [beautify-web/js-beautify](https://github.com/beautify-web/js-beautify)
* [tdewolff/minify](https://github.com/tdewolff/minify)
* [cnSchwarzer/bsdiff-win](https://github.com/cnSchwarzer/bsdiff-win)

## Apply a patch
* Note: Do backup before patching the resources
````bash
bspatch original.asar translated.asar patch.dat
````

## Unpack resources
* `original.asar` is from `path/to/cfw/resources/app.asar`
````bash
asar extract original.asar app
js-beautify app/dist/electron/{index.html,main.js,renderer.js}
````

## Repack resources
````bash
minify --type=html -o dist/electron/index.html dist/electron/index.html
minify --type=js -o dist/electron/main.js dist/electron/main.js
minify --type=js -o dist/electron/renderer.js dist/electron/renderer.js
asar pack app translated.asar
````

## Generate a patch
````bash
bsdiff original.asar translated.asar patch.dat
````
