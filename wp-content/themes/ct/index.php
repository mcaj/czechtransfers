<?php get_header(); ?>
        <div id="content" class="wrapper">
		<h1><?php the_title(); ?></h1>
		<?php 
			if (have_posts()) : while (have_posts()) : the_post();
			the_content();
			endwhile;
			endif;
		?>                                
        	<div class="clear" />
                <?php 
                /* if (in_array ($post->ID, array(60))) {
                    comments_template( '', true );
                }*/
                ?>
        </div>
<?php get_footer(); ?>
