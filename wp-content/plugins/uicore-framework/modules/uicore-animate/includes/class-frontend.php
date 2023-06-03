<?php
namespace UiCoreAnimate;


/**
 * Frontend Pages Handler
 */
class Frontend {

    private $style = '';

    /**
     * Constructor function to initialize hooks
     *
     * @return void
     */

    public function __construct() {

        //Handle animation style in UiCore Framework Global if is active
        if(!\class_exists('\UiCore\Helper')){
            $this->style = get_option( 'uianim_style', '' );
            if( $this->style ){
                add_action('elementor/frontend/after_enqueue_scripts',function() {
                    wp_deregister_style('e-animations' );
                    wp_dequeue_style( 'e-animations' );
                }, 20 );

                add_action( 'wp_enqueue_scripts', [ $this, 'animation_style' ], 60 );
            }
        }
        
    }

    /**
     * Enqueue animation style
     *
     */
    public function animation_style() {
        wp_dequeue_style( 'elementor-animations' );
        wp_enqueue_style( 'uianim-style', UICORE_ANIMATE_ASSETS . '/css/'.$this->style.'.css' );
    }
}
