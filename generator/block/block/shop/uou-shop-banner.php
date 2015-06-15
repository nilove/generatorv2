<div class="container">
  <div class="row">
    <?php 
    foreach ($params["widgetdata"]["products"] as $d) 
    {
    	?>
    	<div class="col-sm-4">
          <img src="<?=copyimage($d["image"]);?>" alt="">
          <h6><?=$d["title"];?></h6>
          <p><?=$d["price"];?></p>
        </div>
    	<?php 
    }
    ?>
  </div>
</div> <!-- end container -->
