<!-- Start Slider -->
  <div id="slider" class="flexslider">
    <div class="single-page-nav">
      <div class="uou-block-2b icons">
        <div class="container">
          <a href="#" class="logo"><?=$params["widgetdata"]["title"];?></a>
          <a href="#" class="mobile-sidebar-button mobile-sidebar-toggle"><span></span></a>

          <nav class="nav">
            <ul class="sf-menu">
              <?php 
	          foreach ($params["widgetdata"]["nav"] as $d) 
	          {
	             ?>
	             <li>
	              <a href="<?=$d["link"];?>">
	                <i class="fa <?=$d["icons"];?>"></i> <?=$d["title"];?></a>
	                <?php 
	                generateSubmenu($d["items"]);
	                ?>  
	              </li>
	             <?php
	          }
	          ?>
            </ul>
          </nav>
        </div>
      </div> <!-- end .uou-block-2b -->
      
    </div> <!-- end single-page-nav -->
    
    <ul class="slides custom-list">
      <?php 
      foreach ($params["widgetdata"]["slides"] as $d) 
      {
      ?>
      <li class="slide">
        <img src="<?=copyimage($d["image"]);?>" alt="" class="background">
        <div class="container">
          <div class="col-lg-5">
            <h1 class="title">
              <?=$d["text"]?>
            </h1>
            <a href="#" class="btn btn-magenta">Find Out More</a>
          </div>
        </div>
      </li>
      <?php 
      }
      ?> 
    </ul>
  </div>
  <!-- End Slider -->