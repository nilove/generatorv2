<div class="uou-block-3d">
    <div class="container">
      <ul class="breadcrumbs-secondary">
        <?php 
      	foreach ($params["widgetdata"]["nav"] as $nav) {
      	?>
      		<li><a href="<?=$nav["link"]?>"><span class="arrow"></span><?=$nav["title"]?></a></li>
      	<?php 
      	}?>
        <li><span><span class="arrow"></span>Web Design</span></li>
      </ul>

      <h1 class="heading"><?=$params["widgetdata"]["title"];?></h1>
    </div>
  </div> <!-- end .uou-block-3d -->