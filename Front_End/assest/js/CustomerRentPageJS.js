let mainLink = "http://localhost:8080/Back_End_war/";


$.ajax({
    url : mainLink + "car",
    success : function(res){

        let cars = $(res.data);
        $('#tblAllCar').empty();

        for(let i = 0; i < cars.length; i++){
            let carId = cars[i].carID;
            let brand = cars[i].brand;
            let color = cars[i].color;
            let reg = cars[i].regNo;
            let avl = cars[i].availability;
            let fuel = cars[i].fuelType;
            let wavier = cars[i].wavierPayment;
            let passenger = cars[i].passenger;
            let mil = cars[i].currentMileage;
            let transmissionType = cars[i].transmissionType;
            let price = cars[i].freeMileageDailyPrice;
            let frontImg = cars[i].frontImage;

            let car = `
            <div class="col-3" style="height: 65vh; box-shadow: 0px 1px 10px #C2C3C2; border-radius: 5px">

                    <img class="mt-2" src="../..${frontImg}" style="border-radius: 5px; width: 100%; height: 22vh">

                    <h1 class="mt-3" style="font-family: 'Fira Sans', sans-serif; font-weight: 500; font-size: 20px">${brand}</h1>

                    <img src="../assest/images/customerrentpage/Star.png" width="40%">
                    
                    <h1 style="font-family: 'Fira Sans', sans-serif; font-weight: 500; font-size: 1px">${carId}</h1>

                    <div class="mt-3" style="width: 100%; background-color: #C2C3C2; height: 1px"></div>


                    <div class="container mt-3">
                        <div class="row">
                            <div class="col-sm">
                                <img class="ms-3" src="../assest/images/customerrentpage/Persons.png" width="30%">
                                <h1 class="mt-1" style="font-family: 'Fira Sans', sans-serif; font-weight: 500; font-size: 10px; color: black">Passen - ${passenger}</h1>
                            </div>
                            <div class="col-sm">
                                <img class="ms-3" src="../assest/images/customerrentpage/Fuel.png" width="30%">
                                <h1 class="mt-1" style="font-family: 'Fira Sans', sans-serif; font-weight: 500; font-size: 10px; color: black">Fuel - ${fuel}</h1>
                            </div>
                            <div class="col-sm">
                                <img class="ms-3" src="../assest/images/customerrentpage/Gear.png" width="30%">
                                <h1 class="mt-1" style="font-family: 'Fira Sans', sans-serif; font-weight: 500; font-size: 10px; color: black">Trans - ${transmissionType}</h1>
                            </div>
                        </div>
                    </div>


                    <div class="container">
                        <div class="row mt-4">
                            <div class="col-sm" style="border-right: #C2C3C2 1px solid">
                                <h1 style="font-family: 'Fira Sans', sans-serif; font-weight: 300; font-size: 13px">Register Number</h1>
                                <h1 style="font-family: 'Fira Sans', sans-serif; font-weight: 700; font-size: 15px">${reg}</h1>
                            </div>
                            <div class="col-sm">
                                <h1 style="font-family: 'Fira Sans', sans-serif; font-weight: 300; font-size: 13px">Wavier Payment</h1>
                                <h1 style="font-family: 'Fira Sans', sans-serif; font-weight: 700; font-size: 15px">${wavier}</h1>
                            </div>
                        </div>
                    </div>



                    <div class="container mt-3" style="border-radius: 5px; background-color: #FFA633; text-align: center;font-family: 'Fira Sans', sans-serif; font-weight: 700; font-size: 20px; height: 4vh">Rs. ${price} per Day</div>

                    <button id="btnAddtoCart" type="button" class="btn btn-dark container mt-3 btnCart">Add to Cart</button>

                </div>
            `

            if(avl == "AVAILABLE"){
                $('#cars').append(car);
            }



        }

        $('.btnCart').click(function () {
            let carIdClicked = $(this).parent().children(":eq(3)").text();


            for (let k= 0; k < cars.length; k++){
                if(cars[k].carID == carIdClicked){
                    let carId = cars[k].carID;
                    let reg = cars[k].regNo;
                    let brand = cars[k].brand;
                    let transmissionType = cars[k].transmissionType;
                    let passenger = cars[k].passenger;
                    let fuel = cars[k].fuelType;
                    let wavier = cars[k].wavierPayment;
                    let price = cars[k].freeMileageDailyPrice;


                    let row =`<tr><td class="visually-hidden">${carId}</td><td>${brand}</td><td>${fuel}</td><td>${wavier}</td><td>${price}</td>
                                            <td><input type="file" class="form-control inputWavier" id="inputSlipImg"></td>  
                                         <td><input class="form-check-input form-check form-switch bg-warning" type="checkbox" id="flexSwitchCheckDefault"></td>
                                         <td><button type="button" class="btn btn-danger cartDeleteBtn">Remove</button></td>
                                        </tr>`;

                    $('#tblCart').append(row);

                    removeRow();

                }
            }

        })

    }

});


