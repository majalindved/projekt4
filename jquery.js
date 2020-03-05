// Add active class to the current button (highlight it)

$(document).ready(function(){
$('button').click(function(){
$('button').removeClass("active");
$(this).addClass("active");
});
});
