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

document.addEventListener("DOMContentLoaded", function(event) { 
var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('type', 'text/css');
link.setAttribute('href', '/files/customizer/modal/modal.css?repoName=EfectivosiEstilos');
document.getElementsByTagName('head')[0].appendChild(link);

var modaltext = `
<p><h3>Termino de uso de la plataforma</h3></p>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Ut cursus tincidunt metus a fermentum. Aliquam euismod quam ligula, a aliquam nisi porta non. 
Donec at tortor in urna euismod aliquam. Vestibulum scelerisque augue ac lectus pulvinar, nec rutrum lorem rutrum. 
Etiam egestas nisi tellus, vitae vestibulum est bibendum at. 
Nam volutpat, nisi sit amet facilisis aliquet, mi tortor scelerisque orci, nec mollis urna mi eu justo. 
Donec bibendum ante arcu, in ullamcorper ligula imperdiet sit amet. Pellentesque efficitur mauris vel leo tempor tincidunt.
Cras vel auctor ex, ac mattis ante. Quisque ullamcorper est ac elementum molestie. Mauris facilisis mollis neque nec posuere. 
In pulvinar, arcu pharetra venenatis vulputate, augue libero aliquet lorem, ut facilisis neque urna vitae ex.
Fusce neque nibh, hendrerit ut purus rhoncus, consectetur ullamcorper eros. Proin purus tellus, auctor vitae odio eget, dictum finibus massa.
</p>

<p>
Suspendisse aliquam egestas turpis id vestibulum. Mauris finibus posuere arcu. Proin id sollicitudin est. 
Donec et iaculis nunc, id fringilla elit. Curabitur pellentesque ligula ut congue aliquam. 
In hac habitasse platea dictumst. Morbi pretium ante arcu. Vivamus sed nulla urna. Fusce odio urna, 
varius ac placerat sed, suscipit vel nunc. Ut cursus neque at dolor venenatis, in euismod dui egestas. 
Suspendisse potenti. Vivamus vulputate mauris eget varius imperdiet. Nunc metus lorem, efficitur consectetur gravida laoreet, 
dapibus vel massa. Aliquam sed ligula id ligula mattis tempus et nec metus.<br>Nam porta turpis sed libero hendrerit 
iaculis. Aenean tristique odio velit, sollicitudin rhoncus ex tincidunt a. Nullam posuere turpis sit amet faucibus 
efficitur. Integer nec lacus vestibulum, elementum libero eget, mattis diam. Vestibulum mollis nisi non est 
rhoncus ultrices. Sed ac lectus at lectus tempus varius. In consequat nunc quis est fermentum gravida.<br>Ut sem nisi, 
congue quis interdum non, ullamcorper eget diam. Pellentesque volutpat mi ut turpis ullamcorper ullamcorper. 
Duis lorem felis, auctor quis nisl eget, egestas suscipit justo. Vivamus mollis tellus eu condimentum feugiat. 
Sed sodales libero vel arcu auctor, eu aliquet felis feugiat. Phasellus porta, mi eget fringilla ullamcorper, 
turpis ante ornare felis, in bibendum neque nisl ac risus. Fusce pretium consectetur nisi, ac tincidunt tortor 
bibendum id. Duis sed eleifend est. Suspendisse tempor nunc consequat mattis vulputate. Sed ornare ipsum sem, 
sed feugiat ante ullamcorper a. Mauris non cursus arcu. Nunc pharetra libero id bibendum volutpat. 
Pellentesque eget pulvinar nunc. Curabitur vitae arcu velit. Nam mattis elit ipsum, sit amet ultricies ante venenatis et.
</p>

<p><b>Si no está de acuerdo con los terminos, favor abandone el uso de la plataforma inmediatamente.</b></p>';
`;
var modal = document.getElementById('lotusFrame');

function loadModal() {
    var node = document.createElement("div");
    node.innerHTML = '<div class="modal-content">'+modaltext+'<p><button onclick="oktous()">Aceptar</button></p></div>';
    node.id = "myModal";
    node.classList.add('modal');
    document.body.appendChild(node);
}

function checkCookie() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("***** Response Text: "+this.responseText);
            if (this.responseText != "OK") {
                loadModal();
                var modal = document.getElementById('myModal');
                modal.style.display = "block";
            }
        }
    };
    xhttp.open("GET", "https://esi-teyco.mybluemix.net/api/check?email="+gllConnectionsData.caller, true);
    xhttp.send();
}

checkCookie();
});

function oktous() {
	var modal = document.getElementById('myModal');
    modal.style.display = "none";
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("***** Response Text: "+this.responseText);
        }
    };
    xhttp2.open("GET", "https://esi-teyco.mybluemix.net/api/save?email="+gllConnectionsData.caller+"&userid="+gllConnectionsData.userId+"&username="+gllConnectionsData.userName, true);
    xhttp2.send();
}