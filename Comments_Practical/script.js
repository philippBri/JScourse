var countComments = 0;

var likeCount = 0;

var msg = "Коментарий не должен быть пустым!"


var smileys = {
  ':)': '<img src="img/smileys/smile.png" border="0" alt="" />',
  ':-)': '<img src="img/smileys/smile3.png" border="0" alt="" />',
  ':D': '<img src="img/smileys/smile2.png" border="0" alt="" />',
  ':-(': '<img src="img/smileys/angry.png" border="0" alt="" />',
  ':-D': '<img src="img/smileys/smile2.png" border="0" alt="" />',
  'lol': '<img src="img/smileys/smile2.png" border="0" alt="" />',
  ':-|': '<img src="img/smileys/hz.png" border="0" alt="" />',
  ';-)': '<img src="img/smileys/lovesmile.png" border="0" alt="" />',
  ':*': '<img src="img/smileys/kiss.png" border="0" alt="" />',
  ';*': '<img src="img/smileys/kiss.png" border="0" alt="" />'
};


function createNewPost(argument) {
	var comment = document.getElementById("comment").value;
	comment === "" ? alert(msg) : addNewPost(comment);
};

function addNewPost(comment) {	

	comment = escapeHtml(comment);

	comment = replacURLbyHTML(comment);

	comment = smilyMe(comment);

	var name = document.getElementById("userName").value;

	var clonedNode = document.getElementById("postContainer").cloneNode(true)

	clonedNode.removeAttribute("hidden");

	setUserNameToComment(clonedNode, name);	
	
	setDateToComment(clonedNode);

	clonedNode.getElementsByClassName("post-description")[0].innerHTML = comment; 

	clonedNode.getElementsByClassName("likeCount")[0].id = "likeCount" + countComments;

	clonedNode.getElementsByClassName("fa fa-thumbs-up icon")[0].id = countComments;
	clonedNode.getElementsByClassName("fa fa-thumbs-down icon")[0].id = countComments;

	document.getElementById("CommentsArea").appendChild(clonedNode);

	clonedNode.getElementsByClassName("fa fa-thumbs-up icon")[0].addEventListener("click", function() {
    like();
  });
	clonedNode.getElementsByClassName("fa fa-thumbs-down icon")[0].addEventListener("click", function() {
    dislike();
  });
	document.getElementById("likeCount" + countComments).innerHTML = "0";
	countComments++;

	clearEnteredValue();
}

function setUserNameToComment(clonedNode, name) {
	if (name === "") {
		clonedNode.getElementsByClassName("title h5")[0].innerHTML = "Гость";
	} else {
		clonedNode.getElementsByClassName("title h5")[0].innerHTML = name;
	}
}

function setDateToComment(clonedNode) {
	var date = new Date();
	clonedNode.getElementsByClassName("text-muted time")[0].innerHTML = "оставил(а) комментарий " + date.toLocaleString("ru") + ".";
}

function like() {
	likeDislikeCount(true);
}

function dislike() {
	likeDislikeCount(false);
}

function likeDislikeCount(isLike) {
	var index = parseInt(event.currentTarget.id);
	var likeCountElement = document.getElementById("likeCount" + index);
	var likeCountValue = parseInt(likeCountElement.text);
	isLike ? likeCountValue++ : likeCountValue--;
	likeCountElement.innerHTML = likeCountValue > 0 ? "+" + likeCountValue : likeCountValue;
}


function escapeHtml(comment) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return comment.replace(/[&<>"']/g, function(m) { return map[m]; });
};


function replacURLbyHTML(comment) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    return comment.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    });
};

function smilyMe(comment) {
  return comment.replace(/(\:\)|\:-\)|\:D|\:-D|\blol\b|\:-\||\:-\(|\;-\)|\;\*|\:\*)/g, function(all) {
    return smileys[all] || all;
  });
}

function clearEnteredValue() {
	document.getElementById("comment").value = "";
	document.getElementById("userName").value = "";
}


