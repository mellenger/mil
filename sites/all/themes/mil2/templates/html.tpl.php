<!doctype html>
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?> > <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="<?php print $language->language; ?>" <?php print $rdf_namespaces; ?> > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="<?php print $language->language; ?>" <?php //print $rdf_namespaces; ?>> <!--<![endif]-->
<head>
	<title><?php print $head_title; ?></title>
	<?php print $head; ?>
	<!--[if lt IE 9]>
	  <script>
	    document.createElement('header');
	    document.createElement('nav');
	    document.createElement('section');
	    document.createElement('article');
	    document.createElement('aside');
	    document.createElement('footer');
	    document.createElement('hgroup');
	    document.createElement('main');
	  </script>
	<![endif]-->
	<meta name="MobileOptimized" content="width">
	<meta name="HandheldFriendly" content="true">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="cleartype" content="on">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<?php 
	print $styles;
	print $scripts;
	?>
</head>
	<body class="<?php print $classes; ?>" <?php print $attributes;?>>
		<?php print $page_top;?>
		<?php print $page; ?>
		<?php print $page_bottom;?>
	</body>
</html>