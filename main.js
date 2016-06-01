
window.onload=function(){
// var i=0;
document.body.style.zoom=0.75;
// document.onkeyup=function(){
//     var IEKey = event.keyCode;
// 　　if (IEKey == 76) {
//     　　i++;
//     　　document.body.style.zoom=1+i/10;
// 　　}
// 　　if (IEKey == 83) {
//     　　i--;
//     　　document.body.style.zoom=1+i/10;
// 　　}
// 　　if (IEKey == 82) {
//     　　document.body.style.zoom=1;
//     　　i=1;
// 　　}
//
// }

$('#meishi').click(function(){
    $(".res").toggle();
    // document.body.style.zoom=1.2;
});

$('#binguan').click(function(){
    $(".hot").toggle();
});

$('#sob1').click(function(){
     document.body.style.zoom=1;
});
$('#sob2').click(function(){
     document.body.style.zoom=0.75;
});


}
