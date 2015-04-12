<div class="container">
      <p><?=$params["widgetdata"]["text"];?></p>

      <ul class="links">
      	<?php 
		foreach ($params["widgetdata"]["nav"] as $d) 
		{
			?>
			<li><a href="<?=$d["link"];?>"><?=$d["title"];?></a></li>
			<?php 
	  	}      	
      	?>
      </ul>
</div>