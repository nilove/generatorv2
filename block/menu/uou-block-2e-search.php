      <div class="container">
      
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

      <form class="search-form" action="">
        <input type="text" class="search-input" placeholder="Search ...">
        <input type="submit" value="">
      </form>
    </div>