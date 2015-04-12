<div class="container">
      <a href="#" class="logo"><?=$params["widgetdata"]["title"];?></a>
      <div class="search">
        <form action="">
          <input type="text" class="search-input" placeholder="Search ...">
        </form>
      </div>

      <ul class="buttons">
        <?php 
        foreach ($params["widgetdata"]["nav"] as $d) 
        {
          ?>
          <li>
            <a href="<?=$d["link"];?>">
              <i class="fa <?=$d["icons"];?>"></i>
            </a>
          </li>
          <?php 
        }
        ?>
      </ul>
</div>