<section class="mixes section-padding">
  <h2 class="mixes__header section-heading"><?php the_field('mixes_title'); ?></h2>
  

  <?php
    $args = array(
      'posts_per_page' => -1,
      'post_type' => 'mix',
    );
    $mixes = get_posts( $args );
    if ( count($mixes) > 0 ):

      echo "<div class='mixes__grid'>";

      foreach ( $mixes as $mix ):
        $post = $mix;
        setup_postdata( $post );

        $mix_title = get_the_title();
        $mix_subtitle = get_field('mix_subtitle') ? get_field('mix_subtitle') : "&nbsp;";
        $mix_tracklist = get_field('mix_link-to-tracklist');
        $mix_djs = get_field('mix_djs');
        $mix_image_id = get_post_thumbnail_id();
        $mix_image = wp_get_attachment_image_src($mix_image_id, 'small');
        $mix_image_download = wp_get_attachment_image_src($mix_image_id, 'full');
        $mix_cover_url = !empty($mix_image) ? $mix_image[0] : "/wp-content/uploads/2017/11/lu_cover_placeholder.png";
        $mix_link = get_field('mix_link-to-audio');

        if (!empty($mix_link)): ?>

          <div class="mix">
            <div class="mix__image">
              <a href="<?php echo $mix_link['url']; ?>" target="_blank">
                <?php if (!empty($mix_cover_url)): ?>
                  <img src="<?php echo $mix_cover_url; ?>" />
                <?php endif; ?>
              </a>
            </div>
            <div class="mix__subtitle"><?php echo $mix_subtitle; ?></div>
            <h3 class="mix__title">
              <a href="<?php echo $mix_link['url'] ?>" target="_blank"><?php echo $mix_title; ?></a>
            </h3>
            <h5 class="mix__djs bodytext"><?php echo $mix_djs; ?></h5>
            <p class="mix__tracklist">
              <?php if (!empty($mix_tracklist['url'])): ?>
                <a href="<?php echo $mix_tracklist['url']; ?>" target="_blank">tracklist</a> /
              <?php endif; ?>
              <?php if (!empty($mix_image)): ?>
                <a href="<?php echo $mix_image_download[0]; ?>" target="_blank">cover</a>
              <?php endif; ?>
            </p>
          </div>


      <?php
        endif;
        endforeach;
        echo '</div>';
        endif;
      ?>

</section>
