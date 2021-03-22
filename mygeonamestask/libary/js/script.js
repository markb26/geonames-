//ocean
$('#btn').click(function() {

    $.ajax({
        url: "libary/php/geonames.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#oceanlat').val(),
            lng: $('#oceanlng').val()
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#distance').html(result['data']['ocean']['distance']);
                $('#geonameid').html(result['data']['ocean']['geonamesid']);
                $('#name').html(result['data']['ocean']['name']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); 

//elevation
});

$('#submit').click(function() {

    $.ajax({
        url: "libary/php/elevation.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lng: $('#elevationlng').val(),
            lat: $('#elevationlat').val()
            
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#elevation').html(result['data']['srtm1']);
                $('#lng').html(result['data']['lng']);
                $('#lat').html(result['data']['lat']);
               //$('#strm1').html(result['data']['srtm1']['srtm1']);
                //$('#lng').html(result['data']['srtm1']['lng']);
                //$('#lat').html(result['data']['srtm1']['lat']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); 


});
//Airport 
$('#btn2').click(function() { 

    $.ajax({
        url: "libary/php/weather.php",
        type: 'POST',
        dataType: 'json',
        data: {
        ICAO: $('#airport').val()
            
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

               $('#countryCode').html(result['data']['weatherObservation']['countryCode']);
               $('#temperature').html(result['data']['weatherObservation']['temperature']);
               $('#humidity').html(result['data']['weatherObservation']['humidity']);
         
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); 
});