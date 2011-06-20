/* login_foto.js 
 * (c) Heise Zeitschriften Verlag GmbH & Co. KG
 * $Revision: 4442 $
 */
function externalLinks() {
	if (!document.getElementsByTagName) return;
	
	var anchors = document.getElementsByTagName("a");
	for (var i=0; i<anchors.length; i++) {
		var anchor = anchors[i];
		if (
			anchor.getAttribute("href")
			&& anchor.getAttribute("rel")
			&& anchor.getAttribute("rel").match(/\bexternal\b/)
		)
			anchor.target = "_blank";
	}
}

var old_onload_before_external = window.onload;
window.onload = function () {
    if (old_onload_before_external) { old_onload_before_external(); }
    externalLinks();
}
