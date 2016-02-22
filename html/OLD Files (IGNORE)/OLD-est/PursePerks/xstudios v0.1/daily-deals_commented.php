<? // check index_commented
// this is the main page template html
 ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>PursePerks.com</title>
        <meta name="description" content="">
        <meta name="viewport" content="user-scalable=0, initial-scale=0.5, width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/web.css">
        <link rel="stylesheet" href="css/customSelect.css">
    </head>
    <body>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container container-fluid">
            <div id="welcome-back" class="pull-left">
                Welcome! <a href="#">Sign Up</a> <span>/</span> <a href="#">Sign In</a>
            </div>
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#" class="icon star hidden-xs"></a><a href="#" class="secondary hidden-sm hidden-md hidden-lg">Daily Deals</a></li>
                <li><a href="#" class="icon dollar hidden-xs"></a><a href="#" class="secondary hidden-sm hidden-md hidden-lg">Stores</a></li>
                <li><a href="#" class="icon coupons hidden-xs"></a><a href="#" class="secondary hidden-sm hidden-md hidden-lg">Coupons</a></li>
                <li><a href="#" class="icon download hidden-xs"></a><a href="#" class="secondary hidden-sm hidden-md hidden-lg">Favorites</a></li>
                <li><a href="#" class="icon account hidden-xs"></a><a href="#" class="secondary hidden-sm hidden-md hidden-lg">Lists</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
        </div>
      </div><!-- /.container-fluid -->
    </nav>
    <header>
        <div class="container">
            <div id="logo">
                <a href="#"></a>
            </div>
            <form method="POST" action="?" class="pull-left col-xs-8 col-sm-5 col-md-6 col-lg-7" role="form"> 
                <input type="text" name="search" placeholder="Search 100's of Stores & Deals..." class="pull-left col-xs-5 col-sm-4 col-md-6 col-lg-7"/>
                <div id="search-icon" class="pull-left"></div>
                <select id="search-options" class="pull-left">
                    <option>All Categories</option>
                </select>
                <div class="clearfix"></div>
                <ul class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <li><a href="#">Daily Deals</a></li>
                    <li><a href="#">Stores</a></li>
                    <li><a href="#">Coupons</a></li>
                    <li><a href="#">Why Join</a></li>
                </ul>
            </form>
            <div id="join" class="pull-left col-xs-3 col-sm-2 col-md-2 col-lg-2">
                <button class="button blue col-xs-12 col-sm-12 col-md-12 col-lg-12" type="button">JOIN NOW</button>
                <p class="hidden-xs hidden-sm">Earn up to 8% cash back!</p>
            </div>
        </div>
    </header>
<? // check index_commented 
// main page template preceeds this 

// now below is the offers and stores template body, these elemets used a lot elsewhere
//
?>
<? // include in - nope, shits not needed. - need to remove this - all_offersandstores.php // moved into PerksContentPage class
?>
    <div id="inner">
        <div class="container">
<? // included in all_popularstores.php ?>    
            <h3>Popular Stores</h3>
            <ul id="popular-stores">
                <li>
                    <div class="valign"></div>
                    <div class="logo">
                        <img src="/img/temp-logo.png" class="img-responsive"/>
                    </div>
                    <span>Up to 8.0%</span>
                </li>
                <li>
                    <div class="valign"></div>
                    <div class="logo">
                        <img src="/img/logo-macys.png" class="img-responsive"/>
                    </div>
                    <span>Up to 8.0%</span>
                </li>
                <li >
                    <div class="valign"></div>
                    <div class="logo">
                        <img src="/img/the-vault.jpg" class="img-responsive"/>
                    </div>
                    <span>Up to 8.0%</span>
                </li>
                <li class="hidden-xs hidden-md">
                    <div class="valign"></div>
                    <div class="logo">
                        <img src="/img/lane-bryant.jpg" class="img-responsive"/>
                    </div>
                    <span>Up to 8.0%</span>
                </li>
                <li class="hidden-xs hidden-sm hidden-md">
                    <div class="valign"></div>
                    <div class="logo">
                        <img src="/img/blue-fly.jpg" class="img-responsive"/>
                    </div>
                    <span>Up to 8.0%</span>
                </li>
                <li id="download-app" class="hidden-xs hidden-sm">
                    <a href="#">
                        <div class="pull-left">
                            <img src="/img/icon-download.png" alt="" />
                        </div>
                        <? // we should add logic to check if app installed to smartly display relevant info, default is download app option below 
						// if {$fake_code_AppInstalled == 1){ something else
						// } else { ?>
                        <div class="pull-right">
                            <span>Download Our App</span>
                            <p>It's Easy. It's Fast! Start<br/> earning today.</p>
                        </div>
                        <? // } ?>
                    </a>
                </li>
            </ul>
