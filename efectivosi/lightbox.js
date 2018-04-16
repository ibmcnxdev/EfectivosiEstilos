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

if(typeof(dojo) != "undefined") {
	require(["dojo/domReady!"], function(){
        try {
            dojo.place(
                "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/efectivosi/modal.css?repoName=EfectivosiEstilos\"></link>",
                dojo.doc.head,
                "last"
            );

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.onload = function() {
                checkCookie();
            }
            script.src = '/files/customizer/efectivosi/modal.js?repoName=EfectivosiEstilos';
            document.body.appendChild(script);
            
            
            // utility function to let us wait for a specific element of the page to load...
            var waitFor = function(callback, elXpath, elXpathRoot, maxInter, waitTime) {
                if(!elXpathRoot) var elXpathRoot = dojo.body();
                if(!maxInter) var maxInter = 10000;  // number of intervals before expiring
                if(!waitTime) var waitTime = 1;  // 1000=1 second
                if(!elXpath) return;
                var waitInter = 0;  // current interval
                var intId = setInterval( function(){
                    if( ++waitInter<maxInter && !dojo.query(elXpath,elXpathRoot).length) return;

                    clearInterval(intId);
                    if( waitInter >= maxInter) { 
                        console.log("**** WAITFOR ["+elXpath+"] WATCH EXPIRED!!! interval "+waitInter+" (max:"+maxInter+")");
                    } else {
                        console.log("**** WAITFOR ["+elXpath+"] WATCH TRIPPED AT interval "+waitInter+" (max:"+maxInter+")");
                        callback();
                    }
                }, waitTime);
            };

      } catch(e) {
          alert("Exception occurred in helloWorld: " + e);
      }
   });
}