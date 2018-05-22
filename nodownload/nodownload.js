// ==UserScript==
// @copyright    Copyright IBM Corp. 2017
//
// @name         Modal Box
// @version      0.1
// @description  *** 
//
// @namespace  http://ibm.com
//
// @author       jleon@cl.ibm.com / Juan Ignacio Leon Plaza
//
// @include      *://apps.collabservintegration.com/communities/*  << for an specific community
//
// @exclude
//
// @run-at       document-end
//
// ==/UserScript==

document.addEventListener("DOMContentLoaded", function(event) { 
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', '/files/customizer/nodownload/nodownload.css?repoName=EfectivosiEstilos');
document.getElementsByTagName('head')[0].appendChild(link);  
});

var checkExist = setInterval(function() {
    if (document.getElementsByClassName("ics-viewer-toolbar")[0]) {
        var xelement = document.getElementsByClassName("ics-viewer-toolbar")[0];
        xelement.parentNode.removeChild(xelement);
        clearInterval(checkExist);
    }
}, 100);

var checkExistMore = setInterval(function() {
    if (document.getElementsByClassName("share")[0]) {
        var xshare = document.getElementsByClassName("share");
        xshare[0].parentNode.removeChild(xshare[0]);
        var xversion = document.getElementsByClassName("version");
        xversion[0].parentNode.removeChild(xversion[0]);
        var xabout = document.getElementsByClassName("about");
        xabout[0].parentNode.removeChild(xabout[0]);
        var xmore = document.getElementsByClassName("moreButton");
        xmore[0].parentNode.removeChild(xmore[0]);
        clearInterval(checkExistMore);
    }
}, 100);