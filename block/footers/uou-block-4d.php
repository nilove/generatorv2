<div class="container">
      <div class="row">
        <div class="col-md-3 hidden-sm hidden-xs">
          <a href="#" class="logo"><?=$params["widgetdata"]["title"];?></a>
        </div>

        <div class="col-md-6 col-sm-8">
          <div class="row">
            <div class="col-sm-4">
              <h5><?=$params["widgetdata"]["text1"];?></h5>

              <ul class="links">
                <?php 
                foreach ($params["widgetdata"]["nav1"] as $d) 
                {
                    ?>
                    <li><a href="#"><?=$d["title"];?></a></li>
                    <?php 
                }
                ?>
              </ul>
            </div>

            <div class="col-sm-4">
              <h5><?=$params["widgetdata"]["text2"];?></h5>

              <ul class="links">
                <?php 
                foreach ($params["widgetdata"]["nav2"] as $d) 
                {
                    ?>
                    <li><a href="#"><?=$d["title"];?></a></li>
                    <?php 
                }
                ?>
              </ul>
            </div>

            <div class="col-sm-4">
              <h5><?=$params["widgetdata"]["text3"];?></h5>

              <ul class="links">
                <?php 
                foreach ($params["widgetdata"]["nav3"] as $d) 
                {
                    ?>
                    <li><a href="#"><?=$d["title"];?></a></li>
                    <?php 
                }
                ?>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-3 col-sm-4">
          <h5><?=$params["widgetdata"]["text4"];?></h5>

          <p><?=$params["widgetdata"]["text5"];?></p>

          <form class="newsletter-form" action="">
            <input type="email" placeholder="Enter your email address">
            <input type="submit" class="btn btn-primary" value="Subscribe">
          </form>
        </div>
      </div>
</div>