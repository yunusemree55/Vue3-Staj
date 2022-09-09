<template>

  <div class="outer-container">

    <SideBar />


    <div class="content">

      <ProfileBar />

      
      <div class="row">
        <SubscribeCard />
        <PortfolioCard :amount="amount" />
        <CreditCard />

      </div>

      <div class="row">

        <ApiCard />
        <ApiCard2 />

      </div>

      <ToDoSection />
      

      <div class="row">
        
        <ToDoFormAlert />
        
      </div>
      

      

    


    </div>

  </div>


</template>




<script>

import axios from 'axios'
import ProfileBar from "./components/ProfileBar.vue";
import PortfolioCard from "./components/CardItems/PortfolioCard.vue";
import CreditCard from "./components/CardItems/CreditCard.vue";
import ApiCard from "./components/CardItems/ApiCard.vue";
import ApiCard2 from "./components/CardItems/ApiCard2.vue";
import ToDoFormAlert from "./components/Alerts/ToDoFormAlert.vue";
import ToDoSection from './components/ToDoSection.vue';




export default {
  components: { ProfileBar, PortfolioCard, CreditCard, ApiCard, ApiCard2,  ToDoFormAlert, ToDoSection },

  data() {

    return {
      
      amount: 23,
      
      myData:{
        
        
        list: [
          

        


      ],

      },

      
      hideForm: true,
      hideAlert:false,

    }
  },

  mounted(){
    axios.get("http://localhost:3000/toDoList").then(get_response => {
      console.log(this.myData.list=get_response.data)
    })
  },

  provide(){

    return{

      amount: this.amount,
      increaseDollar: this.increaseDollar,
      increaseEuro:this.increaseEuro,
      increaseTl: this.increaseTl,
      
      

      data:this.myData,
      removeItem: this.removeItem,
      addToList:this.addToList,
      hideForm:this.hideForm,
      hideAlert:this.hideAlert,
    }


  },

  methods: {

    increaseTl(data) {

      console.log(data);
      this.amount += Number(data)
      console.log(this.amount);

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

      this.myData.list = this.myData.list.filter(i => i != item)
      axios.delete(`http://localhost:3000/toDoList/${item.id}`)
      console.log(item);


    },

    addToList(value) {



      
      var firstName = value.firstName;
      var lastName = value.lastName;
      var job = value.job;
      var phoneNumber = value.phoneNumber;
      var progress = (value.progress == 'true');

      var object = {
        firstName: firstName,
        lastName: lastName,
        job: job,
        phoneNumber: phoneNumber,
        progress: progress
      }


      if (this.checkFirstName(firstName) != false && this.checkLastName(lastName) != false && this.checkJobDescription(job) != false && this.checkPhoneNumber(phoneNumber) != false) {


        this.myData.list.push({ id: new Date().getDate(), firstName: firstName, lastName: lastName, job: job, phoneNumber: phoneNumber, progress: progress });
        axios.post("http://localhost:3000/toDoList",object).then(save_response => console.log("Eklendi: " + save_response))
        this.hideForm = !this.hideForm
        console.log(this.hideForm);
        this.hideAlert = !this.hideAlert
      } else {
        console.log("Hata!")
      }
      


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



