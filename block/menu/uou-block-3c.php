<div class="container">
      <h1><?=$params["widgetdata"]["text"];?></h1>

      <ul class="breadcrumbs">
        <?php foreach ($params["widgetdata"]["nav"] as $d)
        {?><li><a href="<?=$d["link"];?>"><?=$d["title"];?></a></li><?php echo "\n";}?>
        <li><span><?=$params["widgetdata"]["text1"];?></span></li>
      </ul>
</div>