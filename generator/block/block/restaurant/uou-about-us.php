
    
    <div class="container">
      <div class="preamble light squares col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
        <h3 class="title"><?=$params["widgetdata"]["title"];?></h3>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div id="badge">
          <img src="<?=copyimage("img/about-badge.png");?>" alt="">
        </div>
        <div id="dishes-slider" class="owl-carousel">
          <?php 
          foreach ($params["widgetdata"]["blocks"] as $d) 
          {
              ?>
              <div class="slide">
                <img src="<?=copyimage($d["image"]);?>" class="img-responsive" alt="">
              </div>
              <?php   
          }
          ?>  
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h5 class="lead"><?=$params["widgetdata"]["lead"];?></h5>
        <p><?=$params["widgetdata"]["p1"];?></p>
        <p><?=$params["widgetdata"]["p2"];?></p>
      </div>
    </div>