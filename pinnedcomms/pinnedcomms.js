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
    "Comunidad Efectivo Sí",
    "Capital Humano",
    "Canales",
    "Operaciones",
    "Procesos",
    "Proyectos",
    "Marketing",
    "Gestión Financiera",
    "Sistemas",
    "Auditoría Interna"
];

var commids = [
    "51ca593a-c2a5-4b19-a296-12ffed1752ff",
    "89cc0fab-9f38-4005-ab3b-fedb2d1b8587",
    "d2f0a5c2-dcee-4921-9f8f-df3020aaab47",
    "fc06034f-6f8d-4d79-96ca-265040cab564",
    "2c8b0960-8dd2-4b1c-97de-74bf2eedd773",
    "b9fee184-1349-4e9d-8d06-bee8a142503c",
    "b94cc4d5-54d2-4f90-9223-93a867039815",
    "433473e5-7f8d-4372-a774-46c264d5f47f",
    "eeab428a-056e-4834-9c6a-8a16f1ae4c6d",
    "cea449f4-1335-4431-815f-76c25c0206c7"
];

var commdescs = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];

var checkExist = setInterval(function() {
    if (document.getElementById("lconn_communities_catalog_widgets_ResultsDisplayWidget_0")) {
        var xelement = document.getElementsByClassName("lotusClear")[0]; 
        var node = document.createElement("div");
        //node.innerHTML = html;

        var i, cont = 0;
        var html = `
        <h2 class="lotusHeading" id="lotusHeadingH2ID" style="padding: 5px 0px 22px;">
            <span class="lotusText">Comunidades Destacadas</span>
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
                        <p dojoattachpoint="placeDescNode" class="bidiAware">Comunidad Oficial</p>
                    </div>
                </td>
    `;
    return(html);
}
