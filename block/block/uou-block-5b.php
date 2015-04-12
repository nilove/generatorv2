<div class="container">
<?php 
foreach ($params["widgetdata"]["tabs"] as $key=>$d) 
{
    $active="";
    if($key == 0)
    {
      $active="active";
    }
    ?>
  <blockquote class="class_<?=$key;?> <?=$active;?>">
    <p><?=$d["text"];?></p>
    <footer><cite><a href="#"><?=$d["name"];?></a></cite></footer>
  </blockquote>
    <?php   
}
?>
  <ul class="tabs">
    <?php  
    foreach ($params["widgetdata"]["tabs"] as $key=>$d) 
    {
      $active="";
      if($key == 0)
      {
        $active="active";
      }
      ?>
      <li data-target="class_<?=$key;?>" class="<?=$active;?>">
        <img src="<?=$d["image"];?>" alt="">
        <h6><?=$d["name"];?></h6>
        <a href="<?=$d["url"];?>"><?=$d["url"];?></a>
      </li>
      <?php 
    }
    ?>
  </ul>
</div>