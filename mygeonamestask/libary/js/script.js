
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

               $('#elevation').html(result['data']['srtm1']['elevation']);
                $('#elelng').html(result['data']['srtm1']['longitude']);
                $('#elelat').html(result['data']['srtm1']['latitude']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); 


});