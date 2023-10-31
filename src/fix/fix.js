/*
// html-5-drag-and-drop-not-working-on-mobile-screen
// https://stackoverflow.com/questions/52554613/html-5-drag-and-drop-not-working-on-mobile-screen
// get The element on which to attach the event 
var btn = document.querySelector('.btn');

// attaching each event listener
btn.addEventListener('touchstart', function(){
	console.log('btn touched');
})
btn.addEventListener('touchend', function(){
	console.log('btn leaved');
})
btn.addEventListener('touchmove', function(){
	console.log('btn leaved');
})
btn.addEventListener('touchleave', function(){
	console.log('btn moving end');
})
btn.addEventListener('touchcancel', function(){
	console.log('btn moving cancel');
})
*/