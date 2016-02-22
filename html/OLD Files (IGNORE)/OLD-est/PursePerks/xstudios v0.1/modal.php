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
<!-- moved to body, may error
        <script>
            var url = 'img/screenshot-target.png';
        </script>
-->     

    </head>
    <body>
<? // added to pperks_interstitial.php ?>    
<!-- added from head -->
        <script>
            var url = 'img/screenshot-target.png';
        </script>    
    <div class="screenshot-container">
        <div class="overlay"></div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">One Moment Please.</h3>
            </div>
            <div class="panel-body">
                <p class="greeting">Congratulations <strong>FirstName</strong></p>
                <p class="sub-greeting">You’re on your way to Cash Back at Target!</p>
                <img class="logo" src="img/logo-modal-target.png" />
                <p class="notice"><a href=""><strong>Click here</strong></a> if Target did not open correctly.<br>Cash Back normally posts to your PursePerks account 2-3 days after you complete your order.</p>
                <p class="transaction-id">Your transaction ID for this click is: <a href=""><strong>1d1de046f04240aa55f9ea5afe22e229</strong></a></p>
            </div>
            <div class="panel-footer"><img src="img/logo-panel.png" /></div>
        </div>
    </div>
<? // added to pperks_interstitialTrack.php ?>    

    <script src="/js/jquery-2.1.0.min.js"></script>
    <script src="/js/plugins/jquery.customSelect.min.js"></script>
    <script src="/js/plugins/jquery.cycle.all.js"></script>
    <script src="/js/bootstrap/bootstrap.min.js"></script>
    <script src="/js/purseperks/global.js"></script>
    <script src="/js/purseperks/inner.js"></script>
    
</body>
</html>