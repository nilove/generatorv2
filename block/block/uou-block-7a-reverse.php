<div class="css-table">
  <div class="css-table-cell content">
    <img src="<?=$params["widgetdata"]["image"];?>" alt="">

    <h1><?=$params["widgetdata"]["company"];?></h1>

    <p><?=$params["widgetdata"]["text"];?></p>

    <a href="#" class="btn btn-primary"><?=$params["widgetdata"]["button"];?></a>
  </div>

  <div class="css-table-cell slider">
    <div class="flexslider default-slider">
      <ul class="slides">
        <?php foreach ($params["widgetdata"]["slides"] as $key => $d) {?> <li class="has-bg-image" data-bg-image="<?=copyimage($d["image"]);?>"><img class="hidden-image" src="<?=$d["image"];?>" alt=""></li> <?php }?>
      </ul>
    </div>
  </div>
</div>