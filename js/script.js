$("document").ready(function(){
    $(".project").click(function(){
        $(".myresume").hide()
        $(".myabout").hide()
        $(".mywork").fadeIn();
    });

    $(".resume").click(function(){
        $(".mywork").hide()
        $(".myabout").hide()
        $(".myresume").fadeIn();
    });

    $(".about").click(function(){
	$(".myresume").hide()
        $(".mywork").hide()
        $(".myabout").fadeIn();
      
    });
});
