<div class="flexslider default-slider">
<ul class="slides">
	<?php foreach ($params["widgetdata"]["slides"] as $key => $d) { ?>
	<li>
	  <img src="<?=copyimage($d["image"]);?>" alt="">
  <div class="uou-slider-text">
    <h2><?=$d["heading"];?></h2>
    <p><?=$d["text"];?></p>

    <a class="btn btn-warning" href="#">Find Out More</a>
  </div>

</li>
	<?php 
	}
	?>
</ul>
</div>