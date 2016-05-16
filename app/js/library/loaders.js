/**
 * Created by webs on 04.05.16.
 */
;(function () {
    'use strict';

    exports.loadJS = function loadJS(path, callback) {

        callback = callback || function () {};
        var done = false;
        var scr = document.createElement('script');

        scr.onload = handleLoad;
        scr.onreadystatechange = handleReadyStateChange;
        scr.onerror = handleError;
        scr.src = path;
        document.body.appendChild(scr);

        function handleLoad() {
            if (!done) {
                done = true;
                callback(path, 'ok');
            }
        }
        function handleReadyStateChange() {
            var state;

            if (!done) {
                state = scr.readyState;
                if (state === 'complete') {
                    handleLoad();
                }
            }
        }
        function handleError() {
            if (!done) {
                done = true;
                callback(path, 'error');
            }
        }
    }
    exports.loadCSS = function loadCSSFile(path, callback) {

        callback = callback || function () {};
        var done = false;
        var scr = document.createElement('link');
        scr.setAttribute('rel', 'stylesheet');
        scr.setAttribute('type', 'text/css');
        scr.onload = handleLoad;
        scr.onreadystatechange = handleReadyStateChange;
        scr.onerror = handleError;
        scr.href = path;
        document.getElementsByTagName('head')[0].appendChild(scr);

        function handleLoad() {
            if (!done) {
                done = true;
                callback(path, 'ok');
            }
        }
        function handleReadyStateChange() {
            var state;

            if (!done) {
                state = scr.readyState;
                if (state === 'complete') {
                    handleLoad();
                }
            }
        }
        function handleError() {
            if (!done) {
                done = true;
                callback(path, 'error');
            }
        }
    }

})();