<? // end include in all_popularstores.php ?>
<? // include in all_categorymenu.php ?>
	<? 
	/*
		need to get $path based on the page type,
		if it's a store its the store $path/$category name
		if its cash back offers, its the $path for cash back offers $categorynamee
		this logic can go anywehre, and be changed at your leisure
		
		Please get with nick about the intent
		
		// note $path is a guess, if you change the variable here, it is used in the
			all_storeofferssubmenu.php as well, please update that variable there too
		
		If page type is coupons related (including categories), $path = /coupons/
		If page type is a specific store page, $path = /coupons/store-name/
		If page type is a cash back stores brows page, $path = /cashback-stores/
		
		Good structure would yeild results like
		$CurrentPageCategoryURL = "/coupons/"
		$CurrentPageCategoryURL = "/coupons/baby-and-kids/"
		$CurrentPageCategoryURL = "/coupons/best-buy/electronics" (for store category filter of offers and coupons)
		
		So my value which means nothing:
	*/		
		$CurrentPageCategoryURL = '$path' . '$categoryURL_whatever_your_variable_is';
 	// Change the above to something that works for your code
	?>
		
		
            <div id="cat-drop" class="hidden-md hidden-lg">
                <select>
                    <option value="<?=$CurrentPageCategoryURL?>">Popular Categories</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Baby & Kids</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Books & Magazines</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Cameras</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Cell Phones</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Clothing</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Computers</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Electronics</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Flowers & Gifts</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Grocery</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Health & Beauty</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Home & Garden</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Jewelry</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Laptops</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Music & Movies</option>
                    <option value="<?=$CurrentPageCategoryURL?>">Office & School Supplies</option>
                </select>
            </div>
            <div id="categories" class="pull-left hidden-xs hidden-sm" >
                <div class="heading">Popular Categories</div>
                <ul>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Baby & Kids</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Books & Magazines</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Cameras</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Cell Phones</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Clothing</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Computers</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Electronics</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Flowers & Gifts</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Grocery</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Health & Beauty</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Home & Garden</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Jewelry</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Laptops</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Music & Movies</a></li>
                    <li><a href="<?=$CurrentPageCategoryURL?>" title="">Office & School Supplies</a></li>
                    <li class="see-more"><a href="#next<? // do nothing here for now, fix later?>" title="See More">See more <img src="/img/icon-plus.png" alt="" /></a></li>
                </ul>
<? // include pperks_testimonials.php ?>
	<? 
		// long term goal is to make these database driven, but for now they are static 
		// plus we may not include the testimonials on store pages, or make the testimonials relevant to the store - not yet though
	?>
                <div id="testimonials">
                    <h3>Testimonials</h3>
                    <div id="slides">
                        <div class="slides">
                            <p>I really enjoy getting the automatic cash back checks. Thanks PursePerks!</p>
                            <span>– Kaneesha W.</span>
                        </div>
                        <div class="slides">
                            <p>I like how your app lets me know what stores give me cash back and automatically reminds me to activate the online rebates.</p>
                            <span>– Wendy D.</span>
                        </div>
                        <div class="slides">
                            <p>Thanks for making it so easy to find great online coupons and exclusive sales. Great job Guys!</p>
                            <span>– Marcus J.</span>
                        </div>
                        <div class="slides">
                            <p>I love getting autotic cash back, but I wish I could feel more manly using it. Buy more tools I guess?</p>
                            <span>– Jeff S.</span>
                        </div>
                        <div class="slides">
                            <p>Your Email alerts really help us keep track of sales. I just got 70% off at old navy, and we just did the lands end online only sale too! Thanks guys!</p>
                            <span>– Jill M.</span>
                        </div>
                        <div class="slides">
                            <p>Quit Censoring my Reviews! I just am trying to say "#*@# YEAH!!" Cuz I got $360 cash back from buying some stuff for work! My boss doesn't care even cause of the coupon code we used that saved them a few hundred.</p>
                            <span>– Niles C.</span>
                        </div>
                        <div class="slides">
                            <p>Wish you guys had a cool cashback app for my phone! Love using the website, but when's this coming out?</p>
                            <span>– Mary P.</span>
                        </div>
                    </div>
                </div>
