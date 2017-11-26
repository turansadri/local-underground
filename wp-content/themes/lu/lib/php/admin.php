<?php

  function remove_default_post() { 
    remove_menu_page('edit.php');
  }
  add_action('admin_menu', 'remove_default_post');