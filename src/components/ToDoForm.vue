<template>

    <div>
        <form class="m-auto was-validated" novalidate>

            <div class="form-group position-relative mt-3">
                <label class="fw-bold" for="firstNameInp">First Name</label>
                <input minlength="2" v-model="firstNameInput" type="text" class="form-control w-25" name="firstNameInp"
                    id="firstNameInp" required>

                <div class="valid-tooltip">Looks Good</div>
                <div class="invalid-tooltip"> Name's field should be more than 2 words</div>
            </div>
            <div class="form-group position-relative mt-5">
                <label class="fw-bold" for="lastNameInp">Last Name</label>
                <input minlength="2" v-model="lastNameInput" type="text" class="form-control w-25" id="lastNameInp"
                    required>

                <div class="valid-tooltip">Looks Good</div>
                <div class="invalid-tooltip"> Last name's field should be more than 2 words</div>
            </div>
            <div class="form-group position-relative mt-5">
                <label class="fw-bold" for="phoneNumberInp">Phone Number</label>
                <input minlength="11" maxlength="11" v-model="phoneNumberInput" type="text"
                    class="phoneArea form-control w-25 " id="phoneNumberInp" required>
                <small style="font-size:12px; color: gray;">
                    <p class="">We won't share your phone number with anyone</p>
                </small>

                <div class="valid-tooltip">Looks Good</div>
                <div class="invalid-tooltip"> Phone number should contains 11 numbers</div>
            </div>
            <div class="form-group position-relative mt-5">
                <label class="fw-bold" for="jobInp">Job</label>
                <input v-model="jobInput" type="text" class="form-control w-25" id="jobInp" required>

                <div class="valid-tooltip">Looks Good</div>
                <div class="invalid-tooltip"> Job's field shouldn't be empty</div>
            </div>

            <div style="margin-top: 30px;">
                <input v-model="progressingInput" class="form-check-input" type="radio" name="exampleRadios"
                    id="exampleRadios1" value="true">
                <label class="form-check-label" for="exampleRadios1">Processing</label>
                <input v-model="progressingInput" class="form-check-input ms-2" type="radio" name="exampleRadios"
                    id="exampleRadios2" value="false">
                <label class="form-check-label" for="exampleRadios2"> Finished</label>
            </div>


        </form>


    </div>

    <button @click="sendFormData" class="btn btn-sm btn-primary w-25 mt-3">Ekle</button>
</template>



<script>

export default {


    data() {
        return {
            firstNameInput: "",
            lastNameInput: "",
            jobInput: "",
            phoneNumberInput: "",
            progressingInput: null,
        }
    },

    methods: {

        sendFormData() {

            this.$emit('add-item', { firstName: this.firstNameInput, lastName: this.lastNameInput, job: this.jobInput, phoneNumber: this.phoneNumberInput, progress: this.progressingInput })

        }


    },

    props: ["hide"]





}


</script>