
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

                $('#distance').html(result['data'][0]['distance']);
                $('#geonameid').html(result['data'][0]['geonamesid']);
                $('#name').html(result['data'][0]['name']);
                
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
        }
    }); 


});