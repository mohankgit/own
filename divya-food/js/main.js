// Menu list
  function openNav() {
	document.getElementById("mySidenav").style.transform = "translateX(0)";
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.transform = "translateX(-100%)";
  }

// header fixed on scroll
  $(document).ready(function() {
	$(window).scroll(function() {
	  if ($(document).scrollTop() > 150) {
		$("#myHeader").addClass("sticky");
	  } else {
		$("#myHeader").removeClass("sticky");
	  }
	});
  });




   
      
   



