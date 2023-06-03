<?php
namespace UiCoreSupport;

// don't call the file directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * Support Init class
 *
 * @class Inject Support assets and markup
 */
final class Init {

    /**
     * Constructor for the Base_Plugin class
     *
     * Sets up all the appropriate hooks and actions
     * within our plugin.
     */
    public function __construct() {
        // Check if user is admin
        if( !current_user_can( 'manage_options' ) ) {
            return;
        }
        add_action('admin_head', [$this, 'add_assets']);
        add_action('admin_footer', [$this, 'add_markup']);
    }

    /**
     * Add assets
     *
     * @return void
     */
    public function add_assets() {
        $version = '1.0.0';
        
        wp_enqueue_script( 'uicore-support-vendor', plugins_url( '/assets/js/vendor.js', __FILE__ ), ['uicore-support-manifest'], $version , true );
        
        wp_enqueue_script( 'uicore-support', plugins_url( '/assets/js/admin.js', __FILE__ ), ['jquery'], $version , true );
        wp_enqueue_style( 'uicore-support', plugins_url( '/assets/css/admin.css', __FILE__ ), [], $version );
        //add inline script
        wp_add_inline_script( 'uicore-support', 'var uisupport = ' . json_encode( [
            'connect' => \UiCore\API::handle_connect('get'),
            'admin_url' => get_admin_url(),
 
        ]) . ';', 'before' );
    }

    /**
     * Add markup
     *
     * @return void
     */
    public function add_markup() {
        echo '<div id="uisupport-wrapp"><div id="ui-support-app"></div></div>';
    }


} // Base_Plugin

