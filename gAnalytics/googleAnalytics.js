////
// @author L Florez y Stefano Poglianu, IBM
// @name Add Google Analytics to IBM Connections
// @version 0.1
// @date February, 2017
//

(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.onload = function(){
        // remote script has loaded
    };
    script.src = 'https://www.googletagmanager.com/gtag/js?id=<ID de Seguimiento>';
    d.getElementsByTagName('head')[0].appendChild(script);
}(document));

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '<ID de Seguimiento>');
