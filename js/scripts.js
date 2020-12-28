function loadmeteo(ville) {
    var url2="https://www.prevision-meteo.ch/services/json/"+ville;

    $.ajax({
        url: url2,
        method: "GET",
        dataType: "json",
        success:function(monObjet2){
            //console.log(monObjet2);
            $("#lieu").html(monObjet2.city_info.name);
            $(".day h2").html(monObjet2.current_condition.condition);
            $(".day img").attr("src", "img/"+monObjet2.current_condition.condition_key+".png");
            $(".day .date").html(monObjet2.current_condition.date);
            $(".day .temperature").html(monObjet2.current_condition.tmp+"°C");

            $(".day1 .condition").html(monObjet2.fcst_day_1.condition);
            $(".day1 #imgjs").attr("src", "img/"+monObjet2.fcst_day_1.condition_key+".png");
            $(".day1 .date").html(monObjet2.fcst_day_1.day_long);
            $(".day1 .temperaturemax").html(monObjet2.fcst_day_1.tmax+"°C");
            $(".day1 .temperaturemin").html(monObjet2.fcst_day_1.tmin+"°C");

            $(".day2 .condition").html(monObjet2.fcst_day_2.condition);
            $(".day2 #imgjs").attr("src", "img/"+monObjet2.fcst_day_2.condition_key+".png");
            $(".day2 .date").html(monObjet2.fcst_day_2.day_long);
            $(".day2 .temperaturemax").html(monObjet2.fcst_day_2.tmax+"°C");
            $(".day2 .temperaturemin").html(monObjet2.fcst_day_2.tmin+"°C");

            $(".day3 .condition").html(monObjet2.fcst_day_3.condition);
            $(".day3 #imgjs").attr("src", "img/"+monObjet2.fcst_day_0.condition_key+".png");
            $(".day3 .date").html(monObjet2.fcst_day_3.day_long);
            $(".day3 .temperaturemax").html(monObjet2.fcst_day_3.tmax+"°C");
            $(".day3 .temperaturemin").html(monObjet2.fcst_day_3.tmin+"°C");

            $(".day4 .condition").html(monObjet2.fcst_day_4.condition);
            $(".day4 #imgjs").attr("src", "img/"+monObjet2.fcst_day_4.condition_key+".png");
            $(".day4 .date").html(monObjet2.fcst_day_4.day_long);
            $(".day4 .temperaturemax").html(monObjet2.fcst_day_4.tmax+"°C");
            $(".day4 .temperaturemin").html(monObjet2.fcst_day_4.tmin+"°C");

        }//success2
    }); //ajax2
}



navigator.geolocation.getCurrentPosition(function(position){

    // console.log(position);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    // console.log("lat: "+lat+" - lng : "+lng);

    var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.ecba86226ddf0969e4c6151ae954d9c2&format=json&lat="+lat+"&lon="+lng;

    $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        success:function(monObjet){
            var ville = monObjet.address.town;
            console.log(ville);

            loadmeteo(ville);
            
            
        } //success
    }); //ajax

}); //geolocalisation


$("#go").click(function(){
    var ville = $("#ville").val();
    //console.log(ville);
    loadmeteo(ville);
});


$("#refresh").click(function(){
    navigator.geolocation.getCurrentPosition(function(position){

        // console.log(position);
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
    
        // console.log("lat: "+lat+" - lng : "+lng);
    
        var url = "https://us1.locationiq.com/v1/reverse.php?key=pk.ecba86226ddf0969e4c6151ae954d9c2&format=json&lat="+lat+"&lon="+lng;
    
        $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            success:function(monObjet){
                var ville = monObjet.address.town;
                console.log(ville);
    
                loadmeteo(ville);
                
                
            } //success
        }); //ajax
    
    }); //geolocalisation
});

