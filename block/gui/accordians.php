<ul class="uou-accordions">
  <?php 
  foreach ($params["widgetdata"]["tabs"] as $key => $d) 
  {
  	$active="";
    if($key == 0)
    {
        $active="active";   
    }
  	?>
  	<li class="<?=$active;?>">
      <a href="#"><?=$d["title"];?></a>
      <div>
        <?php 
          foreach ($d["nodes"] as $node)
          {
            GeneratePreview($node);
          }
          ?>
      </div>
  </li>
  	<?php 		
  }
  ?>	
</ul> <!-- end .uou-accordions -->