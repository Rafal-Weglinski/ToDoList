
// Check of specific todos by clicking

$("ul").on("click", "li", function(){
    $(this).toggleClass("check-off");
});

// Click on x to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        // In this case $(this) relates to parents
        $(this).remove()
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
    if (event.which === 13 ){
        // taking the text from input
        var newToDo= $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ newToDo + "</li>");
    }

});


