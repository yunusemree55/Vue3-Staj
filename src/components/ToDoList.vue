<template>


    <div class="row mt-5">


        <table class="table table-bordered border-dark table-hover">
            <thead>
                <tr style="background-color:rgb(249, 249, 249)">
                    <th scope="col">No</th>
                    <th scope="col">Name - Surname</th>
                    <th scope="col">Job</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Process</th>
                    <th scope="col">Manage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in myData.list" :key="index"
                    :class="{ red: !item.progress, green: item.progress, }">
                    <th>{{ index + 1 }}</th>
                    <td>{{ item.firstName + " " + item.lastName }}</td>
                    <td>{{ item.job }}</td>
                    <td>{{ item.phoneNumber }}</td>
                    <td>{{ isFinished(item.progress) }}</td>
                    <th scope="row"><button @click="removeItem(item)" class="btn text-white bg-danger">Delete</button>
                    </th>
                </tr>
            </tbody>
        </table>

        <div class="d-flex justify-content-end me-3">

            <button @click="GoToFormPage" class="btn btn-sm btn-primary mb-3" style="width:125px">Ekle</button>


        </div>


    </div>



</template>



<script>

export default {

    data() {

        return {

            showSituation: ""

        }

    },

    // props: ["data"],
    inject: ["myData", "removeItem"],

    methods: {

        
        GoToFormPage(){

            this.$router.push({name:'ToDoFormPage'})

        },
    

        isFinished(situation) {

            if (situation == true) {

                return this.showSituation = "Progressing"

            } else if (situation == null) {

                return this.showSituation = "Undefined"

            } else {

                return this.showSituation = "Finished"


            }


        }
    }



}


</script>