<div class="container">
      <div class="preamble light squares col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
        <img src="<?=copyimage("img/foods-icon.png");?>" alt="">
        <h3 class="title"><?=$params["widgetdata"]["title"];?></h3>
      </div>
      <?php 
	  foreach ($params["widgetdata"]["nav"] as $d) 
	  {
	  ?>
	  <div class="dish col-lg-4 col-md-4 col-sm-6 col-xs-12">
	    <h5 class="title"><?=$d["title"];?></h5>
	    <div class="dish-image">
	      <img src="<?=copyimage($d["image"]);?>" alt="" class="img-responisve">
	    </div>
	    <a href="#" class="btn btn-large btn-red">Check the Menu</a>
	  </div>
	  <?php 
	  }
	  ?>
</div>