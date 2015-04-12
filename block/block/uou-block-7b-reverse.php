<div class="css-table">
  <div class="css-table-cell content">
    <span class="time-ago"><?=$params["widgetdata"]["timetext"];?></span>

    <h1><?=$params["widgetdata"]["company"];?></h1>

    <p><?=$params["widgetdata"]["text"];?></p>

    <a href="#" class="btn btn-primary"><?=$params["widgetdata"]["button"];?></a>
  </div>

  <div class="css-table-cell image has-bg-image" data-bg-image="<?=copyimage($params["widgetdata"]["image"]);?>">
    <img class="hidden-image" src="<?=$params["widgetdata"]["image"];?>" alt="">
  </div>
</div>