<div class="uou-block-1a">
    <div class="container">
      <div class="search">
        <a href="#" class="toggle fa fa-search"></a>
        <form action="">
          <input type="text" class="search-input" placeholder="Search ...">
          <input type="submit" value="">
        </form>
      </div>

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
        <a href="#" class="toggle"><img src="img/NL.png" alt="">
        	<?=$params["widgetdata"]["languagetitle"];?>
        </a>
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
</div>    