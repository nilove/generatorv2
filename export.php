<?php 
error_reporting(0);
$postdata = file_get_contents("php://input");
$postdata=json_decode($postdata,true);
$data=json_decode($postdata["obj"],true);

$base_path=realpath("sourcecode")."/";
$source_base=realpath("")."/";
$folder="HTML-".time();
$global_bg_array=array();
$globalmenu=array();
$globalsolcialmenu=array();
$authenticationmenu=array();
$languagemenu=array();
//deleteDir("sourcecode/{$folder}");
mkdir($base_path.$folder, 0777, true);
mkdir($base_path.$folder."/img", 0777, true);
mkdir($base_path.$folder."/css", 0777, true);
mkdir($base_path.$folder."/js", 0777, true);
mkdir($base_path.$folder."/fonts", 0777, true);
mkdir($base_path.$folder."/uploads", 0777, true);

recurse_copy("{$source_base}basesource/img","{$base_path}{$folder}/img");
recurse_copy("{$source_base}basesource/css","{$base_path}{$folder}/css");
recurse_copy("{$source_base}basesource/js","{$base_path}{$folder}/js");
recurse_copy("{$source_base}basesource/fonts","{$base_path}{$folder}/fonts");


foreach ($data as $d) 
{
    $page_name=strtolower($d["name"]);
    $page_name=str_replace(' ','',$page_name);
    //print_r($d["background_property"]);
    $global_bg_array[]=array("id"=>$page_name,
                                    "bg-property"=>$d["background_property"]
                                    );
        if(!empty($d["nodes"]))
        {
            ob_start();
            ?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?=$page_name;?></title>
        <!-- Stylesheets -->
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,400,600,700|Droid+Serif:400,700,400italic">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/import.css">
    </head>
    <body id="<?=$page_name;?>">
        
        <div id="main-wrapper">
        <?php 
        foreach ($d["nodes"] as $n)
        {
        GeneratePreview($n);
        }        
        ?>
        </div>
        
        <div class="uou-block-11a">
              <h5 class="title">Menu</h5>
              <a href="#" class="mobile-sidebar-close">&times;</a>

              <nav class="main-nav">
                <ul>
                  <?php 
                  foreach ($globalmenu as $menu) 
                  {
                     foreach ($menu as $d) 
                     {
                        ?>
                        <li>
                            <a href="<?=$d["link"]?>"><?=$d["title"]?></a>
                            <?php 
                            generateSubmenu($d["items"]);
                            ?>
                        </li>
                        <?php       
                     }   
                  }
                  ?>
                </ul>
              </nav>

              <hr>

              <form class="search-form" action="">
                <input type="text" class="search-input" placeholder="Search ...">
                <input type="submit" value="">
              </form>

              <?php 
              if(count($authenticationmenu) > 0)
              {
                ?>
                <hr>

              <ul class="authentication">
                <?php 
                  foreach ($authenticationmenu as $menu) 
                  {
                     foreach ($menu as $d) 
                     {
                        ?>
                        <li>
                            <a class="btn btn-small btn-primary" href="<?=$d["link"]?>"><?=$d["title"]?></a>
                        </li>
                        <?php       
                     }   
                  }
                  ?>
              </ul>
                <?php   
              }
              ?>
              
              <?php 
              if(count($languagemenu))
              {
                ?>
                <hr>

                  <ul class="language">
                    <?php 
                      foreach ($languagemenu as $menu) 
                      {
                         foreach ($menu as $d) 
                         {
                            ?>
                            <li>
                                <a href="#"><?=$d["title"]?></a>
                            </li>
                            <?php       
                         }   
                      }
                      ?>
                  </ul>  
                <?php 
              }
              ?>
              

              <?php 
              if(count($globalsolcialmenu) > 0)
              {
              ?>
              <hr>

              <ul class="social-icons">
                 <?php 
                  foreach ($globalsolcialmenu as $menu) 
                  {
                     foreach ($menu as $d) 
                     {
                        ?>
                        <li>
                            <a class="fa <?=$d["icons"]?>" href="<?=$d["link"]?>"></a>
                        </li>
                        <?php       
                     }   
                  }
                  ?>
              </ul>
              <?php   
              }
              ?>
            </div> <!-- end .uou-block-11a -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/jquery-2.1.3.min.js"><\/script>')</script>
        <script src="js/plugins/hoverIntent.js"></script>
        <script src="js/plugins/superfish.min.js"></script>
        <script src="js/plugins/mejs/mediaelement-and-player.min.js"></script>
        <script src="js/plugins/jquery.flexslider-min.js"></script>
        <script src="js/plugins/rangeslider.min.js"></script>
        <script src="js/uou-accordions.js"></script>
        <script src="js/uou-tabs.js"></script>
        <script src="//maps.googleapis.com/maps/api/js?v=3.exp"></script>
        <script src="js/plugins/rangeslider.min.js"></script>
        <script src="js/scripts.min.js"></script>
        </body>
</html>                
            <?php
            $out1 = ob_get_contents();
            ob_end_clean();
            $out1=trim($out1);
            $file = fopen("{$base_path}{$folder}/{$page_name}.html","w+");
            file_put_contents("{$base_path}{$folder}/{$page_name}.html",$out1);
            //print_r($global_bg_array);     
        }
		
}

