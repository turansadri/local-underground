<?php

  $post = $event;
  setup_postdata($post);

  $event_title = get_the_title();
  $event_link = get_field('event_link');
  $event_date = get_field('event_date');
  $event_time = get_field('event_time');
  $event_venue_name = get_field('event_venue');
  $event_venue_url = get_field('event_venue_link');
  $event_img_src = wp_get_attachment_image_src(get_post_thumbnail_id($post), 'medium'); ?>

  <div class="event <?php if ( !empty($event_img_src) && !$past_event && $i == 0 ): ?>event--withmedia<?php endif; ?> row">
      <?php if ( !empty($event_img_src) && !$past_event && $i == 0 ): ?>
        <div class="event__media margin-bottom-xs col">
          <img src="<?php echo $event_img_src[0]; ?>" />
        </div>
      <?php endif; ?>

    <div class="event__content col">
      <div class="event__header">
        <h3 class="event__title">
          <a href="<?php echo $event_link; ?>" target="_blank">
            <?php echo $event_title; ?>
          </a>
        </h3>
      </div>
      <div class="event__description">
        <p>
          <?php if (!empty($event_date)): ?>
            <span class="event__date">
              <?php echo $event_date; ?>
            </span>
          <?php endif; ?>

          <?php if (!empty($event_time)): ?>
            -
            <span class="event__time">
              <?php echo $event_time; ?>
            </span>
          <?php endif; ?>

          <?php if (!empty($event_venue_name)): ?>
            -
            <?php if (!empty($event_venue_url)): ?>
              <a class="event__venue" href="<?php echo $event_venue_url; ?>">
            <?php endif; ?>
                <?php echo $event_venue_name; ?>
            <?php if (!empty($event_venue_url)): ?>
              </a>
            <?php endif; ?>
          <?php endif; ?>
        </p>
      </div>
      
      <?php if (!$past_event): ?>
        <?php the_content(); ?>
      <?php endif; ?>
    </div>
  </div>
