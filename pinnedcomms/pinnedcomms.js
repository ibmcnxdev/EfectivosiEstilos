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
// @include      *://apps.collabservintegration.com/communities/*  << for an specific community
//
// @exclude
//
// @run-at       document-end
//
// ==/UserScript==

var titulos = [
    "Nueva Forma de Trabajar",
    "IBM Cloud",
    "Mi compania HM",
    "Semana de la Salud",
    "Egresados Universitarios",
    "Recursos Humanos IBM",
    "Yo sé quien sabe lo que usted no sabe",
    "Fábrica de Cajas"
];

var commids = [
    "7d04739c-be2e-476f-9423-fc559de80cd9",
    "7414b19c-98d2-4f2c-b145-b86b92471e68",
    "34749635-8269-4ac8-92a9-150e6de762bb",
    "b0a9f5ab-ae93-4881-a3b0-6bc570c3ccaf",
    "1e50397b-8f8b-41db-b69f-b838b8916fe9",
    "9aaf9f0f-06b6-4c1d-b93c-615c4ee646e8",
    "14deabef-1e21-4fdc-8950-230b2b461f10",
    "2656dd49-5f9a-449c-859d-bda5781c625e"
];

var commdescs = [
    "Una nueva forma de trabajar para todos",
    "Todos sobre la nube",
    "Comunicacion interna de historiales",
    "Todo sobre la semana de la salud",
    "Comunidad de egresados universitarios",
    "Comunidad oficial de RRHH",
    "Aprenda como buscar y sepa a quien preguntar",
    "El emocionante proceso de fabricación de cajas"
];

var checkExist = setInterval(function() {
    if (document.getElementById("lconn_communities_catalog_widgets_ResultsDisplayWidget_0")) {
        var xelement = document.getElementsByClassName("lotusClear")[0]; 
        var node = document.createElement("div");
        //node.innerHTML = html;

        var i, cont = 0;
        var html = `
        <h2 class="lotusHeading" id="lotusHeadingH2ID" style="padding: 5px 0px 22px;">
            <span class="lotusText">Comunidades destacadas</span>
        </h2>
        <table  class="lotusTable" role="presentation" cellspacing="0" cellpadding="0" border="0"> 
        <tbody>
        `;
        for (i = 0; i < titulos.length; i++) {
            if (cont == 0 ) {
                var html = html + `<tr class="placeRow lotusFirst" role="article" aria-labelledby="lconn_communities_catalog_widgets_PlaceDisplayWidget_1-title">`;
                var html = html + genHTML(titulos[i], commids[i], commdescs[i]);
                cont++;
            } else if (cont == 2 ) {
                var html = html + genHTML(titulos[i], commids[i], commdescs[i]);
                var html = html + `</tr>`;
                cont = 0;
            } else {
                var html = html + genHTML(titulos[i], commids[i], commdescs[i]);
                cont++;
            }
        }
        var html = html + `
        </tbody>
        </table>
        <h2 class="lotusHeading" id="lotusHeadingH2ID" style="padding: 5px 0px 5px;">
            <span class="lotusText">Comunidades</span>
        </h2>
        `;
        node.innerHTML = html;
        node.id = "pinnedComms";
        xelement.appendChild(node);
        clearInterval(checkExist);
    }
}, 100);

function genHTML(titulo, commid, descripcion) {
    var html = `
                <td class="lotusFirstCell" dojoattachpoint="communityIcon" width="35px">
                    <img style="border-radius: 50%;" src="/communities/service/html/image?communityUuid=`+commid+`" alt="" role="presentation" width="64" height="64">
                </td>
                <td class="lotusFirstCell"> 
                    <h4>
                        <span id="lconn_communities_catalog_widgets_PlaceDisplayWidget_1-title" dojoattachpoint="placeLinkNode">
                            <a dojoattachpoint="placeTitleLink" href="https://apps.na.collabserv.com/communities/service/html/communitystart?communityUuid=`+commid+`" target="_self" aria-describedby="lconn_communities_catalog_widgets_PlaceDisplayWidget_1sourceType" class="bidiAware" style="word-break: break-all; word-break: break-word;">`+titulo+`</a>
                        </span>
                    </h4>
                    <div class="lotusMeta">
                        <span role="list">
                            <span role="listitem" dojoattachpoint="personPlaceHolder">
                            `+descripcion+`
                            </span>
                        </span>
                    </div>
                    <div class="lotusLastCell" dojoattachpoint="detailsSection" style="">
                        <p dojoattachpoint="placeDescNode" class="bidiAware">Comunidad destacada</p>
                    </div>
                </td>
    `;
    return(html);
}
