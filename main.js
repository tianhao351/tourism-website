// jQuery.fn.Shake = function (shakenum , shakeDistance) {
// 	this.each(function () {
// 		var jSelf = $(this);
// 		jSelf.css({ position: 'absolute' });
// 		for (var x = 1; x <= shakenum; x++) {
// 			jSelf.animate({ left: (-shakeDistance) }, 50)
// 				.animate({ left: shakeDistance }, 50)
// 					.animate({ left: 0 }, 50);
// 			}
// 		});
// 		return this;
// 	}
//
//
// $(function () {
// 	$('#btn').click(function () {
// 		$(this).Shake(2, 10);
// 	});
// // });
var i=0;
document.onkeyup=function(){
    var IEKey = event.keyCode;
　　if (IEKey == 76) {
    　　i++;
    　　document.body.style.zoom=1+i/10;
　　}
　　if (IEKey == 83) {
    　　i--;
    　　document.body.style.zoom=1+i/10;
　　}
　　if (IEKey == 82) {
    　　document.body.style.zoom=1;
    　　i=1;
　　}

}
