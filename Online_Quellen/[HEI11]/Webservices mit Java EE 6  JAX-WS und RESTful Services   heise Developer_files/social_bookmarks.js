/* $Revision: 16048 $ */
/*
 * Platzhalter:
 * __URL__      = Permalink zum Artikel
 * __TITLE__    = Titel des Artikels
 * __TEXT__     = Kurzbeschreibung zum Artikel
 * __KEYWORDS__ = Schlagworte zum Artikel
 * __RANDOM__   = Zufallszahl (fuer Webanalyse-Pixel)
 */
var social_bookmark_services = {
	"delicious": {
		"title":      "Bei delicious.com eintragen",
		"url_schema": "http://delicious.com/save?url=__URL__&amp;title=__TITLE__&amp;tags=__KEYWORDS__&amp;notes=__TEXT__",
		"icon":	      "http://www.heise.de/icons/ho/socialbookmarks/delicious.gif",
		"rholive":	  "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160810;b=1074160810;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=delicious.com;tpu=1;con=1;cs=1"
	},
	"digg": {
		"title":      "Bei Digg eintragen",
		"url_schema": "http://digg.com/submit?url=__URL__&amp;title=__TITLE__&amp;topic=technology&amp;bodytext=__TEXT__",
		"icon":	      "http://www.heise.de/icons/ho/socialbookmarks/digg.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160811;b=1074160811;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Digg;tpu=1;con=1;cs=1"
	},
	"facebook": {
		"title":      "Mit Facebook-Freunden teilen",
		"url_schema": "http://de.facebook.com/sharer.php?u=__URL__&amp;t=__TITLE__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/facebook.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160812;b=1074160812;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Facebook;tpu=1;con=1;cs=1"
	},
	"googlebookmarks": {
		"title":      "Bei Google Bookmarks eintragen",
		"url_schema": "http://www.google.com/bookmarks/mark?op=add&amp;bkmk=__URL__&amp;title=__TITLE__&amp;labels=__KEYWORDS__&amp;annotation=__TEXT__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/google_bookmarks.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160814;b=1074160814;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Google%20Bookmarks;tpu=1;con=1;cs=1"
	},
	"buzz": {
		"title":      "Bei Google buzzen",
		"url_schema": "http://www.google.com/reader/link?url=__URL__&amp;title=__TITLE__&amp;snippet=__TEXT__&amp;srcURL=http%3A%2F%2Fwww.heise.de&amp;srcTitle=heise%20online",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/googlebuzz.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160815;b=1074160815;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Google%20Buzz;tpu=1;con=1;cs=1"
	},
	"linkarena": {
		"title":      "Bei Linkarena eintragen",
		"url_schema": "http://linkarena.com/bookmarks/addlink/?url=__URL__&amp;title=__TITLE__&amp;tags=__KEYWORDS__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/linkarena.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160817;b=1074160817;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Link%20Arena;tpu=1;con=1;cs=1"
	},
	"mrwong": {
		"title":      "Bei Mr. Wong eintragen",
		"url_schema": "http://www.mister-wong.de/index.php?action=addurl&amp;bm_url=__URL__&amp;bm_description=__TITLE__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/mrwong.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160818;b=1074160818;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Mr.%20Wong;tpu=1;con=1;cs=1"
	},
	"newsvine": {
		"title":      "Bei Newsvine eintragen",
		"url_schema": "http://www.newsvine.com/_tools/seed?popoff=0&u=__URL__&h=__TITLE__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/newsvine.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160819;b=1074160819;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Newsvine;tpu=1;con=1;cs=1"
	},
	"oneview": {
		"title":      "Bei Oneview eintragen",
		"url_schema": "http://www.oneview.de/add/?URL=__URL__&amp;title=__TITLE__&amp;tags=__KEYWORDS__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/oneview.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160821;b=1074160821;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Oneview;tpu=1;con=1;cs=1"
	},
	"stumbleupon": {
		"title":      "Bei Stumbleupon eintragen",
		"url_schema": "http://www.stumbleupon.com/submit?url=__URL__&amp;title=__TITLE__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/stumbleupon.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160822;b=1074160822;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=StumbleUpon;tpu=1;con=1;cs=1"
	},
	"twitter": {
		"title":      "Twittern",
		"url_schema": "http://twitter.com/intent/tweet?text=__TITLE__%20__URL__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/twitter.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160823;b=1074160823;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Twitter;tpu=1;con=1;cs=1"
	},
	"windowslive": {
		"title":      "Bei Windows Live eintragen",
		"url_schema": "https://favorites.live.com/quickadd.aspx?marklet=1&amp;mkt=de-de&amp;url=__URL__&amp;title=__TITLE__&amp;top=1",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/windowslive.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160824;b=1074160824;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Windows%20Live;tpu=1;con=1;cs=1"
	},
	"yigg": {
		"title":      "Bei Yigg eintragen",
		"url_schema": "http://www.yigg.de/neu?exturl=__URL__&amp;exttitle=__TITLE__",
		"icon":       "http://www.heise.de/icons/ho/socialbookmarks/yigg.gif",
		"rholive":    "http://rl.heise.de/images/pic.gif?r=__URL__;tp=1073741824;m=Heise;tid=1074160809;random=__RANDOM__;json=1;tc=1073741824%7C1074160809;c=1074160825;b=1074160825;sep=%7C;tce=1;tn=Social%20Media;tpn=heise%20online%7CSocial%20Media;url=__URL__;tit=Yigg;tpu=1;con=1;cs=1"
	}
};

