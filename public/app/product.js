
var validator = $("#form").validate({
    ignore: ".ignore",
    rules: {
        'product_name': {
            required: true,
        },
        'product_price': {
            required: true,
        },
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid').addClass('is-valid');
    }
});

function add_data() {
    $(".modal-title").text("Add Product");
    $('#form').attr('action', '/product/store');
    // $("#form").validate().resetForm();
    // $("input").removeClass("is-invalid");
    // $('input[type=text]').val('');
    // $('input[name=locaion_id]').addClass('ignore').attr('readonly', true);
}

function edit_data(id) {
    $(".modal-title").text("Edit Product");
    $('#form').attr('action', '/product/update');
    $.ajax({
        type: "POST",
        url: "/product/edit",
        data: {
            id: id
        },
        dataType: "json",
        success: function (response) {
            $('input[name=id]').val(response[0].product_id);
            $('input[name=product_name]').val(response[0].product_name);
            $('input[name=product_price]').val(response[0].product_price);
        }
    });
}

function delete_data(id) {
    swal({
        title: 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่',
        text: "",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                type: "POST",
                url: "/product/destroy",
                data: {
                    id: id
                },
                success: function (response) {
                    if (response.status == 'success') {
                        location.reload();
                    }
                }
            });
        }
    });
}