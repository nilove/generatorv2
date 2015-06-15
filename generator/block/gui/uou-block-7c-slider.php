<article class="uou-block-7c">
          <div class="flexslider default-slider">
            <ul class="slides">
              <?php
              foreach ($params["widgetdata"]["slides"] as $key => $d) 
              {
                ?>
                <li><img src="<?=copyimage($d["image"]);?>" alt=""></li>
                <?php   
              }
              ?>
            </ul>
          </div>

          <span class="date"><?=$params["widgetdata"]["date"];?></span>

          <h1><?=$params["widgetdata"]["name"];?></h1>

          <p><?=$params["widgetdata"]["text"];?></p>
</article> <!-- end .uou-block-7c -->
