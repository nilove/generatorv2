<div class="css-table">
  <div class="css-table-cell image has-bg-image" data-bg-image="<?=$params["widgetdata"]["image"];?>">
    <img class="hidden-image" src="<?=copyimage($params["widgetdata"]["image"]);?>" alt="">
  </div>

  <div class="css-table-cell content">
    <span class="time-ago"><?=$params["widgetdata"]["timetext"];?></span>

    <h1><?=$params["widgetdata"]["company"];?></h1>

    <p><?=$params["widgetdata"]["text"];?></p>

    <a href="#" class="<?=$params["widgetdata"]["btnclass"];?>"><?=$params["widgetdata"]["button"];?></a>
  </div>
</div>