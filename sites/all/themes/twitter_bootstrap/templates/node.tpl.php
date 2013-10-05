<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<!--   <section>
    <h2><?php print $title; ?></h2>
  </section> -->
  <?php hide($content['comments']); hide($content['links']); hide($content['field_tags']); ?>
    <?php print render($content); ?>
</article>