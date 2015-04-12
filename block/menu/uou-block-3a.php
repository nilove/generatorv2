<div class="container">
  
      <ul class="breadcrumbs">
      	<?php 
      	foreach ($params["widgetdata"]["nav"] as $d) 
        {
        	?>
        	<li><a href="<?=$d["link"];?>"><?=$d["title"];?></a></li>
        	<?php 
        }
      	?>
        <li><span><?=$params["widgetdata"]["text"];?></span></li>
      </ul>
</div>