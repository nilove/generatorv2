<div class="uou-tabs">
          <ul class="tabs <?=$params["widgetdata"]["constructtionclass"];?>">
            <?php 
            foreach ($params["widgetdata"]["tabs"] as $key => $d) 
            {
                $active="";
                if($key == 0)
                {
                  $active="active";   
                }
                ?>
                <li class="<?=$active;?>">
                  <a href="#<?=$d["id"];?>"><?=$d["title"];?></a>
                </li>
                <?php 
            }
            ?>
          </ul>

          <div class="content">
            <?php 
            foreach ($params["widgetdata"]["tabs"] as $key => $d) 
            {
                $active="";
                if($key == 0)
                {
                  $active="active";   
                }
                ?>
                <div class="<?=$active;?>" id="<?=$d["id"];?>">
                  <?php 
                  foreach ($d["nodes"] as $node)
                  {
                      GeneratePreview($node);
                  }
                  ?>
                </div>
                <?php   
            }
            ?>
          </div>
</div> <!-- end .uou-tabs -->