function appendtocss($bgpropertyarray,$id)
{
            global $folder,$base_path;
            $page_bg=array();
            foreach ($bgpropertyarray as $bgkey=>$bg)
            {
                if($bg != "")
                {
                    $bgkey=str_replace("_","-", $bgkey);
                    if($bgkey == "background-image")
                    {
                        if($bg != "none")
                        {
                          copyimage($bg);
                          $page_bg[$bgkey]="url('../{$bg}')";
                        }
                        
                    }
                    elseif($bgkey == "height")
                    {
                        $page_bg[$bgkey]="auto";
                    }
                    else
                    {
                        $page_bg[$bgkey]=$bg;
                    }
                    
                }
                
            }
            ob_start();
            ?>
            #<?=$id?>{
            <?php
            foreach ($page_bg as $bgkey=>$bg)
            {
                ?>
                <?=$bgkey;?>:<?=$bg?>;
                <?php 
            }
            ?>
            }
            <?php 
            $out1 = ob_get_contents();
            ob_end_clean();
            $out1=trim($out1);
            $css= fopen("{$base_path}{$folder}/css/import.css","a");
            fwrite($css, $out1);  
            fclose($css);  
}

function GeneratePreview($params)
{
    global  $global_bg_array,$globalmenu,$globalsolcialmenu;

    if(isset($params["background_property"]))
    {  
        //$global_bg_array[]=array("id"=>$params["id"],"bg-property"=>$params["background_property"]);
    }
	if($params["w_type"] == "widget")
	{
        if($params["type"] == "menu")
        {
            if(isset($params["widgetdata"]["nav"]))
            {
                $globalmenu[]=$params["widgetdata"]["nav"];
            }

            if(isset($params["widgetdata"]["social"]))
            {
                $globalsolcialmenu[]=$params["widgetdata"]["social"];
            }

            if(isset($params["widgetdata"]["authentication"]))
            {
                $authenticationmenu[]=$params["widgetdata"]["authentication"];
            }

            if(isset($params["widgetdata"]["language"]))
            {
                $languagemenu[]=$params["widgetdata"]["language"];
            }


            
        }
		$parts=explode("/",$params['template']);
		$file=array_pop($parts);
        $file=explode(".",$file);
        $parts[]="{$file[0]}.php";
		include(implode("/",$parts)); 
	}
    elseif(!empty ($params["nodes"]))
    {
        $additional_data=array();
        $class_n=array();
        
        $params["extraclass"]=trim(str_replace("has-bg-image","",$params["extraclass"]));
        $params["extraclass"]=trim(str_replace("mn-height","",$params["extraclass"]));
        $params["class"]=trim(str_replace("mn-height","",$params["class"]));

        $params["class"]=trim(str_replace("posrelative","",$params["class"]));
        $params["extraclass"]=trim(str_replace("posrelative","",$params["extraclass"]));
        
        if($params["class"] != "")
        {
            $class_n[]=$params["class"];
        }

        if($params["extraclass"] != "")
        {
            $class_n[]=$params["extraclass"];
        }
        

        if($params["background_property"]["background_image"] != "" || $params["background_property"]["background_color"] != "" || $params["background_property"]["backgroundopacity"] != "")
        {
          $class_n[]="has-bg-image";
        }

        if($params["background_property"]["background_image"] != "")
        {
            if($params["background_property"]["background_image"] != "none")
            {
              //$class_n[]="has-bg-image";
              $additional_data[]="data-bg-image='".copyimage($params["background_property"]["background_image"])."'";  
            }
            
        }

        if($params["background_property"]["background_color"] == "#fff")
        {
            $params["background_property"]["background_color"]="";   
        }
        if($params["background_property"]["background_color"] != "")
        {
            //$class_n[]="has-bg-image";
            $additional_data[]="data-bg-color='{$params["background_property"]["background_color"]}'";
        }

        

        if($params["background_property"]["backgroundopacity"] != "")
        {
            //$class_n[]="has-bg-image";
            $additional_data[]="data-bg-opacity='{$params["background_property"]["backgroundopacity"]}'";
        }
        $additional_data=implode(" ", $additional_data);
        
        if($params["margintopclass"] == "mt0")
        {
            $params["margintopclass"]="";    
        }
        if($params["margintopclass"] != "")
        {
            $class_n[]=trim($params["margintopclass"]);    
        }


        if($params["marginbottomclass"] == "mb0")
        {
            $params["marginbottomclass"]="";    
        }
        if($params["marginbottomclass"] != "")
        {
            $class_n[]=trim($params["marginbottomclass"]);    
        }

        $class_n=array_unique($class_n);
        $class_n=trim(implode(" " ,$class_n));
        $classstring="";
        if($class_n !="")
        {
          $classstring="class='{$class_n}'";
        }
        if($additional_data != "")
        {
          $classstring.=" {$additional_data}"; 
        }
        ?>
        <div <?=$classstring;?>>
            <?php 
            foreach ($params["nodes"] as $d) 
            {
                GeneratePreview($d);
            }
            ?>
        </div>    
        <?php  
    }
	
}
function generateSubmenu($menu)
{
    if(!empty($menu))
    {
        echo "<ul>";
        foreach ($menu as $d)
        {
            echo "<li>";
            echo "<a href='{$d["link"]}'>{$d["title"]}</a>";
            generateSubmenu($d["items"]);
            echo "</li>";
        }     
        echo "</ul>";
    }
    
}

