<template>

  <div class="outer-container">

    <SideBar />


    <div class="content">

      <ProfileBar />

      <div class="row">
        <SubscribeCard />
        <PortfolioCard :amount="amount" @dollar="increaseDollar" @euro="increaseEuro" @tl="increaseTl" />
        <CreditCard />

      </div>

      <div class="row">

        <ApiCard />
        <ApiCard2 />

      </div>


      <div class="row mb-5">

        <ToDoList :data="list" @delete-item="removeItem" />


      </div>

      <div class="row mb-5">

        <ToDoForm @add-item="AddToList" />


      </div>


    


    </div>

  </div>


</template>




<script>
import ProfileBar from "./components/ProfileBar.vue";
import PortfolioCard from "./components/CardItems/PortfolioCard.vue";
import CreditCard from "./components/CardItems/CreditCard.vue";
import ApiCard from "./components/CardItems/ApiCard.vue";
import ApiCard2 from "./components/CardItems/ApiCard2.vue";
import ToDoList from "./components/ToDoList.vue";
import ToDoForm from "./components/ToDoForm.vue";



export default {
  components: { ProfileBar, PortfolioCard, CreditCard, ApiCard, ApiCard2, ToDoList, ToDoForm },

  data() {

    return {

      amount: 23,
      // hideForm: false,
      // hideAlert:false,


      list: [

        { id: 1, firstName: "Arthur", lastName: "Morgan", job: "Cook Dinner for guests", phoneNumber: "0500 123 25 74", progress: true },
        { id: 2, firstName: "Dutch", lastName: "Miller", job: "Clean home", phoneNumber: "0200 158 76 21", progress: false },


      ],

    }



  },

  methods: {

    increaseTl(data) {

      console.log(data);
      this.amount += Number(data)

    },
    increaseDollar(data) {

      var rate = 18;

      this.amount += rate * Number(data)


    },
    increaseEuro(data) {

      var rate = 18;

      this.amount += rate * Number(data)




    },

    removeItem(item) {

      this.list = this.list.filter(i => i != item)
      console.log(item);


    },

    AddToList(value) {




      var firstName = value.firstName;
      var lastName = value.lastName;
      var job = value.job;
      var phoneNumber = value.phoneNumber;
      var progress = (value.progress == 'true');



      if (this.checkFirstName(firstName) != false && this.checkLastName(lastName) != false && this.checkJobDescription(job) != false && this.checkPhoneNumber(phoneNumber) != false) {


        this.list.push({ id: new Date().getDate(), firstName: firstName, lastName: lastName, job: job, phoneNumber: phoneNumber, progress: progress });
        // this.hideForm = !this.hideForm
        // this.hideAlert = !this.hideAlert
      } else {
        console.log("Hata!")
      }
      console.log(this.list);


    },

    checkFirstName(firstName) {

      if (firstName.length < 2) {
        return false;
      } else {
        return firstName;
      }


    },

    checkLastName(lastName) {

      if (lastName.length < 2 && lastName.length == 0) {
        return false;
      } else {
        return lastName;
      }


    },
    checkJobDescription(job) {

      if (job.length == 0) {

        console.log("Please describe your job")
        return false
      } else {

        return job
      }


    },

    checkPhoneNumber(phoneNo) {

      if (phoneNo.length > 11 || phoneNo.length <= 0) {
        console.log("Invalid Phone Number");
        return false;
      } else if (phoneNo.length == 11) {
        phoneNo = phoneNo[0] + phoneNo[1] + phoneNo[2] + phoneNo[3] + ' ' + phoneNo[4] + phoneNo[5] + phoneNo[6] + ' ' + phoneNo[7] + phoneNo[8] + ' ' + phoneNo[9] + phoneNo[10]
        console.log(phoneNo)
        return phoneNo;

      } else {
        console.log("Did you write your number correctly ?")
        return false;
      }


    },




  }
}

</script>