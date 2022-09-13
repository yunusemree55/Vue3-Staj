<template>

    <h1 class="text-center mt-2">ToDoList</h1>
    <div class="global-container mt-5 p-5">
        <div class="mt-5 card p-5">
            <form class="m-auto was-validated" novalidate>

                <div class="form-group position-relative mt-3">
                    <label class="fw-bold" for="firstNameInp">First Name</label>
                    <input minlength="2" v-model="toDoItem.firstName" type="text" class="form-control "
                        name="firstNameInp" id="firstNameInp" required>

                    <div class="valid-tooltip">Looks Good</div>
                    <div class="invalid-tooltip"> Name's field should be more than 2 words</div>
                </div>
                <div class="form-group position-relative mt-5">
                    <label class="fw-bold" for="lastNameInp">Last Name</label>
                    <input minlength="2" v-model="toDoItem.lastName" type="text" class="form-control " id="lastNameInp"
                        required>

                    <div class="valid-tooltip">Looks Good</div>
                    <div class="invalid-tooltip"> Last name's field should be more than 2 words</div>
                </div>
                <div class="form-group position-relative mt-5">
                    <label class="fw-bold" for="phoneNumberInp">Phone Number</label>
                    <input minlength="11" maxlength="11" v-model="toDoItem.phoneNumber" type="text"
                        class="phoneArea form-control " id="phoneNumberInp" required>
                    <small style="font-size:12px; color: gray;">
                        <p class="">We won't share your phone number with anyone</p>
                    </small>

                    <div class="valid-tooltip">Looks Good</div>
                    <div class="invalid-tooltip"> Phone number should contains 11 numbers</div>
                </div>
                <div class="form-group position-relative mt-5">
                    <label class="fw-bold" for="jobInp">Job</label>
                    <input v-model="toDoItem.job" type="text" class="form-control " id="jobInp" required>

                    <div class="valid-tooltip">Looks Good</div>
                    <div class="invalid-tooltip"> Job's field shouldn't be empty</div>
                </div>

                <div style="margin-top: 30px;">
                    <input v-model="toDoItem.progress" class="form-check-input" type="radio" name="exampleRadios"
                        id="exampleRadios1" value="true">
                    <label class="form-check-label" for="exampleRadios1">Processing</label>
                    <input v-model="toDoItem.progress" class="form-check-input ms-2" type="radio" name="exampleRadios"
                        id="exampleRadios2" value="false">
                    <label class="form-check-label" for="exampleRadios2"> Finished</label>
                </div>


            </form>

            <button @click="addToList(this.toDoItem)" class="btn btn-sm btn-primary w-50 mt-3">Ekle</button>


        </div>
    </div>


</template>



<script>

export default {

    
    data() {
        return {
            toDoItem: {

                firstName: "",
                lastName: "",
                phoneNumber: "",
                job: "",
                progress: "",


            },
            list:[]

        }
    },

    inject:["myData"],

    mounted() {
        
    },




    methods: {
        addToList1(value) {

            console.log(value);

        },
        addToList(value) {
            
            value.progress = (value.progress == "true");
            console.log(value);
            

            if (this.checkFirstName(value.firstName) != false && this.checkLastName(value.lastName) != false && this.checkJobDescription(value.job) != false && this.checkPhoneNumber(value.phoneNumber) != false) {

                this.$axios.post("http://localhost:3000/toDoList", value).then(save_response => console.log("Eklendi: " + save_response));
                this.$router.push({ name: "HomePage" })
                

            }
            else {
                console.log("Hata!");
            }
        },
        checkFirstName(firstName) {
            if (firstName.length < 2) {
                return false;
            }
            else {
                return firstName;
            }
        },
        checkLastName(lastName) {
            if (lastName.length < 2 && lastName.length == 0) {
                return false;
            }
            else {
                return lastName;
            }
        },
        checkJobDescription(job) {
            if (job.length == 0) {
                console.log("Please describe your job");
                return false;
            }
            else {
                return job;
            }
        },
        checkPhoneNumber(phoneNo) {
            if (phoneNo.length > 11 || phoneNo.length <= 0) {
                console.log("Invalid Phone Number");
                return false;
            }
            else if (phoneNo.length == 11) {
                phoneNo = phoneNo[0] + phoneNo[1] + phoneNo[2] + phoneNo[3] + " " + phoneNo[4] + phoneNo[5] + phoneNo[6] + " " + phoneNo[7] + phoneNo[8] + " " + phoneNo[9] + phoneNo[10];
                console.log(phoneNo);
                return phoneNo;
            }
            else {
                console.log("Did you write your number correctly ?");
                return false;
            }
        }
    },





}


</script>
