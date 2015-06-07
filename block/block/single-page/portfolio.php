<!-- Start Portfolio -->
  <div id="portfolio">
    <div class="container">
      <div class="preamble col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
        <h3 class="title"><?=$params["widgetdata"]["title"];?></h3>
        <p><?=$params["widgetdata"]["text"];?></p>
      </div>
      <div class="clearfix"></div>
      <ul class="filters col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <li><a href="#" class="btn active" data-filter="">All</a></li>
          <?php 
          foreach ($params["widgetdata"]["tabs"] as $d) 
          {
          ?>
            <li><a href="#" class="btn" data-filter=".<?=$d["class"];?>"><?=$d["title"];?></a></li>
          <?php     
          }
          ?>
      </ul>
      <div class="portfolio-filters-content">
        <?php 
          foreach ($params["widgetdata"]["images"] as $d) 
          {
          ?>
          <article class="<?=$d["class"];?>">
            <a href="<?=copyimage($d["image"]);?>" class="swipebox" title="My Caption">
              <img src="<?=copyimage($d["image"]);?>" alt="" class="work img-responsive">
            </a>
          </article>
          <?php   
          }
          ?>
      </div>
    </div>
  </div>
  <!-- End Portfolio -->