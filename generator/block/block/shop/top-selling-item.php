<div class="top-selling-item uou-block-content">
      <div class="block-title-conten">
        <h4><?=$params["widgetdata"]["title"];?></h4>
      </div>

      <div class="container">
        <div class="row">
          <?php 
          foreach ($params["widgetdata"]["products"] as $d) 
          {
          ?>
          <div class="col-md-3 col-sm-4">
            <div class="uou-item-single">
              <img src="<?=copyimage($d["image"]);?>" alt="">
              <h6><a href="#"><?=$d["title"];?></a></h6>
              <p class="price"><?=$d["price"];?></p>
            </div> <!--  end item-single -->
          </div>
          <?php   
          }
          ?>
          <div class="text-center">
            <a class="btn btn-primary" href="#">Load More</a>
          </div>

        </div> <!-- end row -->
      </div> <!-- end container -->
      
</div> <!-- end top-selling-item -->