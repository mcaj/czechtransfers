 $(document).ready(function() {
    $('select[name="persons_count"]').val('1-4');
    $('select[name="direction"]').val('one_way');
    $('select[name="in_or_out"]').val('inside');
    $('select[name="in_pickup_dest"]').val('airport-center');

    $('.row_out_pickup').hide();
    $('.row_out_dest').hide();
    $('.row_departure').hide();    
    
    $('select[name="direction"]').change(function() {
        switch ($(this).val()) {
            case 'one_way':
                $('.row_departure').hide();
                break;
            case 'return':
                $('.row_departure').show();
                break;
        }
        recalculate();
    })
    
    $('select[name="in_or_out"]').change(function() {
        switch ($(this).val()) {
            case 'inside':
                $('.row_in_pickup_dest').show();
                $('.row_out_pickup').hide();
                $('.row_out_dest').hide();
                break;
            case 'outside':
                $('.row_in_pickup_dest').hide();
                $('.row_out_pickup').show();
                $('.row_out_dest').show();
                break;
        }
        recalculate();
    })

    $('select[name="in_pickup_dest"]').change( function() {recalculate();});
    $('select[name="out_dest"]').change( function() {recalculate();});
    $('select[name="persons_count"]').change( function() {recalculate();});

    var in4_airport_czk = 550;
    var in8_airport_czk = 850;
    var in4_airport_eur = 23;
    var in8_airport_eur = 36;

    var in4_depot_czk = 300;
    var in8_depot_czk = 450;
    var in4_depot_eur = 13;
    var in8_depot_eur = 19;

    var out4_brno_czk = 4200;
    var out8_brno_czk = 5280;
    var out4_brno_eur = 175;
    var out8_brno_eur = 220;

    var out4_budejovice_czk = 3000;
    var out8_budejovice_czk = 3840;
    var out4_budejovice_eur = 125;
    var out8_budejovice_eur = 160;

    var out4_krumlov_czk = 3360;
    var out8_krumlov_czk = 4200;
    var out4_krumlov_eur = 140;
    var out8_krumlov_eur = 175;

    var out4_vary_czk = 2040;
    var out8_vary_czk = 2640;
    var out4_vary_eur = 85;
    var out8_vary_eur = 110;

    var out4_kutnahora_czk = 1800;
    var out8_kutnahora_czk = 2400;
    var out4_kutnahora_eur = 75;
    var out8_kutnahora_eur = 100;

    var out4_plzen_czk = 1560;
    var out8_plzen_czk = 2040;
    var out4_plzen_eur = 65;
    var out8_plzen_eur = 85;

    function recalculate() {

        direction_multiplier = 1;
        switch ($('select[name="direction"]').val()) {
            case 'one_way':
                direction_multiplier = 1;
                break;
            case 'return':
                direction_multiplier = 2;
                break;
        }

        var persons_count = $('select[name="persons_count"]').val();

        switch ($('select[name="in_or_out"]').val()) {
            case 'inside':
                switch ($('select[name="in_pickup_dest"]').val()) {
                    case 'airport-center':
                    case 'center-airport':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(in4_airport_czk,in4_airport_eur);
                                break;
                            case '5-8':
                                setPrice(in8_airport_czk,in8_airport_eur);
                                break;
                        }
                        break;
                    case 'railway-center':
                    case 'center-railway':
                    case 'bus-center':
                    case 'center-bus':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(in4_depot_czk,in4_depot_eur);
                                break;
                            case '5-8':
                                setPrice(in8_depot_czk,in8_depot_eur);
                                break;
                        }
                        break;
                }

                break;
            case 'outside':

                switch ($('select[name="out_dest"]').val()) {
                    case 'brno':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(out4_brno_czk,out4_brno_eur);
                                break;
                            case '5-8':
                                setPrice(out8_brno_czk,out8_brno_eur);
                                break;
                        }
                        break;
                    case 'ceske-budejovice':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(out4_budejovice_czk,out4_budejovice_eur);
                                break;
                            case '5-8':
                                setPrice(out8_budejovice_czk,out8_budejovice_eur);
                                break;
                        }
                        break;
                    case 'cesky-krumlov':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(out4_krumlov_czk,out4_krumlov_eur);
                                break;
                            case '5-8':
                                setPrice(out8_krumlov_czk,out8_krumlov_eur);
                                break;
                        }
                        break;
                    case 'karlovy-vary':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(out4_vary_czk,out4_vary_eur);
                                break;
                            case '5-8':
                                setPrice(out8_vary_czk,out8_vary_eur);
                                break;
                        }
                        break;
                    case 'kutna-hora':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(out4_kutnahora_czk,out4_kutnahora_eur);
                                break;
                            case '5-8':
                                setPrice(out8_kutnahora_czk,out8_kutnahora_eur);
                                break;
                        }
                        break;
                    case 'plzen':
                        switch (persons_count) {
                            case '1-4':
                                setPrice(out4_plzen_czk,out4_plzen_eur);
                                break;
                            case '5-8':
                                setPrice(out8_plzen_czk,out8_plzen_eur);
                                break;
                        }
                        break;

                }

                break;
        }
    }

    function setPrice(priceCZK,priceEUR) {
        var final_price = direction_multiplier * priceCZK + ' CZK / ' + priceEUR + ' EUR';
        $('.row_price span').html(final_price);
        $('input[name="price"]').val(final_price)
    }

    recalculate();
 });