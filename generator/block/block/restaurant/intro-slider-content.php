<section id="intro" class="intro-slider-content">
    <div id="intro-slider" class="owl-carousel intro-slider">
      <?php 
      foreach ($params["widgetdata"]["blocks"] as $d) 
      {
      ?>
      <div class="slide slide-text text-center">
        <h5><?=$d["text1"];?></h5>
        <h1><?=$d["text2"];?></h1>
        <h3><?=$d["text3"];?></h3>
        <h2><?=$d["text4"];?></h2>
      </div>
      <?php	
      }
      ?>
    </div>
</section>
