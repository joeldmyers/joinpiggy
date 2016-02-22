$(function(){
    
    //Button to open Login
    $('#btn-login').on( "click", function(event) {
      $('article#login').show();
 
      return(false);
    });

    $('#close-login').on( "click", function(event) {
      $('article#login').hide();
 
      return(false);
    });

    $('#btn-login-x').on( "click", function(event) {
      $('article#signup').hide();
      $('article#login').show();
 
      return(false);
    });


    //Button to open Signup
    $('#btn-signup').on( "click", function(event) {
      $('article#signup').show();
 
      return(false);
    });

    $('#close-signup').on( "click", function(event) {
      $('article#signup').hide();
 
      return(false);
    });

    //Button to open Menu
    $('#btn-menu').on( "click", function(event) {
       

        if ($(this).hasClass("isDown") ) {
          //Move Scren In
          $("article#screen").animate({
            'marginRight' : "0px", 'marginLeft' : "0%"},"fast"
          );          
          $(this).removeClass("isDown");

          //Move Menu In
          $("article#menu").animate({
            'marginLeft' : "-100%"},"fast");

        } else {
          //Move Scren Out
          $("article#screen").animate({
            'marginLeft' : "80%"},"fast");   
          $(this).addClass("isDown");

          //Move Menu Out
          $("article#menu").animate({
            'marginLeft' : "100%"},"fast");
        }
 
      return(false);
    });


    //Button to open Menu-Right
    $('#btn-menu-right').on( "click", function(event) {
       

        if ($(this).hasClass("isDown") ) {
          //Move Screen In
          $("article#screen").animate({
            'marginRight' : "0px", 'marginLeft' : "0%"},"fast"
          );          
          $(this).removeClass("isDown");

          //Move Menu In
          $("article#menu-right").animate({
            'marginLeft' : "200%"},"fast");

        } else {
          //Move Screen Out
          $("article#screen").animate({
            'marginLeft' : "-80%"},"fast");   
          $(this).addClass("isDown");

          //Move Menu Out
          $("article#menu-right").animate({
            'marginLeft' : "120%"},"fast");
        }
 
      return(false);
    });






    //Button to open Store
    $('#store-bestbuy').on( "click", function(event) {
      $('article#activate').show();

      setTimeout(function() {
        window.location.href = "stores-overview.html";
      }, 1000);
 
      return(false);
    });

    //Close Store Overview
    $('#btn-store-over').on( "click", function(event) {
      window.location.href = "stores.html";
    });

    //Favorite a store
    $('#btn-favorite').on( "click", function(event) {
      $('article#modal').show(); 
      return(false);
    });

    //Close Modal
    $('#close-modal').on( "click", function(event) {
      $('article#modal').hide(); 
      return(false);
    });
    
    
});
