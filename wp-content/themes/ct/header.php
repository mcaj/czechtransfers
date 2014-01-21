<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html <?php language_attributes(); ?>>
  <head>
    <title><?php wp_title( '|', true, 'right' ); bloginfo('name'); ?></title>
    <meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
    <meta name="Author" content="webi.no" />
    <meta name="description" content="<?php bloginfo('description'); ?>" />
    <meta http-equiv='pragma' content='no-cache' />
    <meta http-equiv='Cache-Control' content='no-cache' />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
    <link type="text/css" rel="stylesheet" href="<?php echo (get_bloginfo( 'template_url' )); ?>/main.css"/>
    <link type="text/css" rel="stylesheet" href="<?php echo (get_bloginfo( 'template_url' )); ?>/css/jquery-redmond/jquery-ui-1.8.12.custom.css"/>
    <script type="text/javascript" src="<?php echo (get_bloginfo( 'template_url' )); ?>/js/jquery-1.6.1.min.js"></script>
    <script type="text/javascript" src="<?php echo (get_bloginfo( 'template_url' )); ?>/js/jquery-ui-1.8.12.custom.min.js"></script>
    <script type="text/javascript" src="<?php echo (get_bloginfo( 'template_url' )); ?>/js/jquery-ui-timepicker.js"></script>
    <script type="text/javascript" src="<?php echo (get_bloginfo( 'template_url' ));?>/js/main.js"></script>
    <?php wp_head(); ?>
  </head>
  <body>
      <div id="header-stripe-first">
        <div class="wrapper">
            <div id="main-menu">
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/prices">Prices</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/contact">Contact us</a></li>
                  <li><a href="/feedback">Feedback</a></li>		  
              </ul>
            </div>
            <div id="call-us">call us +420 773 179 630</div>
        </div>
      </div>
      <div id="header-stripe-second">
          <div class="wrapper">
            <div id="logo"></div>
            <div id="about">Is Prague or Czech republic going to be your holiday or business destination ? <br/><strong>Czech Transfers</strong> can arrange your transfers the best suitable way for you. <br/>You will enjoy traveling with us in this beautiful country.</div>
          </div>
      </div>
      <div id="main">
