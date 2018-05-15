<?php

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
    <?php if (!$past_event): ?>
      <div class="event__media margin-bottom-xs">
        <img src="<?php echo $event_img_src[0]; ?>" />
      </div>
    <?php endif; ?>

    <div class="event__content">
      <div <?php if (!$past_event): ?>class="content-padding-xs"<?php endif; ?>>
        <div class="event__header">
          <h3 class="event__title">
            <a href="<?php echo $event_link; ?>" target="_blank">
              <?php echo $event_title; ?>
            </a>
          </h3>
        </div>
        <div class="event__description">
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
        
        <?php if (!$past_event): ?>
          <?php the_content(); ?>
        <?php endif; ?>
      </div>
    </div>
  </div>
