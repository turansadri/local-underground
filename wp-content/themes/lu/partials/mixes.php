<section class="mixes section-padding">
  <h2 class="mixes__header section-heading"><?php the_field('mixes_title'); ?></h2>
    
  <?php
  if( have_rows('mixes') ):

    echo "<div class='mixes__grid'>";

    while ( have_rows('mixes') ) : the_row();
    
      $mix_title = get_sub_field('title');
      $mix_subtitle = get_sub_field('subtitle') ? get_sub_field('subtitle') : "&nbsp;";
      $mix_tracklist = get_sub_field('tracklist');
      $mix_djs = get_sub_field('djs');
      $mix_image_obj = get_sub_field('image');
      $mix_image = wp_get_attachment_image_src($mix_image_obj['ID'], 'small');
      $mix_image_download = wp_get_attachment_image_src($mix_image_obj['ID'], 'full');
      $mix_cover_url = !empty($mix_image) ? $mix_image[0] : "/wp-content/uploads/2017/11/lu_cover_placeholder.png";
      $mix_link = get_sub_field('link');
      
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

    endwhile;

    echo "</div>";
    
  else :
    
    // no rows found
    
  endif;
  ?>
</section>
