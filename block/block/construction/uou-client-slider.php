      <div class="block-title-conten">
        <h4><?=$params["widgetdata"]["title"];?></h4>
        <p><?=$params["widgetdata"]["text"];?></p>
      </div>


    <div class="container">
      <div id="owl-demo" class="uou-clients-slide-section">
        <?php
        foreach($params["widgetdata"]["blocks"] as $d)
        {
          ?>
          <div class="item"><img src="<?=copyimage($d["image"]);?>" alt="<?=$d["title"];?>"></div>
          <?php 
        }
        ?>
      </div>
      
    </div>