var ref = new Firebase("https://hacker-news.firebaseio.com/v0");
var topStories;
ref.child("/topstories").once("value", function (snapshot) {
	var topStories =  snapshot.val();
	for (var i = 0; i < topStories.length; i++) {
		$("#topStories").append("<div id=" + topStories[i] + ">" + displayItem(topStories[i]) + "</div>");
	}
});

/*
ref.child("/newstories").once("value", function (snapshot) {
	document.getElementById('newStories').innerHTML = snapshot.val();
});
ref.child("/askstories").once("value", function (snapshot) {
	document.getElementById('askStories').innerHTML = snapshot.val();
});
ref.child("/showstories").once("value", function (snapshot) {
	document.getElementById('showStories').innerHTML = snapshot.val();
});
ref.child("/jobstories").once("value", function (snapshot) {
	document.getElementById('jobStories').innerHTML = snapshot.val();
});
ref.child("/maxitem").once("value", function (snapshot) {
	document.getElementById('maxItem').innerHTML = snapshot.val();
});
*/
// if a story has a null url then it is self-text.  the item.text should be pulled
var displayItem = function (id) {
	ref.child("/item/" + id).once("value", function (snapshot) {
		var item = snapshot.val();
		if (item.url != "") {
			document.getElementById(id).innerHTML = '<a href="' + item.url + '">' + item.title + '</a>' + ' by ' + item.by + ' (' + item.score + ')';
		} else {
			document.getElementById(id).innerHTML = item.title + ' by ' + item.by + ' (' + item.score + ')' + '<p>' + item.text;
		}

	});
}


