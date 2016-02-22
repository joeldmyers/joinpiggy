<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>ForTheSchools.com</title>
        <meta name="description" content="">
        <meta name="viewport" content="user-scalable=0, initial-scale=0.5, width=device-width">
        <link rel="stylesheet" href="css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/web.css">
        <link rel="stylesheet" href="css/customSelect.css">
        <!--[if lt IE 9]>
          <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
          <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
    <nav class="navbar navbar-default" role="navigation">
      <div class="container container-fluid">
            <div id="welcome-back" class="pull-left">
                <a href="/" class="pull-left"><img src="/img/fts-logo.png" alt=""/></a>
                <div class="hidden-xs hidden-sm pull-left">Welcome! <a href="#">Sign Up</a> <span>/</span> <a href="#">Sign In</a></div>
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
<? // included in aboutHead.php ?>
    <header class="schools-about">
        <div class="container">
            <div id="how-we-help" class="pull-left">
                <h1>How We Help</h1>
                <p>How we help: <a href="/<?=ABOUT_PAGE?>/helping-ptas">PTA's</a> | <a href="/<?=ABOUT_PAGE?>/helping-schools">Schools</a></p>
            </div>
            <div id="sign-up" class="pull-right">
                <h3><strong>Connect Today!</strong></h3>
                <form>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="email" placeholder="Your Email Address"/>
                    <select id="iama">
                        <option>I am a Student</option>
                    </select>
                    <input type="submit" />
                    <div class="clearfix"></div>
                </form>
                <div class="or-connect">
                    <p class="pull-left">or</p>
                     <div class="facebook-signup-btn pull-left">
                        <button>SIGN UP WITH <span>FACEBOOK</span></button>
                    </div>
                    <div class="clearfix"></div>
                    <span id="how-we">How <a href="#">we help</a></span>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </header>
<? // end include in aboutHead.php ?>

<? // included in aboutNav.php 
	// MUST include aboutContent* after account nav or HTML will break
	// aboutNav / aboutContent are 100% dependant on eachother ?>
    <div id="content" class="about">
        <div class="container">
            <h1>Fundraise</h1>
            <div id="computer-slide">
                <div id="display">
                    <div class="screen">
                        <img src="/img/about/temp-1.jpg" />
                    </div>
                    <div class="screen">
                        <img src="/img/about/temp-1.jpg" />
                    </div>
                    <div class="screen">
                        <img src="/img/about/temp-1.jpg" />
                    </div>
                    <div class="screen">
                        <img src="/img/about/temp-1.jpg" />
                    </div>
                </div>
            </div>
            <div id="secondary-nav">
                <div class="left-clip"></div>
                <ul>                                                           
                    <li><a href="#" title="">PTA/PTO</a></li>
                    <li><a href="#" title="">Parents</a></li>
                    <li><a href="#" title="">Teachers</a></li>
                    <li><a href="#" title="">Children</a></li>
                    <li><a href="#" title="">Groups</a></li>
                <ul>
                <div class="right-clip"></div>
            </div>
<?php 
	// end include aboutNav
	// MUST include aboutContent* after account nav or HTML will break
	// aboutNav / aboutContent are 100% dependant on eachother 
