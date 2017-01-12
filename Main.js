// JavaScript Document

function changeImage() {
	var img_el = document.getElementById("imgClickAndChange");

	if (img_el.src.match("Good_image.jpg")) {
		document.getElementById("imgClickAndChange").src = "Bad_image.jpg";
		document.getElementById("title").innerHTML = "5800-5808 South Central Avenue";
		document.getElementById("description").innerHTML = "6.0% CAP | 84,142 SF | FL, ID, KY, LA, SC, & TX";
		document.getElementById("terms").innerHTML = "Best & Final";
		document.getElementById("dd").style.display = "block";
		document.getElementById("escrow").style.display = "block";
		document.getElementById("emd").style.display = "block";
		document.getElementById("broker").style.display = "block";
		
	} else {
		document.getElementById("imgClickAndChange").src = "Good_image.jpg";
		document.getElementById("title").innerHTML = "Starbucks";
		document.getElementById("description").innerHTML = "7.45% CAP | 80,839 SF | Palm Beach Gardens, FL";
		document.getElementById("terms").innerHTML = "Proposed Terms";
		document.getElementById("dd").style.display = "none";
		document.getElementById("escrow").style.display = "none";
		document.getElementById("emd").style.display = "none";
		document.getElementById("broker").style.display = "none";
		/*document.getElementById("title").style. display = "block";
		document.getElementById("description").style. display = "block";
		document.getElementById("darkGradient").style. display = "block";
		document.getElementById("label").style. display = "block";*/
	}
}

function changeStar() {
	var star = document.getElementById("starClickandChange");

	if (star.src.match("grey_star.svg")) {
		document.getElementById("starClickandChange").src = "orange_star.svg";
	} else {
		document.getElementById("starClickandChange").src = "grey_star.svg";
	}
}

function changeMap() {
	var view = document.getElementById("imgClickAndChange");

	if (view.src.match("Good_image.jpg") || view.src.match("Bad_image.jpg")) {
		document.getElementById("imgClickAndChange").src = "Map.jpg";
		/*document.getElementById("title").style. display = "none";
		document.getElementById("description").style. display = "none";
		document.getElementById("darkGradient").style. display = "none";
		document.getElementById("label").style. display = "none";*/
		initMap();

	} else {
		document.getElementById('map').style.display = "none";
		document.getElementById("imgClickAndChange").src = "Good_image.jpg";
		document.getElementById("title").innerHTML = "Starbucks";
		document.getElementById("description").innerHTML = "7.45% CAP | 80,839 SF | Palm Beach Gardens, FL";
		document.getElementById("dd").style.display = "none";
		document.getElementById("escrow").style.display = "none";
		document.getElementById("emd").style.display = "none";
		document.getElementById("broker").style.display = "none";
		/* document.getElementById("title").style. display = "block";
		 document.getElementById("description").style. display = "block";
		 document.getElementById("darkGradient").style. display = "block";
		 document.getElementById("label").style. display = "block";*/
	}
}


function initMap() {

	var view = document.getElementById("imgClickAndChange");
	if (view.src.match("Map.jpg")) {

		document.getElementById('map').style.display = "block";
		var uluru = {
			lat: 33.9830991,
			lng: -118.4659939
		};
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: {
				lat: 33.9830991,
				lng: -118.4659939
			},
			disableDefaultUI: true
		});
		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});

	}
}


window.addEventListener('resize', function (event) {
	
	if (window.innerHeight < 900 && window.innerWidth > 1440) {

		document.getElementById("imgClickAndChange").style.marginTop = '10px';
	}
	if (window.innerHeight < 860 && window.innerWidth > 1440) {

		document.getElementById("imgClickAndChange").style.marginTop = '-25px';
	}
	if (window.innerHeight < 825 && window.innerWidth > 1440) {

		document.getElementById("imgClickAndChange").style.marginTop = '-65px';
	}
	if (window.innerHeight < 780 && window.innerWidth > 1440) {

		document.getElementById("imgClickAndChange").style.marginTop = '-95px';
	}
	if (window.innerHeight >= 900 && window.innerWidth > 1440) {

		document.getElementById("imgClickAndChange").style.marginTop = '55px';
	}
});

