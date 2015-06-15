<div class="uou-shop-category uou-block-content">
      <div class="block-title-conten">
        <h4><?=$params["widgetdata"]["title"];?></h4>
      </div>
      <div class="uou-gallery  pb20">
        <div class="container">
          <div class="row">
            <?php  
            foreach ($params["widgetdata"]["products"] as $d) 
            {
            ?>
            <div class="col-md-4 col-sm-6">
              <div class="image-single">
                <figure>
                  <div class="overlay-hover">
                    <a href="#" class="btn btn-primary"><?=$d["title"];?></a>
                  </div>
                  <img src="<?=copyimage($d["image"]);?>" alt="" class="img-responsive">
                </figure>
              </div> <!--  edn .iamge-single -->
            </div>
            <?php   
            }
            ?>
          </div> <!-- end row -->
        </div> <!--  end container -->
      </div> <!--  end uou-gallery -->
</div>