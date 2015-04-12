<div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#" class="logo"><?=$params["widgetdata"]["title"];?></a>

          <ul class="contact-info has-bg-image contain" data-bg-image="img/footer-map-bg.png">
            <?php 
             foreach ($params["widgetdata"]["contact"] as $d) 
             {
             ?>
             <li>
                <i class="fa <?=$d["icons"];?>"></i>
                <?=$d["text"];?>
             </li>
             <?php 
            }
           ?>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6">
          <h5><?=$params["widgetdata"]["twitter"];?></h5>

          <ul class="twitter-feed">
            <?php 
            foreach ($params["widgetdata"]["twitterfeed"] as $d) 
            {
                ?>
                <li>
                  <?=$d["title"];?>
                  <a href="#" class="time"><?=$d["text"];?></a>
                </li>
                <?php 
            }
           ?>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6">
          <h5><?=$params["widgetdata"]["photostream"];?></h5>

          <ul class="photos-list">
            <?php 
             foreach ($params["widgetdata"]["nav"] as $d) 
             {
             ?>
                <li><img src="<?=copyimage($d["image"]);?>" alt=""></li>
             <?php 
             }
             ?>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6">
          <h5><?=$params["widgetdata"]["newsletter"];?></h5>

          <p><?=$params["widgetdata"]["newslettertext"];?></p>

          <form class="newsletter-form" action="">
            <input type="email" placeholder="Enter your email address">
            <input type="submit" class="btn btn-primary" value="Subscribe">
          </form>
        </div>
      </div>
</div>