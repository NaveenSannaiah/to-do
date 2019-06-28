$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
$(this).parent().fadeOut(400,function(){
	$(this).remove();
});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
	var textTodo = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i> </span> " +textTodo + "</li>");
	}
});
$(".fa-plus-square").click(function(){
$("input[type='text'").fadeToggle();
});