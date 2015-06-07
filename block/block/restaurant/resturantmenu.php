<header id="header">
    <div class="uou-block-2b uou-block-2d icons has-bg-image">
      <div class="container">
      <a href="#" class="mobile-sidebar-button mobile-sidebar-toggle"><span></span></a>

        <nav class="nav">
          <ul class="sf-menu sf-js-enabled sf-arrows">
            <li class="active">
              <a href="index.html">
                <img src="img/1.png" alt=""> HOME</a>

            </li>
            <li>
              <a href="about-us.html">
                <img src="img/2.png" alt=""> About</a>

            </li>
            <li>
              <a href="gallery.html">
                <img src="img/3.png" alt=""> Gallery</a>

            </li>
            <li>
              <a href="#" class="logo">Chameleon</a>
            </li>
            <li>
              <a href="menu.html">
                <img src="img/4.png" alt=""> Menu</a>

            </li>
            <li>
              <a href="testimonial.html">
                <img src="img/5.png" alt=""> Testimonials</a>

            </li>
            <li>
              <a href="contact.html">
                <img src="img/6.png" alt=""> CONTACT</a>

            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>


  <section id="intro" class="intro-slider-content">
    <div id="intro-slider" class="owl-carousel intro-slider">
      <?php 
      foreach ($params["widgetdata"]["blocks"] as $d) 
      {
      ?>
      <div class="slide slide-text text-center">
        <h5><?=$d["text1"]?></h5>
        <h1><?=$d["text2"]?></h1>
        <h3><?=$d["text3"]?></h3>
        <h2><?=$d["text4"]?></h2>
      </div>
      <?php 	
      }
      ?>
    </div>
  </section>
