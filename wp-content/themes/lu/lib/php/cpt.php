<?php
// Register Custom Post Type
function custom_post_type_mixes() {

	$labels = array(
		'name'                  => _x( 'Mixes', 'Post Type General Name', 'lu' ),
		'singular_name'         => _x( 'Mix', 'Post Type Singular Name', 'lu' ),
		'menu_name'             => __( 'Mixes', 'lu' ),
		'name_admin_bar'        => __( 'Mix', 'lu' ),
		'archives'              => __( 'Mix archives', 'lu' ),
		'attributes'            => __( 'Mix attributes', 'lu' ),
		'parent_item_colon'     => __( 'Parent mix:', 'lu' ),
		'all_items'             => __( 'All mixes', 'lu' ),
		'add_new_item'          => __( 'Add new mix', 'lu' ),
		'add_new'               => __( 'Add New', 'lu' ),
		'new_item'              => __( 'New mix', 'lu' ),
		'edit_item'             => __( 'Edit mix', 'lu' ),
		'update_item'           => __( 'Update mix', 'lu' ),
		'view_item'             => __( 'View mix', 'lu' ),
		'view_items'            => __( 'View mixes', 'lu' ),
		'search_items'          => __( 'Search mix', 'lu' ),
		'not_found'             => __( 'Not found', 'lu' ),
		'not_found_in_trash'    => __( 'Not found in Trash', 'lu' ),
		'featured_image'        => __( 'Featured Image', 'lu' ),
		'set_featured_image'    => __( 'Set featured image', 'lu' ),
		'remove_featured_image' => __( 'Remove featured image', 'lu' ),
		'use_featured_image'    => __( 'Use as featured image', 'lu' ),
		'insert_into_item'      => __( 'Insert into mix', 'lu' ),
		'uploaded_to_this_item' => __( 'Uploaded to this mix', 'lu' ),
		'items_list'            => __( 'Mixes list', 'lu' ),
		'items_list_navigation' => __( 'Mixes list navigation', 'lu' ),
		'filter_items_list'     => __( 'Filter mixes list', 'lu' ),
	);
	$args = array(
		'label'                 => __( 'Mix', 'lu' ),
		'description'           => __( 'Post Type Description', 'lu' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'            => array( 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'							=> 'dashicons-album',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => false,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'mix', $args );

}

// Register Custom Post Type
function custom_post_type_events() {

	$labels = array(
		'name'                  => _x( 'Events', 'Post Type General Name', 'lu' ),
		'singular_name'         => _x( 'Event', 'Post Type Singular Name', 'lu' ),
		'menu_name'             => __( 'Events', 'lu' ),
		'name_admin_bar'        => __( 'Event', 'lu' ),
		'archives'              => __( 'Event archives', 'lu' ),
		'attributes'            => __( 'Event attributes', 'lu' ),
		'parent_item_colon'     => __( 'Parent event:', 'lu' ),
		'all_items'             => __( 'All events', 'lu' ),
		'add_new_item'          => __( 'Add new event', 'lu' ),
		'add_new'               => __( 'Add new', 'lu' ),
		'new_item'              => __( 'New event', 'lu' ),
		'edit_item'             => __( 'Edit event', 'lu' ),
		'update_item'           => __( 'Update event', 'lu' ),
		'view_item'             => __( 'View event', 'lu' ),
		'view_items'            => __( 'View events', 'lu' ),
		'search_items'          => __( 'Search event', 'lu' ),
		'not_found'             => __( 'Not found', 'lu' ),
		'not_found_in_trash'    => __( 'Not found in trash', 'lu' ),
		'featured_image'        => __( 'Featured image', 'lu' ),
		'set_featured_image'    => __( 'Set featured image', 'lu' ),
		'remove_featured_image' => __( 'Remove featured image', 'lu' ),
		'use_featured_image'    => __( 'Use as featured image', 'lu' ),
		'insert_into_item'      => __( 'Insert into item', 'lu' ),
		'uploaded_to_this_item' => __( 'Uploaded to this event', 'lu' ),
		'items_list'            => __( 'Events list', 'lu' ),
		'items_list_navigation' => __( 'Events list navigation', 'lu' ),
		'filter_items_list'     => __( 'Filter events list', 'lu' ),
	);
	$args = array(
		'label'                 => __( 'Event', 'lu' ),
		'description'           => __( 'Post Type Description', 'lu' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'menu_icon'							=> 'dashicons-calendar-alt',
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
	);
	register_post_type( 'event', $args );

}
function events_redirect_post() {
  $queried_post_type = get_query_var('post_type');
  if ( is_single() && 'event' ==  $queried_post_type ) {
    wp_redirect( home_url(), 301 );
    exit;
  }
}
add_action( 'init', 'custom_post_type_mixes', 0 );
add_action( 'init', 'custom_post_type_events', 0 );
add_action( 'template_redirect', 'events_redirect_post' );
