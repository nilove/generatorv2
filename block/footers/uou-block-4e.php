<div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6">
          <a href="#" class="logo">
            <?=$params["widgetdata"]["title"];?>
          </a>

          <p><?=$params["widgetdata"]["text1"];?></p>

          <p><?=$params["widgetdata"]["text2"];?></p>
        </div>

        <div class="col-md-3 col-sm-6">
          <h5><?=$params["widgetdata"]["text3"];?></h5>

          <ul class="blog-posts">
            <?php 
            foreach ($params["widgetdata"]["nav1"] as $d) 
            {
            ?>
              <li>
                <a href="#"><?=$d["title"];?></a>
                <span><?=$d["text"];?></span>
              </li>
            <?php   
            }
            ?>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6">
          <h5><?=$params["widgetdata"]["text4"];?></h5>

          <ul class="links">
            <?php 
            foreach ($params["widgetdata"]["nav2"] as $d) 
            {
            ?>
              <li>
                <a href="#"><?=$d["title"];?></a>
              </li>
            <?php   
            }
            ?>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6">
          <h5><?=$params["widgetdata"]["text5"];?></h5>

          <ul class="tags-list">
            <?php 
            foreach ($params["widgetdata"]["nav3"] as $d) 
            {
            ?>
              <li>
                <a href="#"><?=$d["title"];?></a>
              </li>
            <?php   
            }
            ?>
          </ul>
        </div>
      </div>
</div>