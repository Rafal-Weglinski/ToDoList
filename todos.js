
// Check of specific todos by clicking

$("li").click(function(){
    $(this).toggleClass("check-off");
});

// Click on x to delete todo

$("span").click(function(event){
    alert("clicked");
    event.stopPropagation();
});

