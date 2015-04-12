<div class="flexslider default-slider">
    <ul class="slides">
    <?php 
    foreach ($params["widgetdata"]["slides"] as $d) 
    {
    ?>
    <li><img src="<?=copyimage($d["image"]);?>" alt=""></li>
    <?php 

   	}
    ?>
    </ul>
</div>