<template>

    <div class="col-4 mt-5 ms-1 card cardItem">

        <div class="row">
            <div class="col-6 ">
                <p class="ps-3 mt-4">You purpose plan<br><span class="fw-bold">Developer</span></p>
            </div>
            <div class="col-6 ps-3 mt-4 pe-5">
                <h2 class="ps-3 float-end">{{ amount + " ₺" }} <span class="money fw-normal">per year</span></h2>
            </div>
        </div>

        <div class="row">
            <div class="col-4  ps-4">
                <a> <img class="userCheck" src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" alt=""> 5
                    users</a>
            </div>

            <div class="col ">
                <a> <img class="userCheck" src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" alt="">
                    Dedicated Server</a>
            </div>


        </div>


        <div class="row mt-5 ps-1">
            <div class="input-group">
                <span class="input-group-text"> <font-awesome-icon icon="fa-solid fa-wallet" /> </span>
                <input v-model="money" type="text" class="form-control" placeholder="Amount"
                    aria-label="Recipient's username with two button addons">
                <!-- <button @click="this.$emit('money',this.money)" class="btn btn-sm btn-primary"></button> -->

                <button @click="increaseDollar(money)" class="btn btn-outline-primary" type="button"><font-awesome-icon icon="fa-solid fa-dollar-sign" /> </button>
                <button @click="increaseEuro(money)" class="btn btn-outline-primary" type="button"><font-awesome-icon icon="fa-solid fa-euro-sign" /></button>
                <button @click="increaseTl(money)" class="btn btn-outline-primary" type="button"><font-awesome-icon icon="fa-solid fa-turkish-lira-sign" /></button>
            </div>
        </div>


    </div>


</template>


<script>


export default {

    data() {

        return {

            money: null,

        }

    },

    inject:["increaseDollar","increaseEuro","increaseTl"],

    props: ["amount"],




}


</script>

