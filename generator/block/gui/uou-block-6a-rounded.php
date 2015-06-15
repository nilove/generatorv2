<div class="uou-block-6a rounded">
          <img src="<?=copyimage($params["widgetdata"]["image"]);?>" alt="">
          <h6><?=$params["widgetdata"]["name"];?> <span><?=$params["widgetdata"]["company"];?></h6>
          <p><?=$params["widgetdata"]["text"];?></p>
          <ul class="social-icons">
          	<?php 
          	foreach ($params["widgetdata"]["social"] as $key => $d) 
          	{
          	?>
          		<li><a href="<?=$d["link"];?>">
          			<i class="fa <?=$d["icons"];?>"></i>
          			</a>
          		</li>
          	<?php	
          	}
          	?>
          </ul>
</div> <!-- end .uou-block-6a -->