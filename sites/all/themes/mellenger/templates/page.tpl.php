<header><div><a class="logo" href="<?php print base_path(); ?>"></a><?php print render($page['header']); ?></div></header>

<!-- Messages and Help -->
  <?php print $messages; ?>
  <?php print render($page['help']); ?>

  <?php print render($title_prefix); ?>

  <?php print render($title_suffix); ?>
  <?php if ($tabs): ?><?php print render($tabs); ?><?php endif; ?>
  <?php print render($tabs2); ?>
  <?php print $messages; ?>
  <?php print render($page['help']); ?>
  <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>

  
<main><?php print render($page['content']); ?></main>

<!-- <nav><?php print render($page['content_bottom']); ?></nav> -->

<footer><div><?php print render($page['footer']); ?></div></footer>