<div class="container">
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

        <hr>

        <ul class="contact-info">
        <?php 
         foreach ($params["widgetdata"]["contact"] as $d) 
         {
         ?>
         <li>
            <i class="fa <?=$d["icons"];?>"></i>
            <?=$d["text"];?>
         </li>
         <?php 
     	   }
     	 ?>
        </ul>
</div>