<template>


    <section class="d-flex justify-content-center">
        <div class="vertical-center">
            <div class="card p-3 d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        class="img-fluid" alt="Sample image">
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>

                        <div class="form-outline mb-4">
                            <label class="form-label fw-bold pt-4" for="username">Username</label>
                            <input v-model="userData.username" type="text" id="username"
                                class="form-control form-control-lg" placeholder="Enter username" autocomplete="off" />
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <label class="form-label fw-bold" for="password">Password</label>
                            <input v-model="userData.password" type="password" id="password"
                                class="form-control form-control-lg" placeholder="Enter password" />

                        </div>


                        <div class="text-center mt-4 pt-2">
                            <button @click="onLogin" type="button" class="btn btn-primary btn-lg w-50">Login</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link
                                 class="text-decoration-none "   :to="{name:'RegisterPage'} ">Register</router-link>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>

</template>



<script>
import CryptoJs from 'crypto-js'
import { mapGetters } from 'vuex'

export default {


    data() {
        return {
            userData: {
                fullname: null,
                username: "",
                password: ""

            }
        }
    },

    methods: {

        onLogin() {

            const user = {
                ...this.userData
            }
            user.password = CryptoJs.HmacSHA1(user.password, this.getSaltKey).toString()

            if (this.userData.username == "" || this.userData.password == "") {

                alert("Boş alanları doldurunuz")

            } else {

                this.$axios.get(`http://localhost:3000/users?username=${user.username}&password=${user.password}`).then(login_response => {

                    if (login_response?.data?.length > 0) {

                        user.fullname = login_response.data[0].fullname
                        this.$store.commit("setUser",user)
                        this.$store.commit("setLogged",true)
                        this.$router.push({name:"HomePage"})

                    } else {

                        alert("Bilgiler geçersiz")

                    }


                })

            }
        }

    },

    computed: {

        ...mapGetters({

            getSaltKey: "_getSaltKey"

        })


    }



}
</script>



