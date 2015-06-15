<div class="blog-single">
  <div class="post-with-slider">
    <article class="uou-block-7c">
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

      <div class="blog-title">

        <i class="fa fa-file-image-o"></i>
        <span class="date text-left"><?=$params["widgetdata"]["time"];?></span>

         <h1 class="text-left"><a href="#"><?=$params["widgetdata"]["title"];?></a></h1>
      </div>



      <p class="text-left"><?=$params["widgetdata"]["text"];?></p>

    </article> <!-- end .uou-block-7c -->
  </div>

</div> <!--  end blog-single -->