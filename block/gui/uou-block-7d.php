<ul class="uou-block-7d">
  <?php 
  foreach ($params["widgetdata"]["posts"] as $d) 
  {
      ?>
      <li>
        <span class="time-ago"><?=$d["timetext"];?></span>
        <h5><a href="#"><?=$d["title"];?></a></h5>
        <p><?=$d["text"];?></p>
      </li>
      <?php   
  }
  ?>
</ul> <!-- end .uou-block-7d -->