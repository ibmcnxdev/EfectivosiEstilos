////
// @author Tony McGuckin, IBM
// @name Profiles Customization
// @version 0.1
// @date February, 2017
//
var waitFor = function (callback, elXpath, maxInter, waitTime) {
    if (!maxInter) var maxInter = 100; // number of intervals before expiring
    if (!waitTime) var waitTime = 10; // 1000=1 second
    if (!elXpath) return;

    var waitInter = 0; // current interval
    var intId = setInterval(function () {
        if (++waitInter < maxInter && !dojo.query(elXpath).length) return;
        clearInterval(intId);
        callback();
    }, waitTime);
};

if (typeof (dojo) != "undefined") {
    dojo.place(
        //        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/samples/profiles/profilesCustomization.css\"></link>",
        "<link rel=\"stylesheet\" type=\"text/css\" href=\"/files/customizer/sinapsis/sinapsis.css\"></link>",
        dojo.doc.head,
        "last"
    );
}
