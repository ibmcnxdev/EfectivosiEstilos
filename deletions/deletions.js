// ==UserScript==
// @copyright    Copyright IBM Corp. 2017
//
// @name         Modal Box
// @version      0.1
// @description  *** 
//
// @namespace  http://ibm.com
//
// @author       jleon@cl.ibm.com
//
// @include      *://apps.collabservintegration.com/homepage/*
//
// @exclude
//
// @run-at       document-end
//
// ==/UserScript==

var checkExist = setInterval(function() {
    if (document.getElementById("1").childNodes[0]) {
        var xelement = document.getElementById("1");
        xelement.childNodes[0].style.display = "none";
        console.log(">>> (OK) >>>  Meetings widget hidden");
        clearInterval(checkExist);
    } else {
        console.log(">>> (!) >>> meeting widget non-existent, waiting");
    }
}, 500);