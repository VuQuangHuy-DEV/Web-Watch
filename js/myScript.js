$(document).ready(function() {
    $("#mnuMoTour").click(function() {
        $("#myModal").modal();
    });

    $("#today").html(new Date().toLocaleDateString());

    function ktMatour() {
        var matour = $("#txtMaTour").val();
        var regex = /^[A-Z]{3}-[A-Z]{3}-[0-9]{2}-[0-9]{4}$/;
        if (matour.trim() === '' || matour == null) {
            $("#tbMTour").html("Mã tour bắt buộc");
            return false;
        }

        if (!regex.test(matour)) {
            $("#tbMTour").html("Mã Tour theo mẫu: XXX-XXX-mm-yyyy");
            return false;
        }
        $("#tbMTour").html("*");
        return true;
    }

    function ktNgayKH() {
        var ngayKH = $("#txtNgayKH").val();
        if (ngayKH == '' || ngayKH == null) {
            $("#tbNgayKH").html("Phải chọn ngày khởi hành");
            return false;
        }

        var d1 = new Date(ngayKH);
        var d2 = new Date();
        d2.setDate(d2.getDate() + 30);

        if (d1 < d2) {
            $("#tbNgayKH").html("Ngày khởi hành phải sau ngày hiện tại 30 ngày ");
            return false;
        }
        $("#tbNgayKH").html("*");
        return true;
    }
    $("#txtNgayKH").blur(ktNgayKH);
    $("#txtMaTour").blur(ktMatour);

    var i = 1;

    $("#btnLuu").click(function() {
        var matour = $("#txtMaTour").val();
        var ngayKH = $("#txtNgayKH").val();

        if (!ktMatour() || !ktNgayKH())
            return false;

        var row = "<tr><td>" + i + "</td><td>" + matour + "</td><td>" + ngayKH + "</td></tr>";

        $("tbody").append(row);
        i++;
        $("#myModal").modal("hide");
    });

});