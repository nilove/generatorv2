<div class="container">
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

      <form class="search-form" action="">
        <input type="text" class="search-input" placeholder="Search ...">
        <input type="submit" value="">
      </form>
</div>