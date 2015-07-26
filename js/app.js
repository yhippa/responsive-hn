var ref = new Firebase("https://hacker-news.firebaseio.com/v0");
var topStories;
ref.child("/topstories").once("value", function(snapshot) {
	document.getElementById('topStories').innerHTML=snapshot.val();
});
ref.child("/newstories").once("value", function(snapshot) {
	document.getElementById('newStories').innerHTML=snapshot.val();
});
ref.child("/askstories").once("value", function(snapshot) {
	document.getElementById('askStories').innerHTML=snapshot.val();
});
ref.child("/showstories").once("value", function(snapshot) {
	document.getElementById('showStories').innerHTML=snapshot.val();
});
ref.child("/jobstories").once("value", function(snapshot) {
	document.getElementById('jobStories').innerHTML=snapshot.val();
}); 
ref.child("/maxitem").once("value", function(snapshot) {
	document.getElementById('9952138').innerHTML=snapshot.val();
});


