<div class="container">
  <nav class="nav">
    <ul class="sf-menu">
      <?php foreach ($params["widgetdata"]["nav"] as $d){?>
         <li><a href="<?=$d["link"];?>"> <?=$d["title"];?></a><?php generateSubmenu($d["items"]);?></li><?php }
      ?>
    </ul>
  </nav>
  <div class="contact">
        <span>Call Us:</span>
        <a href="tel:<?=$params["widgetdata"]["phone"];?>"><?=$params["widgetdata"]["phone"];?></a>
  </div>
</div>
