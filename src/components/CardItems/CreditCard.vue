<template>

    <div class="col ms-1 mt-5 card cardItem">

        <div class="row">

            <div class="col-8 mt-3 ms-4">
                <p>Payment methods</p>
            </div>

            <div class="col mt-3">
                <button class="btn btn-sm fw-bold float-end editBtn">Edit</button>
            </div>

        </div>



        <div class="row">
            <div class="col-4 ms-2">
                <img class="creditCard" src="https://img.cppng.com/download/2020-06/25598-5-credit-card-image.png">
            </div>
            <div class="col">
                <p class="cardInfo">Visa: <span class="bold"> 2345 </span></p>
                <p class="cardInfo2">Exp. date: <span class="bold"> 10/25 </span></p>
            </div>
        </div>
        <div class="row mt-1">

            <div class="col-4 ms-2">
                <img class="creditCard"
                    src="https://www.vhv.rs/dpng/d/74-740796_example-of-debit-card-number-hd-png-download.png">
            </div>
            <div class="col">
                <p class="cardInfo">Mastercard: <span class="bold"> 4253 </span></p>
                <p class="cardInfo2">Exp. date: <span class="bold"> 12/24 </span></p>
            </div>
        </div>

        <div class="row">

            <button class=" w-75 m-auto btn btn-sm btn-primary mb-2 borderBtn">Update Payment Method</button>

        </div>



    </div>



</template>