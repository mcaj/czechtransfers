$(document).ready(function() {
    
    bind();
    init();

    var in4_airport_czk = 600;
    var in8_airport_czk = 900;
    var in12_airport_czk = 1500;
    var in16_airport_czk = 1800;
    var in4_airport_eur = 24;
    var in8_airport_eur = 37;
    var in12_airport_eur = 61;
    var in16_airport_eur = 74;

    var in4_depot_czk = 300;
    var in8_depot_czk = 500;
    var in12_depot_czk = 800;
    var in16_depot_czk = 1000;
    var in4_depot_eur = 13;
    var in8_depot_eur = 21;
    var in12_depot_eur = 34;
    var in16_depot_eur = 42;

    var out4_brno_czk = 3800;
    var out8_brno_czk = 4300;
    var out4_brno_eur = 158;
    var out8_brno_eur = 179;

    var out4_budejovice_czk = 3300;
    var out8_budejovice_czk = 3700;
    var out4_budejovice_eur = 138;
    var out8_budejovice_eur = 154;

    var out4_krumlov_czk = 3600;
    var out8_krumlov_czk = 4000;
    var out4_krumlov_eur = 150;
    var out8_krumlov_eur = 167;

    var out4_vary_czk = 2800;
    var out8_vary_czk = 3200;
    var out4_vary_eur = 117;
    var out8_vary_eur = 133;

    var out4_kutnahora_czk = 1900;
    var out8_kutnahora_czk = 2300;
    var out4_kutnahora_eur = 79;
    var out8_kutnahora_eur = 96;

    var out4_plzen_czk = 2000;
    var out8_plzen_czk = 2400;
    var out4_plzen_eur = 84;
    var out8_plzen_eur = 100;
    
    var out4_lazne_czk = 3200;
    var out8_lazne_czk = 3600;
    var out4_lazne_eur = 134;
    var out8_lazne_eur = 150;
    
    var out4_ostrava_czk = 6800;
    var out8_ostrava_czk = 7200;
    var out4_ostrava_eur = 279;
    var out8_ostrava_eur = 300;
    
    var out4_mlyn_czk = 3300;
    var out8_mlyn_czk = 3700;
    var out4_mlyn_eur = 138;
    var out8_mlyn_eur = 154;

    recalculate();

    function recalculate() {

        var inout = $('select[name="in_or_out"]').val();
        var arrival_date = $('input[name="arrival_date"]').val().substr(0,10);
        var departure_date = $('input[name="departure_date"]').val().substr(0,10);

        direction_multiplier = 1;
        switch ($('select[name="direction"]').val()) {
            case alias('one_way'):
                direction_multiplier = 1;
                break;
            case alias('return'):
                switch (inout) {
                    case alias('inside'):
                        direction_multiplier = 2;
                        break;
                    case alias('outside'):
                        if (arrival_date == departure_date) {
                            direction_multiplier = 1;
                        } else {
                            direction_multiplier = 2;
                        }
                        break;
                }
                break;
        }

        var persons_count = $('select[name="persons_count"]').val();

        switch (inout) {
            case alias('inside'):
                switch ($('select[name="in_pickup_dest"]').val()) {
                    case alias('airport-centre'):
                    case alias('centre-airport'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(in4_airport_czk,in4_airport_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(in8_airport_czk,in8_airport_eur);
                                break;
                            case '9': case '10': case '11': case '12':
                                setPrice(in12_airport_czk,in12_airport_eur);
                                break;
                            case '13': case '14': case '15': case '16':
                                setPrice(in16_airport_czk,in16_airport_eur);
                                break;
                        }
                        break;
                    case alias('railway_holesovice-centre'):
                    case alias('railway_hlnadrazi-centre'):
                    case alias('centre-railway_holesovice'):
                    case alias('centre-railway_hlnadrazi'):
                    case alias('bus_florenc-centre'):
                    case alias('bus_naknizeci-centre'):
                    case alias('centre-bus_florenc'):
                    case alias('centre-bus_naknizeci'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(in4_depot_czk,in4_depot_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(in8_depot_czk,in8_depot_eur);
                                break;
                            case '9': case '10': case '11': case '12':
                                setPrice(in12_depot_czk,in12_depot_eur);
                                break;
                            case '13': case '14': case '15': case '16':
                                setPrice(in16_depot_czk,in16_depot_eur);
                                break;
                        }
                        break;
                }

                break;
            case alias('outside'):

                if (persons_count > 8) {
                    $('.row_price span').html('See <a href="/prices" target="_blank">all prices</a>');
                    $('input[name="price"]').val('needs to be calculated');
                    break;
                }

                switch ($('select[name="out_dest"]').val()) {
                    case alias('brno'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_brno_czk,out4_brno_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_brno_czk,out8_brno_eur);
                                break;
                        }
                        break;
                    case alias('ceske-budejovice'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_budejovice_czk,out4_budejovice_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_budejovice_czk,out8_budejovice_eur);
                                break;
                        }
                        break;
                    case alias('cesky-krumlov'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_krumlov_czk,out4_krumlov_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_krumlov_czk,out8_krumlov_eur);
                                break;
                        }
                        break;
                    case alias('karlovy-vary'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_vary_czk,out4_vary_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_vary_czk,out8_vary_eur);
                                break;
                        }
                        break;
                    case alias('kutna-hora'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_kutnahora_czk,out4_kutnahora_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_kutnahora_czk,out8_kutnahora_eur);
                                break;
                        }
                        break;
                    case alias('plzen'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_plzen_czk,out4_plzen_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_plzen_czk,out8_plzen_eur);
                                break;
                        }
                        break;
		    case alias('lazne'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_lazne_czk,out4_lazne_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_lazne_czk,out8_lazne_eur);
                                break;
                        }
                        break;
		    case alias('ostrava'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_ostrava_czk,out4_ostrava_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_ostrava_czk,out8_ostrava_eur);
                                break;
                        }
                        break;
		    case alias('mlyn'):
                        switch (persons_count) {
                            case '1': case '2': case '3': case '4':
                                setPrice(out4_mlyn_czk,out4_mlyn_eur);
                                break;
                            case '5': case '6': case '7': case '8':
                                setPrice(out8_mlyn_czk,out8_mlyn_eur);
                                break;
                        }
                        break;
                    default:
                        $('.row_price span').html('See <a href="/prices" target="_blank">all prices</a>');
                        $('input[name="price"]').val('needs to be calculated');
                        break;
                }

                break;
        }
    }

    function setPrice(priceCZK,priceEUR) {
        var final_price = direction_multiplier * priceCZK + ' CZK / ' + direction_multiplier * priceEUR + ' EUR';
        $('.row_price span').html(final_price);
        $('input[name="price"]').val(final_price);
    }

    function alias(str) {
        switch (str) {
            case 'one_way':
                return 'One way';
            case 'return':
                return 'Return';
            case 'inside':
                return 'Inside Prague';
            case 'outside':
                return 'Outside Prague';

            case 'airport-centre':
                return 'Prague airport - centre';
            case 'centre-airport':
                return 'Centre - Prague airport';
            case 'railway_holesovice-centre':
                return 'Railway dpt. Holešovice - centre';
            case 'railway_hlnadrazi-centre':
                return 'Railway dpt. Hlavní nádraží - centre';
            case 'centre-railway_holesovice':
                return 'Centre - Railway dpt. Holešovice';
            case 'centre-railway_hlnadrazi':
                return 'Centre - Railway dpt. Hlavní nádraží';
            case 'bus_florenc-centre':
                return 'Bus dpt. Florenc - centre';
            case 'bus_naknizeci-centre':
                return 'Bus dpt. Na Knížecí - centre';
            case 'centre-bus_florenc':
                return 'Centre - Bus dpt. Florenc';
            case 'centre-bus_naknizeci':
                return 'Centre - Bus dpt. Na Knížecí';

            case 'airport':
                return 'Prague airport';
            case 'railway_holesovice':
                return 'Railway dpt. Holešovice';
            case 'railway_hlnadrazi':
                return 'Railway dpt. Hlavní nádraží';
            case 'bus_florenc':
                return 'Bus dpt. Florenc';
            case 'bus_naknizeci':
                return 'Bus dpt. Na Knížecí';

            case 'brno':
                return 'Brno';
            case 'ceske-budejovice':
                return 'České Budejovice';
            case 'cesky-krumlov':
                return 'Český Krumlov';
            case 'karlovy-vary':
                return 'Karlovy Vary';
            case 'kutna-hora':
                return 'Kutná Hora';
            case 'plzen':
                return 'Plzeň';
	    case 'lazne':
                return 'Mariánske Lazně';
	    case 'ostrava':
                return 'Ostrava';
	    case 'mlyn':
                return 'Špindlerův Mlýn';
        }
    }

    function bind() {
        $('input[name="arrival_date"]').datetimepicker({dateFormat: 'dd/mm/yy'});
        $('input[name="departure_date"]').datetimepicker({dateFormat: 'dd/mm/yy'});
        $('.row_out_dest .reset').click(function(){
            destinationSelect();
        });

        $('.row_out_pickup .reset').click(function(){
            outPickupSelect();
        });

        $('select[name="direction"]').change(function() {
            arrivalOrDeparture();
            recalculate();
        })

        $('select[name="in_or_out"]').change(function() {
            switch ($(this).val()) {
                case alias('inside'):
                    $('.row_in_pickup_dest').show();
                    $('.row_out_pickup').hide();
                    $('.row_out_dest').hide();
                    break;
                case alias('outside'):
                    $('.row_in_pickup_dest').hide();
                    $('.row_out_pickup').show();
                    $('.row_out_dest').show();
                    break;
            }
            recalculate();
        })

        $('select[name="in_pickup_dest"]').change(function() {            
            arrivalOrDeparture();
            recalculate();

            switch ($(this).val()) {
                case alias('airport-centre'):
                case alias('centre-airport'):
                    $('.row_luggage').show();
                    break;
                case alias('railway_holesovice-centre'):
                case alias('railway_hlnadrazi-centre'):
                case alias('centre-railway_holesovice'):
                case alias('centre-railway_hlnadrazi'):
                case alias('bus_florenc-centre'):
                case alias('bus_naknizeci-centre'):
                case alias('centre-bus_florenc'):
                case alias('centre-bus_naknizeci'):
                    $('.row_luggage').hide();
                    break;
            }
            
            switch ($(this).val()) {
                case alias('airport-centre'):
                case alias('railway_holesovice-centre'):
                case alias('railway_hlnadrazi-centre'):                
                    $('.row_flight_train_number').show();
                    break;
                case alias('bus_florenc-centre'):
                case alias('bus_naknizeci-centre'):
                case alias('centre-bus_florenc'):
                case alias('centre-bus_naknizeci'):
                case alias('centre-railway_holesovice'):
                case alias('centre-railway_hlnadrazi'):
                case alias('centre-airport'):
                    $('.row_flight_train_number').hide();
                    break;
            }

        });

        $('select[name="out_pickup"]').change(function() {
            switch ($(this).val()) {
                case alias('airport'):
                    $('.row_flight_train_number').show();
                    $('.row_luggage').show();
                    break;
                case alias('railway_holesovice'):
                    $('.row_flight_train_number').show();
                    $('.row_luggage').hide();
                    break;
                case alias('railway_hlnadrazi'):
                    $('.row_flight_train_number').show();
                    $('.row_luggage').hide();
                    break;
                case alias('bus_florenc'):
                    $('.row_flight_train_number').hide();
                    $('.row_luggage').hide();
                    break;
                case alias('bus_naknizeci'):
                    $('.row_flight_train_number').hide();
                    $('.row_luggage').hide();
                    break;
                case 'Other':
                    outPickupInput();
                    break;
            }
        });

        $('select[name="out_dest"]').change(function() {
            if ($(this).val()=='Other') {
                destinationInput();
            }
            recalculate();
        });
        $('select[name="persons_count"]').change( function() {
            recalculate();
        });
        $('input[name="arrival_date"]').change( function() {
            recalculate();
        });
        $('input[name="departure_date"]').change( function() {
            recalculate();
        });

        $('#book-form form').submit(function() {
            switch ($('select[name="in_pickup_dest"]').val()) {
                case alias('bus_florenc-centre'):
                case alias('bus_naknizeci-centre'):
                case alias('centre-bus_florenc'):
                case alias('centre-bus_naknizeci'):
                    $('input[name="flight_train_number"]').val('x');
                    break;
            }

            switch ($('select[name="out_pickup"]').val()) {
                case alias('bus_florenc'):
                    $('input[name="flight_train_number"]').val('x');
                    break;
                case alias('bus_naknizeci'):
                    $('input[name="flight_train_number"]').val('x');
                    break;
            }

            if ($('select[name="direction"]').val()==alias('one_way')) {
                switch ($('select[name="in_pickup_dest"]').val()) {
                    case alias('airport-centre'):
                    case alias('railway_holesovice-centre'):
                    case alias('railway_hlnadrazi-centre'):
                    case alias('bus_florenc-centre'):
                    case alias('bus_naknizeci-centre'):
                        $('input[name="departure_date"]').val('x');
                        break;
                    case alias('centre-airport'):
                    case alias('centre-railway_holesovice'):
                    case alias('centre-railway_hlnadrazi'):
                    case alias('centre-bus_florenc'):
                    case alias('centre-bus_naknizeci'):
                        $('input[name="arrival_date"]').val('x');
                        break;
                }
            }
        });
    }

    function init() {
        $('select[name="persons_count"]').val('1-4');
        $('select[name="direction"]').val(alias('one_way'));
        $('select[name="in_or_out"]').val(alias('inside'));
        $('select[name="in_pickup_dest"]').val(alias('airport-centre'));
        $('input[name="arrival_date"]').val('');
        $('input[name="departure_date"]').val('');

        $('.row_out_pickup').hide();
        $('.row_out_dest').hide();
        $('.row_out_dest .reset').hide();
        $('.row_out_pickup .reset').hide();
        $('.row_departure').hide();
        $('input[name="out_dest_x"]').hide();
        $('input[name="out_pickup_x"]').hide();
    }

    function destinationInput() {
        $('select[name="out_dest"]').hide();
        $('input[name="out_dest_x"]').show();
        $('.row_out_dest select').attr('name','out_dest_x');
        $('.row_out_dest input').attr('name','out_dest');
        $('.row_out_dest .reset').show();
    }

    function destinationSelect() {
        $('input[name="out_dest"]').hide();
        $('select[name="out_dest_x"]').show();
        $('.row_out_dest input').attr('name','out_dest_x');
        $('.row_out_dest select').attr('name','out_dest');
        $('.row_out_dest .reset').hide();
        $('select[name="out_dest"]').val('Brno');
        recalculate();
    }

    function outPickupInput() {
        $('select[name="out_pickup"]').hide();
        $('input[name="out_pickup_x"]').show();
        $('.row_out_pickup select').attr('name','out_pickup_x');
        $('.row_out_pickup input').attr('name','out_pickup');
        $('.row_out_pickup .reset').show();
        $('.row_luggage').hide();
    }

    function outPickupSelect() {
        $('input[name="out_pickup"]').hide();
        $('select[name="out_pickup_x"]').show();
        $('.row_out_pickup input').attr('name','out_pickup_x');
        $('.row_out_pickup select').attr('name','out_pickup');
        $('.row_out_pickup .reset').hide();
        $('select[name="out_pickup"]').val(alias('airport'));
        $('.row_flight_train_number').show();
        $('.row_luggage').show();
    }

    function arrivalOrDeparture() {
        if ($('select[name="direction"]').val()==alias('one_way')) {
            switch ($('select[name="in_pickup_dest"]').val()) {
                case alias('airport-centre'):
                case alias('railway_holesovice-centre'):
                case alias('railway_hlnadrazi-centre'):
                case alias('bus_florenc-centre'):
                case alias('bus_naknizeci-centre'):
                    $('.row_arrival').show();
                    $('.row_departure').hide();
                    break;
                case alias('centre-airport'):
                case alias('centre-railway_holesovice'):
                case alias('centre-railway_hlnadrazi'):
                case alias('centre-bus_florenc'):
                case alias('centre-bus_naknizeci'):
                    $('.row_arrival').hide();
                    $('.row_departure').show();
                    break;
            }
        } else {
            $('.row_arrival').show();
            $('.row_departure').show();
        }
    }
    
});
