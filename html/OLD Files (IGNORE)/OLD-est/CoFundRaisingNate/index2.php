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
<? // included in fts_signup.php ?>
    <header>

        <div class="container">
            <div id="fundraising">
                <h1>Automatic Fundraising</h1>
                <p>Stores give back as much as <span class="percent">25.0%</span> of online purchases<br/><span class="back-to-school">back to your school!</span></p>
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
        </div>
    </header>
<? // end included in fts_signup.php ?>
<? // included in searchbar_fts.php ?>
    <div id="search-bar">
        <div class="container">
            <div class="wrap">
                <p>Search for your school</p>
                <form>
                    <input type="text" placeholder="Enter your City & State or School Name" />
                    <input type="submit" value="Search"/>
                </form>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
<? // end included in all_group_searchbar.php ?>
<? // included in locations_fts.php ?>
    <div id="locations">
        <div class="container">
            <h4>Matching Locations and Schools</h4>
            <div class="locations">
                <ul>
                    <li>
                        <div class="image pull-left">
                            <img src="/img/temp-school-photo.jpg" class="img-responsive"/>
                        </div>
                        <p class="pull-left">
                            <span class="name">School Name Goes Here</span>
                            <span>Address Line Goes Here</span>
                            <span>Address Line Goes Here</span>
                            <span><a href="#">Visit School Page</a></span>
                        </p>
                    </li>
                    <li>
                        <div class="image pull-left">
                            <img src="/img/temp-school-photo.jpg" class="img-responsive"/>
                        </div>
                        <p class="pull-left">
                            <span class="name">School Name Goes Here</span>
                            <span>Address Line Goes Here</span>
                            <span>Address Line Goes Here</span>
                            <span><a href="#">Visit School Page</a></span>
                        </p>
                    </li>
                    <li class="hidden-sm">
                        <div class="image pull-left">
                            <img src="/img/temp-school-photo.jpg" class="img-responsive"/>
                        </div>
                        <p class="pull-left">
                            <span class="name">School Name Goes Here</span>
                            <span>Address Line Goes Here</span>
                            <span>Address Line Goes Here</span>
                            <span><a href="#">Visit School Page</a></span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
 <? // included in all_locations.php ?>
    <div id="stores">
        <div class="container">
            <div id="ribbon" class="col-xs-9 col-sm-12 col-lg-12">
                <div id="red-ribbon-left"></div>
                <div id="red-ribbon">
                    <p>Over 1000 Stores</p>
                    <span>Click on a brand to give back now!</span>
                </div>
                <div id="red-ribbon-right"></div>
            </div>
            <div class="stores">
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="store col-xs-5 col-sm-5 col-lg-3">
                    <img src="/img/temp-logo.png" class="img-responsive"/>
                    <p>Up to 8.0%</p>
                </div>
                <div class="clearfix"></div>
            </div>
            <div id="automatic" class="info">
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                    <img src="/img/bg-automatic.png" alt="" class="img-responsive"/>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-9">
                    <h2>Automatic cash back!</h2>
                    <p>No rebate forms, paperwork or clutter. We do it all.</p>
                </div>
            </div>

            <div id="my-store" class="info">
                <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div class="col-xs-5 col-sm-5 col-md-7 col-lg-8">
                    <h2>Is my store included?</h2>
                    <p>Yes. We have all your favorites!<a class="button" href="#">Search here</a></p>
                    <div class="logos col-md-12 col-lg-12">
                        <ul class="col-md-12 col-lg-12 hidden-xs hidden-sm">
                            <li class="col-md-2"><a href="#"><img src="/img/logo-macys.png" class="img-responsive"/></a></li>
                            <li class="col-md-2"><a href="#"><img src="/img/logo-walmart.png" class="img-responsive"/></a></li>
                            <li class="col-md-2"><a href="#"><img src="/img/logo-target.png" class="img-responsive"/></a></li>
                            <li class="col-md-2"><a href="#"><img src="/img/logo-guess.png" class="img-responsive"/></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                    <img src="/img/bg-my-store.png" alt="" class="img-responsive"/>
                </div>
                <div class="clearfix"></div>
                <div class="col-xs-1 col-sm-1 col-md-1  hidden-lg hidden-md"></div>
                <div class="logos col-xs-12 col-sm-10  hidden-lg hidden-md">
                    <ul>
                        <li class="col-xs-2 col-sm-3"><a href="#"><img src="/img/logo-macys.png" class="img-responsive"/></a></li>
                        <li class="col-xs-2 col-sm-3"><a href="#"><img src="/img/logo-walmart.png" class="img-responsive"/></a></li>
                        <li class="col-xs-2 col-sm-3"><a href="#"><img src="/img/logo-target.png" class="img-responsive"/></a></li>
                        <li class="col-xs-2 col-sm-3"><a href="#"><img src="/img/logo-guess.png" class="img-responsive"/></a></li>
                    </ul>
                </div>
            </div>

            <div id="totally" class="info">
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                    <img src="/img/bg-totally.png" alt="" class="img-responsive"/>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-9">
                    <h2>Totally easy, Free to join!</h2>
                    <p>Everyones busy. We make shopping online. Get the best prices with our coupons and earn cash back automatically!</p>
                </div>
            </div>
        </div>
    </div>

    <div id="secondary-join">
        <div class="container">
            <div class="pull-left col-xs-12 col-sm-12 col-md-6 col-lg-5">
                <span class="col-xs-12 col-sm-12 col-lg-12">8.0% cash back just got better thru 04/14</span>
            </div>
            <div class="pull-left col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <form>
                    <input type="email" placeholder="Your Email Address"/>
                    <input type="submit" value="Join To Earn" />
                </form>
            </div>
            <div class="pull-left col-xs-12 col-sm-12 col-lg-2">
                 <p>or <img src="/img/fb-login.png" /></p>
            </div>
        </div>
    </div>

    <div id="what-about">
        <div class="container">
            <div id="branding" class="col-xs-12 col-sm-12 col-lg-3">
                <img src="/img/wwpb.png" alt="" />
            </div>
            <div class="col-xs-12 col-sm-12 col-lg-8">
                <h4>Cash back is amazing.</h4>
                <span>What About Online Coupons?</span>
                <p>Aside from the Thousands of Dollars earned Daily by our users, we have a great selection of online coupons and promotion codes for your favorite stores.</p>
                <p><strong>Amazing Savings from your Favorite Stores!</strong></br> Our Average Coupon and Discount helps save people 25%! Combine it with our average cash back payout of 8.0%, you  are <strong>saving an average of 33%!</strong></p>
            </div>
        </div>
    </div>
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
    <script src="/js/bootstrap/bootstrap.min.js"></script>
    <script src="/js/fortheschools/global.js"></script>
</body>
</html>