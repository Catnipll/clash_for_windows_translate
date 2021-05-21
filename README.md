# 重要提醒 (To Our Dear China Users / 至我们亲爱的中国用户)
## **翻译仅供学习** / **交流使用**，**若您认为本仓库内容涉嫌侵权**，**请联系我进行删除**；
## **若您在本仓库下载了任何文件**，**请在** *24* **小时以内全部删除**，**谢谢**。

# Clash for Windows Translate

A translated version of CFW

![Pr3v13w](https://github.com/zijianjiao2017/clash_for_windows_translate/raw/zh_CN/img/Preview.png)

## R39u13rm3n75
* [electron/asar](https://github.com/electron/asar)
* [beautify-web/js-beautify](https://github.com/beautify-web/js-beautify)
* [tdewolff/minify](https://github.com/tdewolff/minify)
* [cnSchwarzer/bsdiff-win](https://github.com/cnSchwarzer/bsdiff-win)

## 4pp1y 4 p47ch
* N073: D0 64ckup 63f0r3 p47ch1n9 7h3 r350urc35
````bash
bspatch original.asar translated.asar patch.dat
````

## Unp4ck r350urc35
* `0r191n41.454r` 15 fr0m `p47h/70/cfw/r350urc35/4pp.454r`
````bash
asar extract original.asar app
js-beautify app/dist/electron/{index.html,main.js,renderer.js}
````

## R3p4ck r350urc35
````bash
minify --type=html -o app/dist/electron/index.html app/dist/electron/index.html
minify --type=js -o app/dist/electron/main.js app/dist/electron/main.js
minify --type=js -o app/dist/electron/renderer.js app/dist/electron/renderer.js
asar pack app translated.asar
````

## 93n3r473 4 p47ch
````bash
bsdiff original.asar translated.asar patch.dat
````
