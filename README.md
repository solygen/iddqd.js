# iddqd.js

> god-mode for your web page or web app

```
//  _________________ ___________
// |_   _|  _  \  _  \  _  |  _  \
//   | | | | | | | | | | | | | | |
//   | | | | | | | | | | | | | | |
//  _| |_| |/ /| |/ /\ \/' / |/ /
//  \___/|___/ |___/  \_/\_\___/

listen for key sequence 'iddqd' 
```

**default callback**

adds class 'god-mode' to document body

## usage

- include script into your website
- keydown listener registers automatically
- once the sequence completed the (default) callback is executed

**custom callback**

- overwrite default callback simply `window.iddqd(yourCallback)`
- in case sequence already entered *yourCallback* will be executed immediately

**convenience**

- once sequnce entered... 
    - handler will be unregistered
    - `window.iddqd` will be overwritten with `function (cb) { cb(); }`

## build

```
npm install uglify-js -g
uglifyjs iddqd.js -o iddqd.min.js -m -c
```
