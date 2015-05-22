<div class="uou-block-2b">
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
              <a href="<?=$d["link"];?>"><?=$d["title"];?></a>
              <?php 
                generateSubmenu($d["items"]);
              ?> 
            </li>
            <?php 
          }
          ?>
        </ul>
      </nav>
</div>
</div>