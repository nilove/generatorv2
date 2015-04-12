<div class="container">
      <?=$params["widgetdata"]["text"];?>

      <ul class="social-icons">
        <?php 
        foreach ($params["widgetdata"]["social"] as $d) 
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