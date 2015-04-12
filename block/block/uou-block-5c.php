<div class="container">
  <div class="flexslider">
    <ul class="slides">
      <?php 
      foreach ($params["widgetdata"]["slides"] as $d) 
      {
      ?>
      <li>
        <blockquote>
          <p><?=$d["text"];?></p>
          <footer>
            <cite><?=$d["title"];?></cite>
            <?=$d["company"];?>
          </footer>
        </blockquote>
      </li>
      <?php   
      }
      ?>
    </ul>
  </div>
</div>