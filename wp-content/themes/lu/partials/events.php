<section class="events section-padding clear">
  <h2 class="section-heading">Future</h2>

  <?php 
    $events = get_posts(
      array(
        'post_type' => 'event',
      )
    );

    foreach ($events as $event):
      $post = $event;
      setup_postdata($post);

      $event_title = get_the_title();
      $event_link = get_field('event_link');
      $event_date = get_field('event_date');
      $event_time = get_field('event_time');
      $event_venue = get_field('event_venue');
      $event_venue_name = $event_venue['title'];
      $event_venue_url = $event_venue['url'];
      $event_img_src = wp_get_attachment_image_src(get_post_thumbnail_id($post), 'medium'); ?>

      <div class="event">
        <div class="event__media margin-bottom-xs">
          <img src="<?php echo $event_img_src[0]; ?>" />
        </div>

        <div class="event__content">
          <div class="content-padding-xs">
            <div class="event__header">
              <h3 class="event__title">
                <a href="<?php echo $event_link; ?>" target="_blank">
                  <?php echo $event_title; ?>
                </a>
              </h3>
              <p>
                <span class="event__date">
                  <?php echo $event_date; ?>
                </span>
                -
                <span class="event__time">
                  <?php echo $event_time; ?>,
                </span>
                <a class="event__venue" href="<?php echo $event_venue_url; ?>">
                  <?php echo $event_venue_name; ?>
                </a>
              </p>
            </div>
            
            <?php the_content(); ?>
          </div>
        </div>
      </div>

  <?php
    endforeach;
    wp_reset_postdata();
  ?>

</section>