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

            


            <div class="row">

                <ToDoList />

            </div>







        </div>

    </div>


</template>
  
  
  
  
<script>


import ApiCard2 from '@/components/CardItems/ApiCard2.vue';
import ApiCard from '@/components/CardItems/ApiCard.vue';
import CreditCard from '@/components/CardItems/CreditCard.vue';
import PortfolioCard from '@/components/CardItems/PortfolioCard.vue';
import SubscribeCard from '@/components/CardItems/SubscribeCard.vue';
import ProfileBar from '../components/ProfileBar.vue';
import SideBar from '@/components/SideBar.vue';
import ToDoList from '@/components/ToDoList.vue';





export default {
    data() {
        return {
            amount: 23,
            myData: {
                list: [],
            },
           
        };
    },
    
    provide() {
        return {
            amount: this.amount,
            increaseDollar: this.increaseDollar,
            increaseEuro: this.increaseEuro,
            increaseTl: this.increaseTl,
            myData: this.myData,
            removeItem: this.removeItem,
        };
    },

    created() {
        this.$axios.get("http://localhost:3000/toDoList").then(get_response => {
            console.log(this.myData.list = get_response.data);
            
        });
    },
    methods: {
        increaseTl(data) {
            console.log(data);
            this.amount += Number(data);
            console.log(this.amount);
        },
        increaseDollar(data) {
            var rate = 18;
            this.amount += rate * Number(data);
        },
        increaseEuro(data) {
            var rate = 18;
            this.amount += rate * Number(data);
        },
        removeItem(item) {
            this.myData.list = this.myData.list.filter(i => i != item);
            this.$axios.delete(`http://localhost:3000/toDoList/${item.id}`);
            console.log(item);
        },


        
        
    },
    components: { ApiCard2, ApiCard, CreditCard, PortfolioCard, SubscribeCard, ProfileBar, SideBar, ToDoList }
}

</script>