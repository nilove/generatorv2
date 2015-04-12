    <div class="uou-block-8a">
      <div class="css-table">
        <div class="css-table-cell image">
          <img src="<?=copyimage($params["widgetdata"]["image"]);?>" alt="">
        </div>

        <div class="css-table-cell content">
          <ul class="list-icon-large">
            <?php 
            foreach ($params["widgetdata"]["nav"] as $key => $d) 
            {
                ?>
                <li>
                  <i class="fa <?=$d["icons"];?>"></i>
                  <h6><?=$d["title"];?></h6>
                  <p><?=$d["text"];?>"></p>
                </li>
                <?php   
            }
            ?>
          </ul>
        </div>
      </div>
    </div> <!-- end .uou-block-8a -->
