<div class="container">
      <div class="left-section">
        <ul class="links">
          <?php 
          foreach ($params["widgetdata"]["nav"] as $d) 
          {
          ?>
              <li><a href="<?=$d["link"];?>"><?=$d["title"];?></a></li>
          <?php   
          }
          ?>
        </ul>

        <hr>

        <ul class="contact-info">
          <?php 
          foreach ($params["widgetdata"]["contact"] as $d) 
          {
            ?>
            <li>
              <i class="fa <?=$d["icons"];?>"></i>
              <?=$d["text"];?>
            </li>
            <?php 
          }
          ?>
        </ul>
      </div>

      <div class="right-section">
        <h5><?=$params["widgetdata"]["text"];?></h5>

        <form class="newsletter-form" action="">
          <input type="email" placeholder="Enter your email address">
          <input type="submit" class="btn btn-primary" value="Subscribe">
        </form>
      </div>
</div>