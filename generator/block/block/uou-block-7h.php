
    <div class="uou-block-7h">
      <div class="flexslider">
        <ul class="slides"><?php foreach ($params["widgetdata"]["slides"] as $key => $d) { ?>
          <li>
            <img src="<?=copyimage($d["image"]);?>" alt="">
            <div class="caption">
              <div class="css-table">
                <div class="css-table-cell">
                  <span class="time-ago"><?=$d["heading"];?></span>
                  <h3><a href="#"><?=$d["text"];?></a></h3>
                </div>
              </div>
            </div>
          </li>
          <?php }?>
        </ul>
      </div>
    </div> <!-- end .uou-block-7h -->