function removeRow() {
    $('.cartDeleteBtn').off('click');
    $('.cartDeleteBtn').click(function () {
        $(this).closest('tr').remove();
    });
}


$('#cartTableSec').hide();

$('#btnAddtoCart').click(function () {
    $('#cartTableSec').show();
    $('#carBowsing').hide()
    generateRentID();
});

$('#btnCancelOrder').click(function () {
    $('#cartTableSec').hide();
    $('#carBowsing').show()
    $('#tblCart').empty();
});


function bindCartBtn() {
    $('.btnCart').click(function () {
        let carId = $(this).parent().children(":eq(3)").text();
        return carId;
    })
}


let toUpdatePaymentId = [];

$('#btnPlaceOrder').click(function () {


    let rentID = $('#txtCusID').text();
    let customerID = "C00-001";
    let pickupDate = $('#inputPickUpdate').val();
    let pickupTime = $('#inputPickUpTime').val();
    let status = "PENDING";
    let declineReason = "NOT YET";

    let rentDetails = [];

    var count = 1;


    $("#tblCart > tr").each(function () {

        let carId = $(this).find('td').eq(0).text();

        $.ajax({
            url : mainLink + 'car?avlCarId=' + carId,
            method : "post",
            success:function(){
                console.log("Success")
            },
            error : function(){
                console.log("Error")
            }
        });

        let driverId = "D00-001"
        let paymeneId = rentID + "-P" + count;

        toUpdatePaymentId.push(paymeneId);

        let payment = {
            paymentID : rentID + "-P" + count,
            waiverDeductions : 0,
            waiverSlip : null,
            extraMileagePayment : 0
        }


        let rentDetail = {
            rentID:rentID,
            carID:carId,
            driverID:driverId,
            payment:payment
        }

        count++;

        rentDetails.push(rentDetail);

    });





    var username = localStorage.getItem("username");


    $.ajax({
        url: `http://localhost:8080/Back_End_war/customer?username=${username}`,
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let customer = resp.data;
            let cusId = customer.customerID;


            let rental = {
                rentID:rentID,
                customerID:cusId,
                pickupDate:pickupDate,
                pickupTime:pickupTime,
                status:"PENDING",
                declineReason:"NOT YET",
                fullPaymentStatus:"NOT YET",
                rentDetails:rentDetails
            }

            count = 0;

            $.ajax({
                url : mainLink + 'customerrent',
                method : "post",
                data : JSON.stringify(rental),
                contentType : 'application/json',
                success:function(){
                    console.log("Success");
                    $('#tblCart').empty();
                    alert("Renter Placed Successfully. Admin will give a Confirmation")
                },
                error : function(){
                    console.log("Error")
                }
            });



        }
    });


});




function generateRentID() {

    $("#txtCusID").text("R00-001");

    $.ajax({
        url: "http://localhost:8080/Back_End_war/customerrent/IdGenerate",
        method: "GET",
        contentType: "application/json",
        dataType: "json",
        success: function (resp) {
            let id = resp.value;

            if(id === null){

            }else{
                let tempId = parseInt(id.split("-")[1]);
                tempId = tempId + 1;
                if (tempId <= 9) {
                    $("#txtCusID").text("R00-00" + tempId);
                } else if (tempId <= 99) {
                    $("#txtCusID").text("R00-0" + tempId);
                } else {
                    $("#txtCusID").text("R00-" + tempId);
                }
            }

        },
        error: function (ob, statusText, error) {
        }
    });

}