?>
<?php // include about content ?>

            <ul class="extras">
                <li>
                    <div class="image">
                        <img src="/img/about/icon-computer.png" alt="" class="img-responsive"/>
                    </div>
                    <h4>Apps</h4>
                    <p>Feature description here second line text.</p>
                </li>
                <li>
                    <div class="image">
                        <img src="/img/about/icon-cart.png" alt="" class="img-responsive"/>
                    </div>
                    <h4>School Supplies</h4>
                    <p>Feature description here second line text.</p>
                </li>
                <li>
                    <div class="image">
                        <img src="/img/about/icon-browser.png" alt="" class="img-responsive"/>
                    </div>
                    <h4>School Sites</h4>
                    <p>Feature description here second line text.</p>
                </li>
                <li>
                    <div class="image">
                        <img src="/img/about/icon-widget.png" alt="" class="img-responsive"/>
                    </div>
                    <h4>Site Widgets</h4>
                    <p>Feature description here second line text.</p>
                </li>
            </ul>
            <div class="clearfix"></div>
            <div class="wrapper">

                <section class="left">
                    <h2>APPS</h2>
                    <div class="pull-left">
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="pull-right">
                        <img src="/img/about/imac.png" alt="" class="img-responsive pull-left" />
                    </div>
                    <div class="clearfix"></div>
                </section>

                <section class="right">
                    <h2>School Supplies</h2>
                    <div class="pull-left">
                        <img src="/img/about/left-imac.png" alt="" class="img-responsive pull-right" />
                    </div>
                    <div class="pull-right">
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="clearfix"></div>
                </section>

                <section class="left">
                    <h2>School Sites</h2>
                    <div class="pull-left">
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="pull-right">
                        <img src="/img/about/imac.png" alt="" class="img-responsive pull-left" />
                    </div>
                    <div class="clearfix"></div>
                </section>

                <section class="right">
                    <h2>Site Widgets</h2>
                    <div class="pull-left">
                        <img src="/img/about/left-imac.png" alt="" class="img-responsive pull-right" />
                    </div>
                    <div class="pull-right">
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="clearfix"></div>
                </section>
            </div>
                <section class="left">
                    <h2>PTAt/PTO</h2>
                    <div class="pull-left">
                        <h3>Sub Header Here</h3>
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="pull-right">
                        <img src="/img/about/fpo-1.png" alt="" class="img-responsive pull-left" />
                    </div>
                    <div class="clearfix"></div>
                    <div class="divider"></div>
                </section>

                <section class="right">
                    <h2>Tools for Teachers</h2>
                    <div class="pull-left">
                        <img src="/img/about/fpo-2.png" alt="" class="img-responsive pull-right" />
                    </div>
                    <div class="pull-right">
                        <h3>Sub Header Here</h3>
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="clearfix"></div>
                    <div class="divider"></div>
                </section>

                <section class="left">
                    <h2>Parents</h2>
                    <div class="pull-left">
                        <h3>Sub Header Here</h3>
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="pull-right">
                        <img src="/img/about/fpo-3.png" alt="" class="img-responsive pull-left" />
                    </div>
                    <div class="clearfix"></div>
                    <div class="divider"></div>
                </section>

                <section class="right">
                    <h2>Schools</h2>
                    
                    <div class="pull-left">
                        <img src="/img/about/fpo-4.png" alt="" class="img-responsive pull-right" />
                    </div>
                    <div class="pull-right">
                        <h3>Sub Header Here</h3>
                        <p>Lorem Ipsum. Proin gravida <strong>nibh vel velit auctor aliquet</strong>. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh... ...vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam</p>
                    </div>
                    <div class="clearfix"></div>
                </section>

        </div>
    </div>
<? // end include in aboutContent
	// SIDE EFFECT: closes the HTML divs in aboutNav
	
	?>
    

    <div id="subscribe">
        <div class="container">
            <div class="logo col-md-2 col-lg-2">
                <a href="/"><img src="/img/fts-logo.png" alt=""></a>
            </div>
            <div class="sub col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <p><em>Subscribe</em> <br/> to get offers right to your inbox!</p>
                </div>
                <div id="email" class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <form>
                        <input type="email" placeholder="Enter Your Email" class="col-xs-6 col-sm-6 col-md-12"/>
                    </form>
                </div>
            </div>
            <div id="social" class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
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

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="/js/plugins/jquery.customSelect.min.js"></script>
    <script src="js/plugins/jquery.cycle.all.js"></script>
    <script src="/js/bootstrap/bootstrap.min.js"></script>
    <script src="/js/fortheschools/global.js"></script>
    <script src="/js/fortheschools/about.js"></script>
</body>
</html>