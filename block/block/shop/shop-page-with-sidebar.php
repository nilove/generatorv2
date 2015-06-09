<div class="shop-page-content">

    <div class="container">
      <div class="row">
        <div class="col-md-9 col-md-push-3">
          <div class="top-selling-item uou-block-content">
		      <div class="block-title-conten">
		        <h4><?=$params["widgetdata"]["title"];?></h4>
		      </div>

		      <div class="">
		        <div class="row">
		          <?php 
		          foreach ($params["widgetdata"]["products"] as $d) 
		          {
		          ?>
		          <div class="col-md-4 col-sm-4">
		            <div class="uou-item-single">
		              <img src="<?=copyimage($d["image"]);?>" alt="">
		              <h6><a href="#"><?=$d["title"];?></a></h6>
		              <p class="price"><?=$d["price"];?></p>
		            </div> <!--  end item-single -->
		          </div>
		          <?php   
		          }
		          ?>
		          

		        </div> <!-- end row -->
		        <div class="uou-shop-pagination">
	                <ul class="pagination">
	                  <li><a href="#"><i class="fa fa-chevron-left"></i></a></li>
	                  <li class="active"><span>1</span></li>
	                  <li><a href="#">2</a></li>
	                  <li><a href="#">3</a></li>
	                  <li><a href="#">4</a></li>
	                  <li><a href="#">5</a></li>
	                  <li class="disabled"><span>...</span></li>
	                  <li><a href="#">10</a></li>
	                  <li><a href="#">20</a></li>
	                  <li><a href="#"><i class="fa fa-chevron-right"></i></a></li>
	                </ul>
	                
	            </div> <!--  end uou-shop-pagination -->

		      </div> <!-- end container -->
		      
		</div> <!-- end top-selling-item -->
          
        </div> <!-- end grid layout -->
        <div class="col-md-3 col-md-pull-9">

          <div class="uou-shop-sidebar uou-block-content">
            <div class="block-title-conten text-left">
              <h4>Categories</h4>
            </div>

            <ul class="list-unstyled uou-category">
              <li class="active"><a href="#">Accessories</a></li>
              <li><a href="#">Footwear</a></li>
              <li><a href="#">Outerweat</a></li>

              <li><a href="#">Shirting</a></li>
              <li><a href="#">Sweaters</a></li>
              <li><a href="#">Trousers</a></li>
              <li><a href="#">Bags</a></li>
            </ul>

            <div class="sidebar-title">
              <h4>Color Option</h4>
            </div>

            <ul class="list-unstyled uou-category">
              <li class="active"><a href="#">Black</a></li>
              <li><a href="#">White</a></li>
              <li><a href="#">Green</a></li>
            </ul>

            <div class="sidebar-title">
              <h4>Size Option</h4>
            </div>

            <ul class="list-unstyled uou-category">
              <li class="active"><a href="#">13 inch</a></li>
              <li><a href="#">32 inch</a></li>
            </ul>


            

            <div class="uou-block-13a secondary mt50">
              <h5>Top rated products</h5>

              <ul>
                <li>
                  <img src="http://placehold.it/50/95a2af/95a2af" alt="">
                  <h6><a href="">Ipsam sint incidunt</a></h6>
                  <ul class="stars">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star-half-o"></li>
                    <li class="fa fa-star-o"></li>
                  </ul>
                  <span class="date">December 19, 2014</span>
                </li>

                <li>
                  <img src="http://placehold.it/50/95a2af/95a2af" alt="">
                  <h6><a href="#">Saepe quaerat accusamus porro</a></h6>
                  <ul class="stars">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star-half-o"></li>
                    <li class="fa fa-star-o"></li>
                  </ul>
                  <span class="date">December 19, 2014</span>
                </li>

                <li>
                  <img src="http://placehold.it/50/95a2af/95a2af" alt="">
                  <h6><a href="">Sequi tempore excepturi nisi</a></h6>
                  <ul class="stars">
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star"></li>
                    <li class="fa fa-star-half-o"></li>
                    <li class="fa fa-star-o"></li>
                  </ul>
                  <span class="date">December 19, 2014</span>
                </li>
              </ul>

              <a href="" class="btn btn-primary">Write a Review</a>
            </div> <!-- end .uou-block-13a -->


            
          </div> <!-- end uou-shop-sidebar -->
          

          
        </div> <!-- end grid layout -->
      </div> <!--  en row -->
    </div> <!-- end main -container -->

    

    
  </div> <!--  end shop-page content -->


