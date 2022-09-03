<template>

    <div class="col-4 mt-5 ms-1 card cardItem">

        <div class="row">
            <div class="col-6 ">
                <p class="ps-3 mt-4">You purpose plan<br><span class="fw-bold">Developer</span></p>
            </div>
            <div class="col-6 ps-3 mt-4 ">
                <h2 class="ps-3">{{ amount + " ₺" }} <span class="money fw-normal ">per year</span></h2>
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
                <span class="input-group-text"><i class="fa-solid fa-wallet"></i></span>
                <input v-model="money" type="text" class="form-control" placeholder="Amount"
                    aria-label="Recipient's username with two button addons">
                <!-- <button @click="this.$emit('money',this.money)" class="btn btn-sm btn-primary"></button> -->

                <button @click="this.$emit('dollar', money)" class="btn btn-outline-primary" type="button"><i
                        class="fa-solid fa-dollar-sign"></i></button>
                <button @click="this.$emit('euro', money)" class="btn btn-outline-primary" type="button"><i
                        class="fa-solid fa-euro-sign"></i></button>
                <button @click="this.$emit('tl', money)" class="btn btn-outline-primary" type="button"><i
                        class="fa-solid fa-turkish-lira-sign"></i></button>
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

    props: ["amount"],




}


</script>

