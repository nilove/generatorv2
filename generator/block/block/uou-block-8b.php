<div class="uou-block-8b">
      <ul class="list-icon-large">
        <?php 
        foreach ($params["widgetdata"]["nav"] as $key => $d) 
        {
          ?>
          <li>
            <i class="fa <?=$d["icons"];?>"></i>
            <h6><?=$d["title"];?></h6>
            <p><?=$d["text"];?></p>
          </li>
          <?php   
        }
        ?>
      </ul>
</div> <!-- end .uou-block-8b -->