/*
 * Text nach dem letzten Leerzeichen innerhalb von 'length' Zeichen
 * Abschneiden und ... (&hellip;) anhängen.
 */
function abbreviateText(text, length) {
	var abbreviated = decodeURIComponent(text);
	if (abbreviated.length <= length) {
		return text;
	}

	var lastWhitespaceIndex = abbreviated.substring(0, length - 1).lastIndexOf(' ');
	abbreviated = encodeURIComponent(abbreviated.substring(0, lastWhitespaceIndex)) + "&hellip;";

	return abbreviated;
}

/*
 * Content des <meta>-Tags mit dem uebergebenen Namen oder ''
 * wenn das gewuenschte Tag nicht vorhanden ist.
 */
function getMeta(name) {
	var metaContent = jQuery('meta[name="' + name + '"]').attr('content');
	return metaContent ? metaContent : '';
}

/*
 * Existiert ein Rholive-Zaehlpixel?
 */
function isRhoLiveActive() {
	return jQuery('img').filter(function() {
		return ( new RegExp('http://rl.heise.de').test(this.src) );
	}).length;
}

/*
 * Liste der Bookmarklinks die ausgegeben werden sollen. Standardliste, kann
 * mit dem Meta-Tag 'social' ueberschrieben werden. Beispiel:
 *   <meta name="social" content="delicious,digg,buzz">
 */
var bookmarks = [ "delicious", "digg", "facebook", "googlebookmarks", "buzz", "linkarena", "mrwong", "newsvine", "oneview", "stumbleupon", "twitter", "windowslive", "yigg" ];

var social_meta = getMeta('social');
if (social_meta) {
	bookmarks = social_meta.split(',');
}

// in der Funktion gilt $ als jQuery-Shortcut
jQuery(document).ready( function($) {
	var link      = encodeURIComponent(window.location.href);
	var shortlink = encodeURIComponent(getMeta('DC.identifier'));
	var text      = encodeURIComponent(getMeta('DC.description'));
	var keywords  = encodeURIComponent(getMeta('keywords'));

	// Titel aus <meta name="DC.title"> wenn vorhanden, sonst <title>
	var title = getMeta('DC.title');
	if (title.length > 0) {
		title = encodeURIComponent(title + " - " + getMeta('DC.creator'));
	} else {
		// title mit encodeURI kodieren, da Sonderzeichen (':') sonst doppelt kodiert werden.
		title = encodeURIComponent($('title').text());
	}

	var sb_container = $('#social_bookmarks');
	if (!sb_container) {
		return;
	}

	// Bei Klick auf den SB-Link einen Request an RhoLive ausloesen
	$('.sb_img').live('click', function(event) {

		// Abbruch, wenn kein RhoLive-Pixel in der Seite existiert
		if (!isRhoLiveActive()) {
			return;
		}

		// gewaehlten Dienst suchen
		for (name in social_bookmark_services) {
			var service = social_bookmark_services[name];
			if (event.target.src == service.icon) {

				// RhoLive-URL bauen...
				var rl_url = service.rholive;
				rl_url = rl_url.replace(/__RANDOM__/g, Math.random() * 100000);
				rl_url = rl_url.replace(/__URL__/g, window.location.href);

				// ... und Pixel abrufen
				var rl_pixel = new Image();
				rl_pixel.src = rl_url;
			}
		}
	});

	// Socialbookmark-Links einfuegen
	jQuery.each(bookmarks, function(index, value) {
		var service = social_bookmark_services[value];
		if (!service) {
			return;
		}

		// Link um Parameter /from/service fuer Auswertung ergaenzen
		var from = encodeURIComponent('/from/' + value);
		var url  = service.url_schema.replace(/__URL__/g, link + from);

		// Sonderbehandlungen
		switch(value) {
			case "buzz":
				var shortfrom = encodeURIComponent('/fbz');
				url = service.url_schema.replace(/__URL__/g, shortlink + shortfrom);
				break;
			case "twitter":
				var shortfrom = encodeURIComponent('/ftw');
				url = service.url_schema.replace(/__URL__/g, shortlink + shortfrom);
				url = url.replace(/__TITLE__/g, abbreviateText(title, 110));
				break;
			case "mrwong":
				url = url.replace(/__TITLE__/g, abbreviateText(title, 100));
				break;
			case "digg":
				url = url.replace(/__TEXT__/g, abbreviateText(text, 60));
				break;
		}

		url = url.replace(/__KEYWORDS__/g, keywords);
		url = url.replace(/__TEXT__/g, text);
		url = url.replace(/__TITLE__/g, title);

		sb_container.append('<a href="' + url + '" title="' + service.title + '" target="_blank">' +
			'<img class="sb_img" src="' + service.icon + '" width="18" height="18" alt="' + service.title + '"></a>');
	});
});

