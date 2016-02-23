$(document).foundation();


	var quotes = ["mac books are for posers", "to get what you want you must deserve what " +
	"you want the world is not yet a crazy enough place to reward a bunch of undeserving people - Charlie Munger"
	, "The world is mine - scarface", "Leave the gun. Take the cannoli.","Remember those posters that said", "Today is the first day of the rest of your life? Well, that's true of every day but one - the day you die",
	"It's a great thing when you realize you still have the ability to surprise yourself","The things you own end up owning you.",
	"Listen up, maggots. You are not special. You are not a beautiful or unique snowflake. You're the same decaying organic matter as everything else.","Bond. James Bond.","Carpe diem. Seize the day, boys. Make your lives extraordinary.",
	"Get busy living, or get busy dying.","I ate his liver with some fava beans and a nice chianti", "I ate his liver with some fava beans and a nice chianti", "Everyone has a plan until they get punched in the mouth"
	];

function getQuote() {
	var num = quotes[Math.floor(Math.random()*quotes.length)];
    generateQuote(num);
}

function generateQuote(num){
	$("#quoteGenerator").empty();
	$("#quoteGenerator").append(num);

var strLink = "http://twitter.com/home/?status=" + num;
document.getElementById("tweetThislink").setAttribute("href",strLink);
}



