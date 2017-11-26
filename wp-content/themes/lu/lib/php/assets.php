<?php
  function cache_bust($file) {
    $mtime = filemtime($file);
    return intval($mtime);
  }

  // Load HTML5 Blank styles
  function lu_styles() {
    $css_version = cache_bust(get_template_directory() . '/lib/css/main.css');
    if ( WP_DEBUG ) {
      // Custom CSS
      wp_register_style( 'lu', get_template_directory_uri() . '/lib/css/main.css', array(), $css_version, 'all');

      // Register CSS
      wp_enqueue_style( 'lu' );
    } else {
      // Custom CSS
      wp_register_style( 'lucssmin', get_template_directory_uri() . '/lib/css/main.min.css', array(), $css_version, 'all');
      // Register CSS
      wp_enqueue_style( 'lucssmin' );
    }
  }
    // Load HTML5 Blank scripts (header.php)
  function lu_header_scripts() {
    if ( $GLOBALS['pagenow'] != 'wp-login.php' && ! is_admin() ) {
      if ( WP_DEBUG ) {
        // jQuery
        $js_version = cache_bust(get_template_directory() . '/lib/js/min/script.dev.js');
        wp_register_script('luscripts', (get_template_directory_uri() . '/lib/js/min/script.dev.js'), array(), $js_version, true);
        wp_deregister_script( 'jquery' );
        // wp_register_script( 'jquery', get_template_directory_uri() . '/bower_components/jquery/dist/jquery.js', array(), '1.11.1' );

        // Enqueue Scripts
        wp_enqueue_script( 'luscripts' );

      // If production
      } else {
          // Scripts minify
          $js_version = cache_bust(get_template_directory() . '/lib/js/min/script.min.js');
          wp_register_script('luscripts', (get_template_directory_uri() . '/lib/js/min/script.min.js'), array(), $js_version, true);
      }
    }
  }

  function disable_wp_emojicons() {
    // all actions related to emojis
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );

  }

  add_action( 'init', 'disable_wp_emojicons' );  
  add_action( 'wp_enqueue_scripts', 'lu_header_scripts' ); // Add Custom Scripts to wp_head
  add_action( 'wp_enqueue_scripts', 'lu_styles' ); // Add Theme Stylesheet
