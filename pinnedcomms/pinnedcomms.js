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
// @include      *://apps.collabservintegration.com/*  << Global
//
// @exclude
//
// @run-at       document-end
//
// ==/UserScript==

var titulos = [
    "Nueva Forma de Trabajar",
    "IBM Cloud"
];

var commids = [
    "7d04739c-be2e-476f-9423-fc559de80cd9",
    "7414b19c-98d2-4f2c-b145-b86b92471e68"
];

var commdescs = [
    "Esto es una comunidad destacada",
    "Esto es otra comunidad destacada"
];

var checkExist = setInterval(function() {
    if (document.getElementById("lconn_communities_catalog_widgets_ResultsDisplayWidget_0")) {
        var xelement = document.getElementsByClassName("lotusClear")[0]; 
        var node = document.createElement("div");
        //node.innerHTML = html;

        var i;
        var html = `
        <h2 class="lotusHeading" id="lotusHeadingH2ID" style="padding: 5px 0px 22px;">
            <span class="lotusText">Comunidades destacadas</span>
        </h2>
        `;
        for (i = 0; i < titulos.length; i++) { 
            var html = html + genHTML(titulos[i], commids[i], commdescs[i]);
        }
        var html = html + `
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
    <table  class="lotusTable" role="presentation" cellspacing="0" cellpadding="0" border="0"> 
        <tbody>
            <tr class="placeRow lotusFirst" role="article" aria-labelledby="lconn_communities_catalog_widgets_PlaceDisplayWidget_1-title">
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
            </tr>
        </tbody>
    </table>
    `;
    return(html);
}