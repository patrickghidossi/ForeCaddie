$(document).ready(function(){
		var quoteSource=[			
			{
				quote: "Golf is deceptively simple and endlessly complicated.",
				name:"Arnold Palmer"
		    },
		    {
		    	quote: "Confidence in golf means being able to concentrate on the problem at hand with no outside interference.",
		    	name: "Tom Watson"
		    },
		    {
		    	quote: "It was cool for a couple of weeks, but how much bad golf can you play?",
		    	name: "John Goodman"
		    },
		    {
		    	quote: "There is no such thing as natural touch. Touch is something you create by hitting millions of golf balls.",
		    	name: "Lee Trevino"
		    },
		    {
		    	quote: "The only time my prayers are never answered is on the golf course.",
		    	name: "Billy Graham"
		    },
		    {
		    	quote: "Golf is a game, and games are meant to be enjoyed.",
		    	name: "Raymond Floyd"
		    },
		    {
		    	quote: "Golf is a matter of confidence. If you think you cannot do it, there is no chance you will.",
		    	name: "Henry Cotton"
		    },
		    {
		    	quote: "Golf is supposed to be fun, but I don't think anything is fun if you're not doing it reasonably well.",
		    	name: "Fred Couples"
		    },
		    {
		    	quote: "Golf is evolving, every day, every shot.",
		    	name: "Tiger Woods"
		    },
		    {
		    	quote: "If you watch a game, it's fun. If you play it, it's recreation. If you work at it, it's golf.",
		    	name: "Bob Hope"
		    },
		    {
		    	quote: "The secret of golf is to turn three shots into two.",
		    	name: "Bobby Jones"
		    },
		    {
				quote: "As you walk down the fairway of life you must smell the roses, for you only get to play one round.",
				name: "Ben Hogan"
			},
			{
				quote:"Golf is a science, the study of a lifetime, in which you can exhaust yourself but never your subject.",
				name: "David Forgan"
			},
			{
				quote: "I have found the game to be, in all factualness, a universal language wherever I traveled at home or abroad.",
				name: "Ben Hogan"
			},
			{
				quote:"The most important shot in golf is the next one.",
				name: "Ben Hogan"
			}
		  ];
			//Define where quotes go
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();

			//Get a new random number to attach to a quote and set limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);

			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
				var newQuoteText = quoteSource[randomNumber].quote;
				var newQuoteGenius = quoteSource[randomNumber].name;
					console.log(newQuoteText,newQuoteGenius);
     			var timeAnimation = 500;
    			var quoteContainer = $('#quoteContainer');

     			//Fade out animation
    			quoteContainer.fadeOut(timeAnimation, function(){
        			quoteContainer.html('');
					quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        			//Fade in animation
      	 		 	quoteContainer.fadeIn(timeAnimation);
   		   });  
			
			break;
		}
});

//Same functionality but on button click

$(document).ready(function() {
		 	var quoteSource=[			
			{
				quote: "Golf is deceptively simple and endlessly complicated.",
				name:"Arnold Palmer"
		    },
		    {
		    	quote: "Confidence in golf means being able to concentrate on the problem at hand with no outside interference.",
		    	name: "Tom Watson"
		    },
		    {
		    	quote: "It was cool for a couple of weeks, but how much bad golf can you play?",
		    	name: "John Goodman"
		    },
		    {
		    	quote: "There is no such thing as natural touch. Touch is something you create by hitting millions of golf balls.",
		    	name: "Lee Trevino"
		    },
		    {
		    	quote: "The only time my prayers are never answered is on the golf course.",
		    	name: "Billy Graham"
		    },
		    {
		    	quote: "Golf is a game, and games are meant to be enjoyed.",
		    	name: "Raymond Floyd"
		    },
		    {
		    	quote: "Golf is a matter of confidence. If you think you cannot do it, there is no chance you will.",
		    	name: "Henry Cotton"
		    },
		    {
		    	quote: "Golf is supposed to be fun, but I don't think anything is fun if you're not doing it reasonably well.",
		    	name: "Fred Couples"
		    },
		    {
		    	quote: "Golf is evolving, every day, every shot.",
		    	name: "Tiger Woods"
		    },
		    {
		    	quote: "If you watch a game, it's fun. If you play it, it's recreation. If you work at it, it's golf.",
		    	name: "Bob Hope"
		    },
		    {
		    	quote: "The secret of golf is to turn three shots into two.",
		    	name: "Bobby Jones"
		    },
			{
				quote: "As you walk down the fairway of life you must smell the roses, for you only get to play one round.",
				name: "Ben Hogan"
			},
			{
				quote:"Golf is a science, the study of a lifetime, in which you can exhaust yourself but never your subject.",
				name: "David Forgan"
			},
			{
				quote: "I have found the game to be, in all factualness, a universal language wherever I traveled at home or abroad.",
				name: "Ben Hogan"
			},
			{
				quote:"The most important shot in golf is the next one.",
				name: "Ben Hogan"
			}
		  ];

		  	$('#quoteButton').click(function(evt){
			//Define where quotes go
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();

			//Get a new random number to attach to a quote and set limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);

			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
				var newQuoteText = quoteSource[randomNumber].quote;
				var newQuoteGenius = quoteSource[randomNumber].name;
					console.log(newQuoteText,newQuoteGenius);
     			var timeAnimation = 500;
    			var quoteContainer = $('#quoteContainer');

     			//Fade out animation
    			quoteContainer.fadeOut(timeAnimation, function(){
        			quoteContainer.html('');
					quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        			//Fade in animation
      	 		 	quoteContainer.fadeIn(timeAnimation);
   		   });  
			
			break;
		}
	});
});

