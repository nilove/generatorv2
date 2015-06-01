
    <div class="container">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <div class="preamble light squares col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h3 class="title"><?=$params["widgetdata"]["title"];?></h3>
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
        <div class="text">
          <p><?=$params["widgetdata"]["text"];?></p>
        </div>
        <div class="opening">
          <h5 class="title"><?=$params["widgetdata"]["openinghourtitle"];?></h5>
          <ul class="list-inline">
            <li><?=$params["widgetdata"]["openinghour1"];?></li>
            <li><?=$params["widgetdata"]["openinghour2"];?></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <ul class="gallery custom-list list-inline">
          <?php 
          foreach ($params["widgetdata"]["nav"] as $d) 
          {
          ?>
            <li><img src="<?=copyimage($d["image"]);?>" class="img-responsive" alt=""></li>
          <?php   
          }
          ?>
        </ul>
      </div>
    </div>