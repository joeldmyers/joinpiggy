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
<?php 
// included in download_..php viwe 
?>
    <div id="content" class="downloads">
        <div class="container">
            <h1>GET AUTOMATIC COUPONS & CASH BACK</h1>
            <div class="download-arrow"></div>
            <div id="computer-slide" class="pull-left">
                <div id="display">
                    <div class="screen">
                        <img src="/img/image1.png" />
                    </div>
                    <div class="screen">
                        <img src="/img/image1.png" />
                    </div>
                </div>
            </div>
            <div class="pull-right">
                <ul>
                    <li><span class="checkmark"></span><p>Download our app today and never miss a deal again</p><div class="clearfix"></div></li>
                    <li><span class="checkmark"></span><p>Be notified of deals and savings every time you visit a partner’s site</p><div class="clearfix"></div></li>
                    <li><span class="checkmark"></span><p>Get automatic credit for all of your shopping, whether you go to our site or not</p><div class="clearfix"></div></li>
                    <li><span class="checkmark"></span><p>All ForTheSchools apps are malware, adware, and virus free</p><div class="clearfix"></div></li>
                </ul>
                <a href="#" onclick="download()" id="startDownload">Download</a>
            </div>
        </div>
    </div>
<? end include ?>
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
    <script src="/js/plugins/jquery.tipsy.js"></script>
    <script src="/js/plugins/jquery.dcmegamenu.1.3.3.js"></script>
    <script src="/js/plugins/jquery.hoverIntent.js"></script>
    <script src="/js/fortheschools/global.js"></script>
    <script src="/js/fortheschools/download.js"></script>
</body>
</html>