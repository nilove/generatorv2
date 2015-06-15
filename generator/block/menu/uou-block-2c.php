<div class="container">
      <a href="#" class="logo">
        <?=$params["widgetdata"]["title"];?>
      </a>
      <a href="#" class="mobile-sidebar-button mobile-sidebar-toggle"><span></span></a>
      
      <nav class="nav">
        <ul class="sf-menu">
          <?php 
          foreach ($params["widgetdata"]["nav"] as $d) 
          {
            ?>
            <li>
              <a href="#"><?=$d["title"];?> 
                <span><?=$d["text"];?></span>
              </a>
              <?php 
              generateSubmenu($d["items"]);  
              ?>
            </li>
            <?php     
          }
          ?>
          <li><a href="#">Contact <span>We Are Here to Help</span></a></li>
        </ul>
      </nav>
</div>