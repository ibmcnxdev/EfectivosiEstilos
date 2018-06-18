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

//------------------------------------------------------------------------------------
// >>>>> Aca hay que editar el texto de la ventana de termino de uso, en notacion HTML
//------------------------------------------------------------------------------------
var modaltext = ' \
<p><h2>Términos y condiciones Sinapsis</h2></p> \
\
<p><b><u>SINAPSIS</u></b> es una plataforma social y de colaboración, que ayuda a optimizar el trabajo en equipo y permite la comunicación inter-áreas.</p> \
\
<p><u><b>Lineamientos para el uso de la plataforma</b></u></p> \
<p style="align: justify; text-indent: 50px;">Se caracteriza por ser un espacio abierto para todos los colaboradores de la compañía,  por tal motivo es importante tener en cuenta que la información que allí se publique será visualizada por todos los usuarios, exceptuando aquella información que se encuentre en las comunidades restringidas.<br> \
Tanto la información como los documentos compartidos por alguno de los usuarios podrán ser utilizados únicamente por los colaboradores de la compañía o personas externas con acceso autorizado a SINAPSIS.</span> \
</p> \
<p style="align: justify; text-indent: 50px;">Para acceder a la plataforma, el usuario deberá utilizar una contraseña (password). La misma es de uso personal, confidencial, secreta e intransferible, y el colaborador se encuentra inhibido de divulgarla a terceros, por lo que asume las consecuencias derivadas del uso -aún el indebido-, por parte de terceros la cual es:<br> \
El colaborador que realice una publicación, deberá hacerlo en primera persona, aportando valor en cada uno de los comentarios, facilitando informaciones y perspectivas contrastadas. Cada uno es responsable de sus aportes y de las eventuales consultas/comentarios que surjan a partir de ello.<br> \
Este espacio constituye un foro de intercambio de opiniones para el debate constructivo, no es el ámbito apropiado para crear polémica, descalificar a otros usuarios o a terceros, tampoco es ámbito para realizar reclamos y/o presentar quejas, pudiendo estos ser canalizados por los medios que la compañía establece para tal fin.<br> \
El lenguaje a utilizarse debe ser apropiado para el ámbito laboral. Queda terminantemente  prohibido insultar, agredir o realizar publicaciones que impliquen algún tipo de discriminación.<br> \
El comportamiento dentro de la plataforma debe responder a los lineamientos establecidos en el "Código de Ética de CFA" (5107).<br> \
</p><br> \
\
<p><u><b>Restricciones a tener en cuenta</b></u></p> \
<p style="align: justify; text-indent: 50px;">Solo se  podrán  compartir  archivos  que  tengan  un  tamaño menor o igual a  10MB. Estas restricciones están  sujetas  al  ancho  de  banda  de  la  compañía,  compartir  archivos  de  un  tamaño mayor al indicado es riesgoso para el correcto funcionamiento de los sistemas del negocio. \
</p> \
\
<p><u><b>Clasificación del Nivel de Confidencialidad de la Información</b></u> \
</p> \
<p style="align: justify; text-indent: 50px;">CFA identifica y agrupa la información en 3 grandes grupos según su importancia, valor y grado de sensibilidad: <u><b>Información CONFIDENCIAL, RESTRINGIDA y PÚBLICA.</b></u> En función de ello, los colaboradores deberán tener en cuenta esta clasificación a la hora de realizar publicaciones en la plataforma SINAPSIS.</p> \
<p style="align: justify; text-indent: 50px;">En la sección "Gestión de Riesgos de TI - SI (5631)" punto 2.2 del manual,  se detalla la clasificación del nivel de confidencialidad de la información. Todos aquellos documentos o información que cumplan con alguna de estas características no podrán ser compartidos a través de SINAPSIS. \
</p><br> \
\
<p><u>A) Información Confidencial de CFA: </u></p> \
<p style="align: justify; text-indent: 50px;">Es aquella información que utiliza la compañía de manera reservada, la cual NO puede ser suministrada a terceros.</p> \
<br> \
<p><u>B) Información Restringida de CFA: </u></p> \
<p style="align: justify; text-indent: 50px;">Esta clasificación aplica a información destinada a utilizarse dentro de CFA para la operación normal del negocio, pero no para divulgación pública. Su acceso debe ser limitado a fin que puedan realizarse las tareas administrativas y operativas dentro del marco de seguridad definido.  Esta es la categoría por defecto para todos los activos de información no clasificados específicamente en otra categoría de información. Toda la información creada o adquirida por CFA es considerada información restringida de la Entidad, a menos que sea clasificada particularmente como de dominio público. La divulgación no autorizada de información de este tipo puede ocasionar daños a CFA, sus empleados o sus clientes. </p> \
<br> \
<p><u>C) Información Pública: </u></p> \
<p style="align: justify; text-indent: 50px;">Este tipo de comunicación, a diferencia de la confidencial, no posee ningún tipo de restricción y puede estar a disposición de todos los usuarios. No requiere más controles que los asociados con la protección de los derechos de autor y marca registrada. </p> \
<br> \
<p style="align: justify; text-indent: 50px;">Las comunidades oficiales de cada área serán administradas por los colaboradores correspondientes a cada gerencia. Los administradores de cada comunidad serán los responsables de administrar la información que se publique pudiendo eliminar o denunciar todo comportamiento que no cumpla con la normativa de la herramienta como así también con los términos y condiciones de uso de la misma.</p> \
\
<p style="align: justify; text-indent: 50px;">El colaborador suscribe y adhiere a la Plataforma Sinapsis de Efectivo Sí, mediante la "aceptación" o "confirmación" de las condiciones enunciadas anteriormente.</p><br><br> \
';
//------------------------------------------------------------------------------------

var modal = document.getElementById('lotusFrame');

function loadModal() {
    var node = document.createElement("div");
    node.innerHTML = '<div class="modal-content">'+modaltext+'<p><button onclick="oktous()">Aceptar</button></p></div>';
    node.id = "myModal";
    node.classList.add('modal');
    document.body.appendChild(node);
}

function checkCookie() {
    console.log("**********************");
    console.log("Usuario: "+gllConnectionsData.caller);
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Result: "+this.responseText);
            console.log("**********************");
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