import {createRouter, createWebHashHistory} from "vue-router";



const routes = [

    {

        name:"HomePage",
        path:"/",
        component: () => import("@/views/Home.vue")


    },
    {

        name:"ToDoFormPage",
        path:"/toDoForm",
        component: () => import("@/views/ToDoFormComponent.vue")


    }


]

const router = createRouter({


    routes,
    history:createWebHashHistory()




});



export default router