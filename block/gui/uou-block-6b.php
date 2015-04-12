<div class="uou-block-6b <?=$params["widgetdata"]["class"];?>">
          <img src="<?=copyimage($params["widgetdata"]["image"]);?>" alt="">
          <ul class="social-icons">
            <?php 
            foreach ($params["widgetdata"]["social"] as $key => $d) 
            {
            ?>
              <li><a href="<?=$d["link"];?>">
                <i class="fa <?=$d["icons"];?>"></i>
                </a>
              </li>
            <?php 
            }
            ?>
          </ul>

          <div class="content">
            <h6><?=$params["widgetdata"]["name"];?> <span><?=$params["widgetdata"]["company"];?></span></h6>
            <p><?=$params["widgetdata"]["text"];?></p>
          </div>
</div> <!-- end .uou-block-6b -->