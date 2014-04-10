$(document).ready( function(){

$("#press").click(function (){  

    get zipcode
	
	run ajax:
    $.ajax({
		type: 	"POST"  ,
		url: 	"http://www.myweather2.com/developer/weather.ashx?uac=sYHOjcdmh7&uref=8734264b-1988-4d9f-92a6-db3f987e7536",

		data: 	"name=value pairs for query string",		             //+ and &junk=+Math.random() 

		beforeSend: function(){ $("#B").html("Loading...\n<div class=\"spinner\"></div>") ;},                                   //SPINNERS: http://codepen.io/collection/HtAne

		error:function(xhr, status, error) {
			alert( "Error Message: \r\nNumeric code is: " + xhr.status + ... " \r\nError is undefined");
		},	 //TEST THIS WITH MISSING FILE 


		success: function(result){

			result=jQuery.parseJSON( result );    //IF OMTTED THIS DOES NOT DISPLAY CORRECTLY FROM HERE ON

			//FOLLOW json DOTTED NOTATION   ...   NOTE THAT:  curren_weather is an array!
			//USE online JSON editor for view - can copy from tools network respone in chrome 
			//watch out for extra characters like semi-colon at end of line
			var mw2 = "test.json.js"
			$.getJSON( url, function( data ) {
	  
			 var items = [];
			 //scans JSON object { a:1  , b:2  , c:3  }
			 //assumes flat object 
			 $.each( data, function( key, val ) {
				items.push( "<li id='" + key + "'>" + val + "</li>" );
			  });

			$("#B").append ( items.join( "" ) ) ; 

			}
		});   
	});
});
});