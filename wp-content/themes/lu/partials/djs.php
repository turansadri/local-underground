<section class="djs section-padding">
  <h2 class="section-heading"><?php the_field('djs_title') ?></h2>
<?php
  if( have_rows('djs') ):

    while ( have_rows('djs') ) : the_row();
    
      $dj_name = get_sub_field('name');
      $dj_description = get_sub_field('description');
      $dj_contact = get_sub_field('contact');
      $dj_soundcloud = get_sub_field('soundcloud');
      $dj_bandcamp = get_sub_field('bandcamp');
      $dj_twitter = get_sub_field('twitter'); ?>
      
      <div class="dj">
        <h3 class="dj__name">
          <?php echo $dj_name; ?>
          <ul class="dj__social">
            <?php if (!empty($dj_soundcloud)): ?>
              <li class="dj__social-soundcloud">
                <a href="<?php echo $dj_soundcloud['url']; ?>" target="_blank">
                 <?php include(get_template_directory() . '/snippets/soundcloud.php'); ?>
                </a>
              </li>
            <?php endif; ?>
            <?php if (!empty($dj_bandcamp)): ?>
              <li class="dj__social-bandcamp">
                <a href="<?php echo $dj_bandcamp['url']; ?>" target="_blank">
                 <?php include(get_template_directory() . '/snippets/bandcamp.php'); ?>
                </a>
              </li>
            <?php endif; ?>
            <?php if (!empty($dj_twitter)): ?>
              <li class="dj__social-twitter">
                <a href="<?php echo $dj_twitter['url']; ?>" target="_blank">
                 <?php include(get_template_directory() . '/snippets/twitter.php'); ?>
                </a>
              </li>
            <?php endif; ?>
          </ul>
        </h3>
        <p class="dj__contact"><?php echo $dj_contact; ?></p>
        <p class="dj__description">
          <?php echo $dj_description; ?>
        </p>
      </div>

  <?php

    endwhile;

  else :
    
    // no rows found
    
  endif;
  ?>
</section>