function copyimage($img)
{
    global $source_base;
    global $base_path;
    global $folder;
    if(!filter_var($img, FILTER_VALIDATE_URL))
    {
      copy("{$source_base}{$img}","{$base_path}{$folder}/{$img}");
    }
    return $img;
}

function recurse_copy($src,$dst) { 
    $dir = opendir($src); 
    $mask=umask(0);
    mkdir($dst,0777);
    umask($mask);
    //chmod($dst, 0777); 
    while(false !== ( $file = readdir($dir)) ) { 
        if (( $file != '.' ) && ( $file != '..' )) { 
            if ( is_dir($src . '/' . $file) ) { 
                recurse_copy($src . '/' . $file,$dst . '/' . $file); 
            } 
            else { 
                copy($src . '/' . $file,$dst . '/' . $file); 
            } 
        } 
    } 
    closedir($dir); 
}

function deleteDir($dir) {
   $iterator = new RecursiveDirectoryIterator($dir);
   foreach (new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::CHILD_FIRST) as $file) 
   {
      if ($file->isDir()) {
         rmdir($file->getPathname());
      } else {
         unlink($file->getPathname());
      }
   }
   rmdir($dir);
}


function Zip($source, $destination)
{
    if (!extension_loaded('zip') || !file_exists($source)) {
        return false;
    }

    $zip = new ZipArchive();
    if (!$zip->open($destination, ZIPARCHIVE::CREATE)) {
        return false;
    }

    $source = str_replace('\\', '/', realpath($source));

    if (is_dir($source) === true)
    {
        $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source), RecursiveIteratorIterator::SELF_FIRST);

        foreach ($files as $file)
        {
            $file = str_replace('\\', '/', $file);

            // Ignore "." and ".." folders
            if( in_array(substr($file, strrpos($file, '/')+1), array('.', '..')) )
                continue;

            $file = realpath($file);

            if (is_dir($file) === true)
            {
                $zip->addEmptyDir(str_replace($source . '/', '', $file . '/'));
            }
            else if (is_file($file) === true)
            {
                $zip->addFromString(str_replace($source . '/', '', $file), file_get_contents($file));
            }
        }
    }
    else if (is_file($source) === true)
    {
        $zip->addFromString(basename($source), file_get_contents($source));
    }

    return $zip->close();
}




foreach ($global_bg_array as $d) {
    appendtocss($d["bg-property"],$d["id"]);
}


Zip("sourcecode/{$folder}","sourcecode/{$folder}.zip");
deleteDir("sourcecode/{$folder}");
echo "sourcecode/{$folder}.zip";
?>