/**
 * iddqd.js - god-mode for your web page or web app
 * @license - unlicense
 * https://github.com/solygen/iddqd.js
 */

//  _________________ ___________
// |_   _|  _  \  _  \  _  |  _  \
//   | | | | | | | | | | | | | | |
//   | | | | | | | | | | | | | | |
//  _| |_| |/ /| |/ /\ \/' / |/ /
//  \___/|___/ |___/  \_/\_\___/

(function () {
    var conf = {
            // i d d q d
            list: [73, 68, 68, 81, 68],
            index: 0
        },
        callback = function () {
            // enable god mode
            window.document.body.classList.add('god-mode');
        },
        handler = function (e) {
            // wrong key: resets index
            if (conf.list[conf.index] !== e.keyCode) return (conf.index = 0);
            // right key: increments index
            if (conf.index !== conf.list.length - 1) return (conf.index = conf.index + 1);
            // complete sequence
            complete();
        },
        complete = function () {
            window.document.removeEventListener('keydown', handler, true);
            callback();
            conf = callback = null;
            // in case callback changes afterwards
            window.iddqd = function (cb) { cb(); }
        };
    // register keydown listener
    window.document.addEventListener('keydown', handler, true)
    // set callback
    window.iddqd = function (cb) {
        callback = cb || callback;
    }
    // init with default callback
    window.iddqd();

})();
