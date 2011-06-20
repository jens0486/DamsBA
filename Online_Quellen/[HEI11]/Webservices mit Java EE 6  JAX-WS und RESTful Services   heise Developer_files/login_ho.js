/* login_ho.js 
 * (c) Heise Zeitschriften Verlag GmbH & Co. KG
 * $Revision: 15945 $
 */

function __heise_loginout () {
    var resale_flag = ( location.href.match( /resale|\/bin\/newsletter\/[^\/]+\/heise-resale/ ) != null );
    var foto_flag   = ( location.pathname.match( /^\/foto(\/|$)/ ) != null );
    var skin        = resale_flag ? '&amp;skin=resale' 
        : foto_flag   ? '&amp;skin=foto'
        : '';
    var regmode     = foto_flag   ? '&amp;regmode=foto' : '';

    var sslprefix = '';
    if (location.hostname == "www.heise.de") {
	sslprefix = 'https://' + location.hostname;
    }

    var sso_base = sslprefix + '/userdb/sso?dirid=1';
    var reg_base = sslprefix + '/userdb/register?dirid=1';

    var sso_logout_base = sso_base;
    var reg_profile_base = reg_base;

    if ( !resale_flag && !foto_flag && !regmode.length && !skin.length ) {
	sso_base = sslprefix + '/login/?dirid=1';
	reg_base = sslprefix + '/register?dirid=1';
    }

    var fw		 = '&amp;forward=' + escape(location.href);
    var sso_in	 = sso_base + '&amp;rm=show_login' + skin + fw;
    var sso_out	 = sso_logout_base + '&amp;rm=do_logout'  + fw;
    var sso_reg	 = resale_flag
        ? ( '/resale/registrieren/' )
        : ( reg_base + '&amp;rm=show_registration' + skin + regmode);
    var sso_data = resale_flag
        ? '/resale/profil/'
        : ( reg_profile_base + '&amp;rm=show_userdata' + skin + fw );

    if( location.pathname.match( /^\/login/ ) ) {
	return '';
    }

    var html_not_logged_in = '<b>Sie sind Gast</b><br><a href="'+sso_in+'">Einloggen</a> | <a href="'+sso_reg+'">Registrieren</a>';
    var html_logged_in     = '<b>Sie sind eingeloggt</b><br><a href="'+sso_out+'">Ausloggen</a> | <a href="'+sso_data+'">Mein Account</a>';

    if( typeof(logged_in_1) != "undefined" ) {
        html_logged_in = logged_in_1 + sso_out + logged_in_2 + sso_data + logged_in_3;
    }

    if( typeof(not_logged_in_1) != "undefined" ) {
        html_not_logged_in = not_logged_in_1 + sso_in + not_logged_in_2 + sso_reg + not_logged_in_3;
    }

    return((document.cookie.indexOf("ssoheisede=") == -1)
           ? html_not_logged_in
	   : html_logged_in)
}

document.write(__heise_loginout());
