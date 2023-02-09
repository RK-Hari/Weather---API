function displayresult()
{
    var city=document.getElementById("city").value;
    var apikey='fd94b728d480daf2fd2dc5ecb42c9660';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apikey+'&units=metric')
    .then(response=>response.json())
    .then (data => 
    {
        var t= data['main']['temp']
        var u= data['main']['humidity']
        var v= data['main']['temp_max']
        document.getElementById("output").innerHTML=t;
        document.getElementById("humidity").innerHTML=u;
        document.getElementById("tempmax").innerHTML=v;
    })
}
