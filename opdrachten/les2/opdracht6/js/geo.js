/***
* cmdaan.js
*   Bevat functies voor CMDAan stijl geolocatie welke uitgelegd
*   zijn tijdens het techniek college in week 5.
*
*   Author: J.P. Sturkenboom <j.p.sturkenboom@hva.nl>
*   Credit: Dive into html5, geo.js, Nicholas C. Zakas
*
*   Copyleft 2012, all wrongs reversed.
*/

var app = app || {};
(function() {
    app.controller = {
        init: function() {
            gps.init();
            debug.init();
        }
    }
    app.gps = {}
    app.map = {}
    app.debug = {}
})();
