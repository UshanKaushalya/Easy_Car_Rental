let mainLink = "http://localhost:8080/Back_End_war/";



$.ajax({
    url : mainLink + "car",
    success : function(res){

        let cars = $(res.data);
        $('#tblAllCar').empty();

        console.log(cars);

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

            let car = `
            <div class="col-3" style="height: 64vh; box-shadow: 0px 1px 10px #C2C3C2; border-radius: 5px">

                    <img class="mt-2" src="../assest/images/customerrentpage/Car.jpeg" width="100%" style="border-radius: 5px">

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

            $('#cars').append(car);

        }

        bindCartBtn();

    }

});


function bindCartBtn() {
    $('.btnCart').click(function () {
        alert($(this).parent().children(":eq(3)").text())
    })
}



