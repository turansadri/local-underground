<?php
  // function for inserting Google Analytics into the wp_head
  function ga() {
    if ( !is_user_logged_in() ) { // not for logged in users
  ?>
    <!-- analytics -->
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110153712-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-110153712-1');
    </script>
  <?php
    }
  }
  add_action('wp_head', 'ga');
  