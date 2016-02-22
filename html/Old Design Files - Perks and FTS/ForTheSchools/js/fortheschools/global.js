$(function(){
	/* Custom Dropdown */
	//$('#iama').customSelect();

	/* Tool Tips */
	//$('#navigation a').tipsy();

	/* Dropdown Menu for Account */
	//$('#navigation ul').dcMegaMenu();


	
    // Trigger Modal
    // $('#inter-signup-modal').modal({
    //     backdrop: 'static'
    // }).modal('show');

    // $('#signup-modal').modal({
    //     backdrop: 'static'
    // }).modal('show');

		

		$('button.navbar-toggle').on( "click", function() {
  		$('nav.navbar-collapse ul li.tohide').toggle('slow');
  		$('nav.navbar-collapse ul li.dropdown-hide').toggle();
});
		
});