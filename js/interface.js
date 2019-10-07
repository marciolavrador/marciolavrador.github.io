$(document).ready(function() {



$(".buttom-interface-initial").click(function(e) {

  var blockContainer = $(document).find($(".blocks-container"))[0];
  $(blockContainer).removeClass();
  $(blockContainer).addClass("blocks-container");
  $(blockContainer).addClass("initial");

});


$(".buttom-interface-expanded").click(function(e) {
  
 var blockContainer = $(document).find($(".blocks-container"))[0];
  $(blockContainer).removeClass();
  $(blockContainer).addClass("blocks-container");
  $(blockContainer).addClass("expanded");
  $(document).find($(".block")).addClass('slideToContract');
   
});

$(".buttom-interface-contracted").click(function(e) {
  
 var blockContainer = $(document).find($(".blocks-container"))[0];
  $(blockContainer).removeClass();
  $(blockContainer).addClass("blocks-container");
  $(blockContainer).addClass("contracted");
  $(document).find($(".block")).addClass('slideToContract');
   
});



//Initial
 var blockContainer = $(document).find($(".blocks-container"))[0];
  $(blockContainer).removeClass();
  $(blockContainer).addClass("blocks-container");
  $(blockContainer).addClass("expanded");
   

});