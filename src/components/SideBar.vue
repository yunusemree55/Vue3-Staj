<template>

<div id="sidebar">
        
                    
        <div class="side-bar flex-shrink-0 p-3 bg-white" style="width: 280px;">
                <a href="" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                    <svg class="bi me-2" width="30" height="24"><img
                            src="https://www.pngkit.com/png/detail/760-7603646_facilities-red-company-icon-png.png"
                            class="rounded-circle" style="width:40px"></svg>
                    <span class="fs-5 fw-semibold ms-1">Clever</span>
                </a>
                <ul class="list-unstyled ps-0">
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#home-collapse" aria-expanded="false">
                            Home
                        </button>
                        <div class="collapse" id="home-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">Overview</a></li>
                                <li><a href="#" class="link-dark rounded">Updates</a></li>
                                <li><a href="#" class="link-dark rounded">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </button>
                        <div class="collapse" id="dashboard-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">Overview</a></li>
                                <li><a href="#" class="link-dark rounded">Weekly</a></li>
                                <li><a href="#" class="link-dark rounded">Monthly</a></li>
                                <li><a href="#" class="link-dark rounded">Annually</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#orders-collapse" aria-expanded="false">
                            Orders
                        </button>
                        <div class="collapse" id="orders-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="#" class="link-dark rounded">New</a></li>
                                <li><a href="#" class="link-dark rounded">Processed</a></li>
                                <li><a href="#" class="link-dark rounded">Shipped</a></li>
                                <li><a href="#" class="link-dark rounded">Returned</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="border-top my-3"></li>
                    <li class="mb-1">
                        <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                            data-bs-target="#account-collapse" aria-expanded="false">
                            Account
                        </button>
                        <div class="collapse" id="account-collapse">
                            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                
                                <button v-if="isAuthenticated" @click="logOut" class="btn btn-sm btn-danger mt-2">Logout</button>
                                <button v-if="!isAuthenticated" @click="logIn" class="btn btn-sm btn-success mt-2">Login</button>
                            </ul>
                        </div>
                    </li>
                </ul>
    
        </div>
    
    
</div>

</template>


<script>
import { mapGetters } from 'vuex'


export default{

    data(){
       return{



       } 
    },


    methods: {

        logOut(){

            this.$store.commit("setLogout",false)
            this.$store.commit("setResetUser")
            this.$router.push({name:"LoginPage"})

        },
        logIn(){

            this.$router.push({name:"LoginPage"})


        }


    },

    computed:{

        ...mapGetters({

            isAuthenticated:"_isAuthenticated"

        })



    }


}


</script>










