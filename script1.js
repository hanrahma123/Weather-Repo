//var key = 0d29e62fc41577ff22f0c0651890c419;
var City;

var titlecolor = $('h1');

    titlecolor.addClass('on');

var newtext = document.getElementById('subtitle');
//newtext.className = 'on' ;
var butt = $('#but');
//butt.hide();
//butt.fadeIn(700);
//butt.fadeOut(700);

var xhr = new XMLHttpRequest();
//xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Dublin&appid=0d29e62fc41577ff22f0c0651890c419', true);
//xhr.send(null);

butt.on('click', function(e){
    e.preventDefault();
    City = document.getElementById('City').value;
    console.log("city is:" + City);
    xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=' + City + '&appid=0d29e62fc41577ff22f0c0651890c419', true);
    xhr.send(null);
    //butt.fadeOut(500);
    // butt.css({
    //     'visibility': 'hidden'}
    //     );
    });
//$('p').text("Unfortunately Server Request has failed..");


xhr.onload= function(){
    if(xhr.status === 200){
        //parse
        $('p').text("success");

        responseObj = JSON.parse(xhr.responseText);
        $('h3').text('Info for ' + responseObj.name); 
         var response = "co-ord: " + responseObj.coord;
         response +=  "</br> weather: " ;
         response +=   "</br>    id:" +responseObj.weather[0].id;
         response +=   "</br>   main:"+responseObj.weather[0].main;
         response +=   "</br>   description:"+responseObj.weather[0].description;
         response +=   "</br>   icon:"+responseObj.weather[0].icon;
         response +=  "</br> base: " + responseObj.base;
         response +=  "</br> main.temp (farenheit): " + responseObj.main.temp;

         
         response +=  "</br> visibility: " + responseObj.visibility;
         response +=  "</br> wind: " + responseObj.wind;
         response +=  "</br> clouds: " + responseObj.clouds;
         response +=  "</br> dt: " + responseObj.dt;
         response +=  "</br> sys: " + responseObj.sys;
         response +=  "</br> timezone: " + responseObj.timezone;
         
        // response +=  "</br> list[21].main.temp: " + responseObj.list[21].main.temp;
        // response += "</br> response.list.length: " +responseObj.list.length;
        //$('p').text(xhr.responseText);
        $('p').html(response);
    }
    else{ 
        $('p').text("Unfortunately Server Request has failed..");

    }
}