<div class="container">
  <nav class="nav">
    <ul class="sf-menu">
      <?php foreach ($params["widgetdata"]["nav"] as $d){?>
         <li><a href="<?=$d["link"];?>"> <?=$d["title"];?></a><?php generateSubmenu($d["items"]);?></li><?php }
      ?>
    </ul>
  </nav>
  <a href="#" class="cart"><i class="fa fa-shopping-cart"></i> <?=$params["widgetdata"]["cart"];?></a>
</div>
