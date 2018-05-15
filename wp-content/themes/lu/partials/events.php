<?php
  $today = date('Ymd');
  $past_event = false;
  $future_events = get_posts(
    array(
      'post_type' => 'event',
      'meta_query' => array(
        array(
          'key' => 'event_date',
          'value' => $today,
          'compare' => '>='
        ),
      ),
    )
  );
  if (count($future_events) > 0):
?>

<section class="events events--future ">
  <div class="section-padding clear">
    <h2 class="section-heading">Future</h2>
    <?php 
      foreach ($future_events as $event):
        include(get_template_directory() . '/partials/event.php');
      endforeach;

      wp_reset_postdata(); unset($past_event); ?>
  </div>
</section>

<?php endif; ?>

<?php
  $past_event = true;
  $past_events = get_posts(
    array(
      'post_type' => 'event',
      'meta_query' => array(
        array(
          'key' => 'event_date',
          'value' => $today,
          'compare' => '<'
        ),
      ),
    )
  );
  if (count($past_events) > 0):
?>
<section class="events events--past">
  <div class="section-padding clear">
    <h2 class="section-heading">Past</h2>

    <?php
      foreach ($past_events as $event):
        include(get_template_directory() . '/partials/event.php');
      endforeach;

      wp_reset_postdata(); unset($past_event); ?>
      
  </div>

</section>

<?php endif; ?>