<? // end include pperks_testimonials.php ?>
            </div>
<? // end include all_categorymenu.php ?>
<? // include all_storeofferssubmenu.php ?>
	<? 
		// The type of the Page is the same logic used in the $path which is used in the left menu
		// used in the class values below
		switch ($path) {
			case "/coupons" : $currentclass_deals = ' class="current"';
			break;
			case "/cashback-stores" : $currentclass_stores = ' class="current"';
			break;
			case "/coupons" : $currentclass_coupons = ' class="current"';
			break;
			case "/coupons/printable" : $currentclass_printablecoupons = ' class="current"';
			break;
			default: $currentclass_deals = ' class="current"';
			break;
		};
		?>			
            <div id="shop" class="pull-left">
                <div class="heading">
                    <span>Shop by:</span>
                    <a href="/coupons" title="Deals"<?=$currentclass_deals?>>Deals</a>
                    <a href="#" title="Stores"<?=$currentclass_stores?>>Stores</a>
                    <a href="#" title="Coupons"<?=$currentclass_coupons?>>Coupons</a>
					<a href="#" title="Coupons"<?=$currentclass_printablecoupons?>>Printable Coupons</a>
                </div>
<? // end include all_storeoffersubmenu ?>
<? // include all_items.php ?>
	<? // this should be really an include that sits inside the other include ?>                
                <div class="items">
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                    <div class="item">
                        <div class="logo">
                            <img src="/img/logo-readers-digest.png" class="img-responsive" />
                        </div>
                        <div class="image">
                            <img src="/img/temp-image.png" class="img-responsive" />
                        </div>
                        <p>Save 65% off target clearance!!!!<br/> No coupons ...<a href="#" title="Cick to see more">more</a></p>
                        <a class="button" href="#" title="Shop Now">Shop Now</a>
                        <span>Up to 8.0%</span>
                    </div>
                </div>
<? // end include all_items.php ?> 
            </div>
        </div>
    </div>
<? // end include all_offersandstores.php ?>
    <div id="subscribe">
        <div class="container">
            <div class="col-md-1 col-lg-1"></div>
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-6">
                    <p><em>Subscribe</em> <br/> to get offers right to your inbox!</p>
                </div>
                <div id="email" class="col-xs-12 col-sm-12 col-md-4 col-lg-6">
                    <form>
                        <input type="email" placeholder="Enter Your Email" />
                    </form>
                </div>
            </div>
            <div id="social" class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <img src="/img/temp-facebooktwitter.png" />
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <ul class="col-xs-12 col-sm-12 col-lg-9">
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Advertising Partnerships</a></li>
                <li><a href="#">Customer Care</a></li> 
                <li><a href="#">Terms of Use</a></li>   
                <li><a href="#">Privacy Policy</a></li>  
                <li><a href="#">Unsubsribe</a></li>
            </ul>
            <p class="col-xs-12 col-sm-12 col-lg-3">Copyright © 2014 All Rights Reserved.</p>
        </div>
    </footer>

    <script src="/js/jquery-2.1.0.min.js"></script>
    <script src="/js/plugins/jquery.customSelect.min.js"></script>
    <script src="/js/plugins/jquery.cycle.all.js"></script>
    <script src="/js/bootstrap/bootstrap.min.js"></script>
    <script src="/js/purseperks/global.js"></script>
    <script src="/js/purseperks/inner.js"></script>
    <script>
        
    </script>
</body>
</html>