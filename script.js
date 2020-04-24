var pocet = 0;

console.log('Hello World.', pocet);

// const RSS_URL = `https://www.aktuality.sk/rss/`;

// fetch(RSS_URL)
//   .then(response => response.text())
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//   .then(data => console.log(data))

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"url":"https://www.sme.sk/rss-title"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://webp.itprof.sk:8000/fetchurl", requestOptions)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data))
  .catch(error => console.log('error', error)); 



console.log('Vypis pod fetchom.');


$.soap({
	url: 'http://pis.predmety.fiit.stuba.sk/pis/ws/GeoServices/Peaks?WSDL',
	method: 'searchByName',

	data: {
		name: 'tatko',
	},

	success: function (soapResponse) {
		console.log(soapResponse);
	},
	error: function (SOAPResponse) {
		console.log(SOAPResponse);
	}
});



// $(".team-template-text:contains('Alliance')").text("temp");
// $(".team-template-text:contains('Vikin.gg')").text("Alliance");
// $(".team-template-text:contains('temp')").text("Vikin.gg");

// $(".team-template-text:contains('Team Nigma')").text("temp");
// $(".team-template-text:contains('Chicken Fighters')").text("Team Star");
// $(".team-template-text:contains('temp')").text("Chicken Fighters");

// $(".team-template-text:contains('Team Secret')").text("Team Secshit");


// $('img[src="/commons/images/7/76/Chicken_Fighters_logo_std.png"]')
// .attr("src", "temp");

// $('img[src= "/commons/images/3/32/Nigma_logo_std.png"]')
// .attr("src", "/commons/images/7/76/Chicken_Fighters_logo_std.png");

// $('img[src="temp"]')
// .attr("src", "/commons/images/3/32/Nigma_logo_std.png");


// $('img[src="/commons/images/e/e5/ViKin.gg_logo_std.png"]')
// .attr("src", "temp");

// $('img[src= "/commons/images/6/6b/Alliancelogo2016_std.png"]')
// .attr("src", "/commons/images/e/e5/ViKin.gg_logo_std.png");

// $('img[src="temp"]')
// .attr("src", "/commons/images/6/6b/Alliancelogo2016_std.png");

// $('a[href="/dota2/Xibbe"]')
// .attr({
//   href: '/dota2/Gorgc',
//   title: 'Gorp'
// }).text('OG.Gorp');