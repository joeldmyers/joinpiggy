<?php 
/*	 
this is perksContainerMainPage

	<div id="inner">
    	<div class="container">	
*/
?>
<? // include the popular stores at the top, but we need to know
   // if they have an app installed - so pass that and login status to the view below
include 'all_popularstores.php'; 
    // including all_categorymenu, we need to know the path of the current page, or similar
	// see the comment in all_categorymenu.php for reference
include '/srv/www/cofund/view/all_categorymenu.php';
?>
		
<? include '/srv/www/cofund/view/all_shopdiv_start.php'; ?>
<? include '/srv/www/cofund/view/all_storeoffer_submenu.php';?>
<? include '/srv/www/cofund/view/all_items.php';?>
<? include '/srv/www/cofund/view/all_div_close.php'; ?>

<? /* below included in containermainpage
        </div>
    </div>
	*/
?>