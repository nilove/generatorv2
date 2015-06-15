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

      <a href="#" class="cart"><i class="fa fa-shopping-cart"></i> Shopping Cart (0)<?=$params["widgetdata"]["text1"];?></a>
</div>