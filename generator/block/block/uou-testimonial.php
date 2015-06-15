
    <div class="container">
      <div class="preamble dark squares col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0">
        <h3 class="title"><?=$params["widgetdata"]["title"]?></h3>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
      <div class="quotation_mark">
        <i class="fa fa-quote-left"></i>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <div id="testimonials-slider" class="owl-carousel uou-testimonial-slider">
          <?php 
          foreach ($params["widgetdata"]["blocks"] as $d) 
          {
          ?>
          <div class="slide">
            <blockquote>
              <p><?=$d["text"];?></p>
              <p class="who"><?=$d["author"];?></p>
              <p class="where"><small><?=$d["add"];?></small></p>
            </blockquote>
          </div>
          <?php   
          }
          ?>
        </div>
      </div>
    </div>