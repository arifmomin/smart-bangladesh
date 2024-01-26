$(document).ready(function() {
    $("#division").on("input", function() {
        if ($("#division").val() != "") {
            $.ajax({
                url: 'https://smartnagorik.com.bd/api/get_districts',
                crossDomain: true,
                method: 'post',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                  'division_id': $("#division").val()
                }),
                success: function(data) {
                    data.districts.forEach(e => {
                        $('#district').append($('<option>', {
                            value: e.district_id,
                            text: e.district_name
                        }));
                    });
                }
            });
        }
    });


    $("#district").on("input", function() {
        if ($("#district").val() != "") {
            $.ajax({
                url: 'https://smartnagorik.com.bd/api/frontend/get_thanas',
                crossDomain: true,
                method: 'post',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                  'district_id': $("#district").val()
                }),
                success: function(data) {
                    data.thanas.forEach(e => {
                        $('#thana').append($('<option>', {
                            value: e.thana_id,
                            text: e.thana_name
                        }));
                    });
                }
            });
        }
    });


    $("#thana").on("input", function() {
        if ($("#thana").val() != "") {
            $.ajax({
                url: 'https://smartnagorik.com.bd/api/frontend/get_unions',
                crossDomain: true,
                method: 'post',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                  'thana_id': $("#thana").val()
                }),
                success: function(data) {
                    data.unions.forEach(e => {
                        $('#unioun').append($('<option>', {
                            value: e.union_id,
                            text: e.union_name
                        }));
                    });
                }
            });
        }
    });
});