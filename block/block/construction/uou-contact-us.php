 <div class="uou-contact-details">
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <h4><?=$params["widgetdata"]["title"];?></h4>
            <p><?=$params["widgetdata"]["p1"];?></p>
            <p><?=$params["widgetdata"]["p2"];?></p> 
            
          </div>
          <div class="col-md-4 col-sm-4">
            <form class="form text-center">
          

              <input class="col-sm-4" type="text" placeholder="Name">
              <input class="col-sm-4" type="text" placeholder="Email">
              <textarea name="" id="" cols="10" rows="9" placeholder="Your message..."></textarea>


              <input type="submit" class="btn btn-warning" value="Send Message">

            </form>
            
          </div>
          <div class="col-md-4 col-sm-4">

            <div class="uou-block-8b">
              <ul class="list-icon-large">
                <li>
                  <i class="fa fa-map-marker"></i>
                  <span><strong><?=$params["widgetdata"]["address1"];?></strong></span>
                  <span><strong><?=$params["widgetdata"]["address2"];?></strong></span>

                  
                </li>

                <li>
                  <i class="fa fa-phone"></i>
                  <span><strong>General Phone:</strong><?=$params["widgetdata"]["phone1"];?></span>
                  <span><strong>General Fax:</strong><?=$params["widgetdata"]["phone2"];?></span>

                  
                </li>

                <li>
                  <i class="fa fa-clock-o"></i>
                  <span><strong>Operational Hours:</strong><?=$params["widgetdata"]["open"];?></span>
                  <span><strong>Weekdays</strong><?=$params["widgetdata"]["close"];?></span>

                  
                </li>

              </ul>
            </div> <!-- end .uou-block-8b -->
            
          </div>

        </div>
      </div>
    </div>
    
  </div> <!--  end uou-contact us -->