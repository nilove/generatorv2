<div class="uou-gallery pt80 pb80">
    <div class="container">
      <div class="row">
        <?php 
        foreach ($params["widgetdata"]["nav"] as $d) 
        {
        ?>
         <div class="col-md-4 col-sm-6">
          <div class="image-single">
            <figure>
              <div class="uou-overlay"></div>
              <div class="overlay-hover">
                <h4><?=$d["title"];?></h4>
                <a href="#" class="btn btn-error">Read more</a>
              </div>
              <img src="<?=copyimage($d["image"]);?>" alt="" class="img-responsive">
            </figure>
      
            
          </div> <!--  edn .iamge-single -->
          
        </div>
        <?php 
        }
        ?>
      </div>
    </div>


    <div class="load-more-button pt20 pb20 text-center clearfix">
      <a href="#" class="btn btn-error">Load More</a>
    </div>
  </div> <!--  end uou-gallery -->
