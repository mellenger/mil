<header role="banner">
    <div class="header-region">
      <?php print render($page['header']); ?>
    </div>
    <?php if($page['highlighted'] OR $messages){ ?>
      <div class="drupal-messages">
      <?php print render($page['highlighted']); ?>
      <?php print $messages; ?>
      </div>
    <?php } ?>
</header>
<div class="page">
  <div role="main" class="main-content">
    <?php if ($title): ?>
      <h1><?php print $title; ?></h1>
    <?php endif; ?>

    <?php if ($action_links): ?>
      <ul class="action-links"><?php print render($action_links); ?></ul>
    <?php endif; ?>

    <?php if (isset($tabs['#primary'][0]) || isset($tabs['#secondary'][0])): ?>
      <nav class="tabs"><?php print render($tabs); ?></nav>
    <?php endif; ?>

    <?php print render($page['content_pre']); ?>
    <?php print render($page['content']); ?>
    <?php print render($page['content_post']); ?>

  </div><!-- /main -->
</div><!-- /page -->
<footer>
  <?php print render($page['footer']); ?>
</footer>