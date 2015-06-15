<div class="container">
      <ul class="social">
        <?php 
        foreach ($params["widgetdata"]["social"] as $d) 
        {
        ?>
          <li>
            <a style="background-color:<?=$d["background"];?>" href="#" class="fa <?=$d["icons"];?>"></a>
          </li>
        <?php            
        }
        ?>
      </ul>

      <a class="contact" href="tel:(02)1234567890">(02) 123-456-7890</a>

      <ul class="authentication">
        <?php 
        foreach ($params["widgetdata"]["authentication"] as $d) 
        {
        ?>
          <li>
            <a href="#"><?=$d["title"];?></a>
          </li>
        <?php   
        }
        ?>
      </ul>

      <div class="language active">
        <a href="#" class="toggle"><img src="img/NL.png" alt=""> <?=$params["widgetdata"]["languagetitle"];?></a>

        <ul>
          <?php 
            foreach ($params["widgetdata"]["language"] as $d) 
            {
            ?>
            <li>
              <a href="#">
                <img src="<?=$d["image"];?>" alt=""><?=$d["title"];?>
              </a>
            </li> 
          <?php   
            }
            ?>
        </ul>
      </div>
</div>