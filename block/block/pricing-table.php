<div class="pricing-table columns-4">
  <div class="columns-container">
    <?php 
    foreach ($params["widgetdata"]["columns"] as $d) 
    {
    	?>
    	 <div class="column">
	          <header>
	            <h6><?=$d["title"];?></h6>
	            <span class="price"><?=$d["price"];?><span><?=$d["month"];?></span></span>
	          </header>

	          <ul>
	          	<?php 
	          	foreach ($d["plans"] as $p) 
	          	{
	          		?>
	          		<li><span><?=$p["number"];?></span> <?=$p["detail"];?></li>
	          		<?php 
	          	}
	          	?>
	          </ul>

	          <footer>
	            <a href="#" class="btn btn-primary"><?=$d["button"];?></a>
	          </footer>
	     </div>
    	<?php 
    }
    ?>
  </div>
</div>