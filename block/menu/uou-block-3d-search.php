<div class="container">
  <ul class="breadcrumbs-secondary">
    <?php 
    foreach ($params["widgetdata"]["nav"] as $nav) {
    ?>
    	<li><a href="<?=$nav["link"]?>"><span class="arrow"></span><?=$nav["title"]?></a></li>
    <?php 
    }?>
    <li><span><span class="arrow"></span>Web Design</span></li>
  </ul>

  <form class="search-form" action="">
    <input type="text" class="search-input input-small" placeholder="Search ...">
    <input type="submit" value="">
  </form>
</div>