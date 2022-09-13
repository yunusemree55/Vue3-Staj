<template>

    <div v-if="isAuthenticated" class="row ">
        <div class="col-2 mt-2">
            <img class="rounded-circle " style="width: 100px;"
                src="https://esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-3.png">
        </div>


        <div class="col-5 mt-2 ms-0 ">
            <h2>{{this.getUser?.fullname}}</h2>
            <button style="color: gray;" class="border-0 fw-bold bg-white">
                
                
                <font-awesome-icon icon="fa-solid fa-pen-to-square" /> Edit profile</button>


            <a style="color: greenyellow;" class="border-0 fw-bold bg-white disabled text-decoration-none"
                aria-disabled="true"><img style="width:22px;"
                    src="https://cdn-icons-png.flaticon.com/512/3472/3472620.png" alt="Verified"> Verified</a>

        </div>

        <div class="col-5 mt-2  ">


            <button class="btn btn-sm btn-primary ms-2 float-end mt-5"><font-awesome-icon icon="fa-solid fa-plus" class="pe-1" /> New Post</button>
            <a style="color:black" class="border-0 fw-bold bg-white text-decoration-none float-end mt-5"><img
                    style="width:22px;" src="https://cdn-icons-png.flaticon.com/512/39/39934.png"> Insights </a>


        </div>

    </div>


</template>




<script>
import { mapGetters } from 'vuex';

export default {
    


    computed:{

        ...mapGetters({

            getUser:"_getUser",
            isAuthenticated:"_isAuthenticated"


        })

    }


}
</script>