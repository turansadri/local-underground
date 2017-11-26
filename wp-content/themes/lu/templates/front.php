<?php /* Template Name: Index */ get_header(); ?>

  <main role="main" aria-label="Content">
    <!-- section -->
    <section class="info section-padding">

      <h1><span class="light">Local</span> Underground</h1>

      <?php if (have_posts()): while (have_posts()) : the_post(); ?>

        <?php the_content(); ?>

      <?php endwhile; endif; ?>

    </section>
    <!-- /section -->

    <?php include(get_template_directory() . '/partials/events.php'); ?>

    <?php include(get_template_directory() . '/partials/djs.php'); ?>

    <?php include(get_template_directory() . '/partials/mixes.php'); ?>

  </main>

<?php get_footer(); ?>
