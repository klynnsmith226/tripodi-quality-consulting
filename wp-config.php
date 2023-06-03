<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tripodi_consulting' );

/** Database username */
define( 'DB_USER', 'tripodi_admin' );

/** Database password */
define( 'DB_PASSWORD', 'RARG@Rc?N8aFo?3b' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'XR4eiA$<$Oh]QEfNhtukC#B?DHkP.DKXTJWWV]s!u_97mtkA/O-Z(3Up9NbbcqY=' );
define( 'SECURE_AUTH_KEY',  'Ki55,kyM#oBtsEzA?!^-Hb5kb``eYo.|4yW]jy665o{S800Po{3dt4P#0JYLb>;s' );
define( 'LOGGED_IN_KEY',    'S^R)|3/KrJYXB(OsSW1e:TgFuCPKQ= E(Uf4*Ds]h{-Po. ythA]h~Cl_ izT6$u' );
define( 'NONCE_KEY',        '@Rd=Xpq2.#Z#.H1<2Ro{942O/-m[mi-SZw@kUQp0buYH<VGSyxb,Rl+jrT[nn]58' );
define( 'AUTH_SALT',        's5K6kMV?.^8F!-GgVv AG#S^r3LCK?&zR~:0WhfN.|SjZH86itq:6U@P=]ysfsd]' );
define( 'SECURE_AUTH_SALT', 'o.i[pcz%L^2dJbWK(`zIs?+O6*~SxD|K(w2S]s6k0i?91$jp24-K-~?a8b&mvddt' );
define( 'LOGGED_IN_SALT',   'UNxzweBXg%LsZ+RDZ22m=hD qF~KnFY#DiGcZbpm7k[y,Ge._?=KE^?A5YBrXOKS' );
define( 'NONCE_SALT',       '7&:Pkt2Rs%nb=_tXZOZ%tVa^0ci5[3^-73eCt[xt*FPal+?VVA~~yA8O1DQRYNHl' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
