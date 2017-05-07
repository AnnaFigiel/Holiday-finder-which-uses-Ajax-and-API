$(function() {

    var $selectPl = $("select#selected-pl");
    var $h1Pl = $("h1#holiday-pl");
    var $selectDe = $("select#selected-de");
    var $h1De = $("h1#holiday-de");
    var $selectFr = $("select#selected-fr");
    var $h1Fr = $("h1#holiday-fr");
    
    
    var holidayUrl = 'https://holidayapi.com/v1/holidays';
    
                $.ajax({
                        url: holidayUrl,
                        dataType: 'json',
                        data: {
                            key: 'e135ca0f-d55e-44f7-9eab-5808a5d1fb2b',
                            country: "PL",
                            year: 2016
                        },
                        type: "GET"
                }).done(function(apiResult){ 
                    $selectPl.append($('<option>--wybierz datę--</option>'));
                    
                    $.each(apiResult.holidays, function(dateKey, dateObj) {

                        var $option = $("<option>", {
                            value: dateObj[0].name
                        }).text(dateKey);
                        $selectPl.append($option);
                    });
                    
                    $selectPl.change(function() {
                            
                    $h1Pl.text($(this).val());
                        
                    });   
                    
                }).fail(function(error) {
                    console.log(error);
                });


                $.ajax({
                        url: holidayUrl,
                        dataType: 'json',
                        data: {
                            key: 'e135ca0f-d55e-44f7-9eab-5808a5d1fb2b',
                            country: "DE",
                            year: 2016
                        },
                        type: "GET"
                }).done(function(apiResult){ 
                    $selectDe.append($('<option>--wybierz datę--</option>'));
                    
                    $.each(apiResult.holidays, function(dateKey, dateObj) {

                        var $option = $("<option>", {
                            value: dateObj[0].name
                        }).text(dateKey);
                        $selectDe.append($option);
                    });
                    
                    $selectDe.change(function() {
                            
                    $h1De.text($(this).val());
                        
                    });   
                    
                }).fail(function(error) {
                    console.log(error);
                });
    
                
                $.ajax({
                        url: holidayUrl,
                        dataType: 'json',
                        data: {
                            key: 'e135ca0f-d55e-44f7-9eab-5808a5d1fb2b',
                            country: "Fr",
                            year: 2016
                        },
                        type: "GET"
                }).done(function(apiResult){ 
                    $selectFr.append($('<option>--wybierz datę--</option>'));
                    
                    $.each(apiResult.holidays, function(dateKey, dateObj) {

                        var $option = $("<option>", {
                            value: dateObj[0].name
                        }).text(dateKey);
                        $selectFr.append($option);
                    });
                    
                    $selectFr.change(function() {
                            
                    $h1Fr.text($(this).val());
                        
                    });   
                    
                }).fail(function(error) {
                    console.log(error);
                });  
    
});
