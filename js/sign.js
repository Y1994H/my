$(function () {
   $(".Box-b").click(function () {
   	$("#Box").css("display","none");
   	$('#BOX').css("display","none");
   })
   $("#SR").click(function () {
   	$("#Box").css('display','block');
   	$("#BOX").css('display','block');
// 	$('#BOX').css("background","#e9e9e9");
    $('.Box-a1').css('z-index','999')
   })
})