$(document).ready( function() {
  // Grundvariante fuer fast alle Anrisse
  var collection = $('.anriss_mit_bild_links');
  collection     = $('.anriss').add(collection);
  collection     = $('.teaser_mit_bild_und_text').add(collection);

  // Mac-and-i Blog-Index und Blog-Teaser
  collection     = $('.blogeintrag').add(collection);
  collection     = $('.blogteaser_eintrag').add(collection);

  // Developer
  collection     = $('.anriss_blog_eintrag').add(collection);
  collection     = $('.teaser_frei').add(collection);

  // Open
  collection     = $('#left_teaser').add(collection);
  collection     = $('#right_teaser').add(collection);

  // Security
  collection     = $('.position_1').add(collection);
  collection     = $('.position_2').add(collection);
  collection     = $('.topteaser_basic').add(collection);
  collection     = $('.topteaser_einzel').add(collection);
  collection     = $('.fiver_teaser_linker').add(collection);

  // Mobil
  collection     = $('.anriss_bild_left').add(collection);
  collection     = $('.anriss_bild_right').add(collection);

  // TR brauchte keine Ausnahmen

  // c't-TV wurde nicht behandelt

  // c't
  collection     = $('.position_3').add(collection);
  collection     = $('.teaser_artikel').add(collection);
  collection     = $('.teaser_linker').add(collection);
  collection     = $('.teaser_fiver_element').add(collection);

  // Autos
  collection     = $('.promo_teaser').add(collection);
  collection     = $('.top_promo').add(collection);
  collection     = $('.promo').add(collection);

  // Foto
  collection     = $('.anriss_rubrik').add(collection);

  // Jobs brauchte keine Ausnahmen

  // Resale brauchte keine Ausnahmen

  // ho
  collection     = $('.teaser_left').add(collection);
  collection     = $('.teaser_right').add(collection);

  collection.each( function() {
     // die explizit ausgezeichnete (class="the_content_url") URL suchen und verwenden
    var url = $(this).find('a.the_content_url').attr('href');

    // Fallback-Verhalten - die erste URL im Teaser nehmen
    if (!url) {
        url = $(this).find('a').attr('href');
    }

    // folgende Elemente (img,p,span,dd) werden zusaetzlich verlinkt
    $(this).find('img,p,span,dd').each ( function() {
      if ( $(this).parent().hasClass('fiver_teaser_linker') ) { 
          // Ausnahme fuer den Fiver-Teaser
          if ( $(this).hasClass('textzeile') ) { 
              if ($(this).is('p')) {
                  $(this).wrapInner('<a href="'+url+'" />');
              } else {
                  $(this).wrap('<a href="'+url+'" />');
              }
          }   
      } else if ( $(this).parent().hasClass('promo_teaser') ) { 
          // Ausnahme fuer die Auto Promo-Teaser
          url = $(this).parent().find('h4').find('a').attr('href');
          if ($(this).is('p')) {
              $(this).wrapInner('<a href="'+url+'" />');
          } else {
              $(this).wrap('<a href="'+url+'" />');
          }
      } else if ( $(this).parent().hasClass('blogteaser_eintrag') ) { 
        // Mac-and-i Blogteaser sollen keine verlinkte Autoren-Angaben haben
        if (
          !$(this).hasClass('autor_datum') &&
          !$(this).is('img')
        ) { 
          if ($(this).is('p')) {
              $(this).wrapInner('<a href="'+url+'" />');
          } else {
              $(this).wrap('<a href="'+url+'" />');
          }
        }   
      } else if ( $(this).parent().hasClass('teaser_right') || $(this).parent().hasClass('teaser_left') || $(this).parent().hasClass('teaser') ) { 

		// Damit die Teaser-Ueberschrift ('heise Resale', 'Technology Review',
		// 'ct') nicht verlinkt werden ignorieren wir das umschliessende <p>
		// und verlinken es somit nicht.

      } else {
        // DEFAULT: Treffen keine der o.g. Ausnahmen zu, dann wird alles mit 
        // dem href des Beitrags gewrapped.
        if ($(this).is('p') || $(this).is('dd')) {
            $(this).wrapInner('<a href="'+url+'" />');
        } else {
            $(this).wrap('<a href="'+url+'" />');
        }
      }   
    }); // img,p each 
  }); // collection.each
}); // document.ready

