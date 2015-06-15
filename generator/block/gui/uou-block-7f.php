<?php 
foreach ($params["widgetdata"]["posts"] as $key => $d) 
{
?>
<article class="uou-block-7f">
  <img src="<?=copyimage($d["image"]);?>" alt="" class="thumb">

  <div class="meta">
    <span class="time-ago"><?=$d["time_ago"];?></span>
    <span class="category"><?=$d["category"];?></span>
    <a href="#" class="comments"><?=$d["comment_text"];?></a>
  </div>

  <h1><a href="#"><?=$d["title"];?></a></h1>

  <p><?=$d["text"];?></p>

  <a href="#" class="btn btn-primary"><?=$d["button"];?></a>
</article> <!-- end .uou-block-7f -->
<?php    
}
?>