<template>


    <div class="d-flex justify-content-center">

        <div class="vertical-center">
            <form class="card p-5 ">
                
                <div class="form-outline mb-4">
                    <label class="form-label fw-bold" for="fullname">Full Name</label>
                    <input v-model="userData.fullname" type="text" id="fullname" class="form-control"
                        autocomplete="off" />
                </div>

                <div class="form-outline mb-4">
                    <label class="form-label fw-bold" for="username">Username</label>
                    <input v-model="userData.username" type="text" id="username" class="form-control"
                        autocomplete="off" />
                </div>

                
                <div class="form-outline mb-4">
                    <label class="form-label fw-bold" for="password">Password</label>
                    <input v-model="userData.password" type="password" id="password" class="form-control" />
                </div>


                <button @click="onRegister" type="submit" class="btn btn-primary btn-block">Register</button>

                <div class="pt-3 ">
                    I have an account, <router-link class="text-decoration-none fw-bold" :to="{name:'LoginPage'}">Login!
                    </router-link>
                </div>
            </form>

        </div>

    </div>

</template>




<script>

import CryptoJs from "crypto-js"
import { mapGetters } from "vuex"

export default {


    data() {
        return {
            userData: {

                fullname: "",
                username: "",
                password: ""


            }
        }
    },


    methods: {

        onRegister() {

            const user = {

                ...this.userData
            }
            user.password = CryptoJs.HmacSHA1(user.password, this.getSaltKey).toString()


            this.$axios.get(`http://localhost:3000/users?username=${user.username}`).then(get_response => {

                if (get_response?.data?.length > 0) {
                    alert("Böyle bir kullanıcı mevcut")
                } else {

                    this.$axios.post("http://localhost:3000/users", user).then(save_response => {


                        this.$store.commit("setUser", user)
                        this.$store.commit("setLogged", true)
                        this.$router.push({name:"HomePage"})
                        
                    })

                }



            })






        }


    },

    computed: {

        ...mapGetters({

            getSaltKey: "_getSaltKey",

        })


    }


}
</script>