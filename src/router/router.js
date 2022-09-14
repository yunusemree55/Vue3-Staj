import {createRouter, createWebHashHistory} from "vue-router";
import store from "@/store/index.js"


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


    },
    {

        name:"RegisterPage",
        path:"/register",
        component: () => import("@/views/Register.vue")
    },
    {

        name:"LoginPage",
        path:"/login",
        component: () => import("@/views/Login.vue")


    }


]

const router = createRouter({


    routes,
    history:createWebHashHistory()




});


router.beforeEach((to,_,next) => {

    const requiredAuthenticatedRoutes = ["HomePage"]
    const notRequiredAuthenticatedRoutes = ["LoginPage","RegisterPage"]

    const isAuthenticated = store.getters._isAuthenticated;

    if(notRequiredAuthenticatedRoutes.indexOf(to.name) > -1 && isAuthenticated ) next(false)

    if(requiredAuthenticatedRoutes.indexOf(to.name) > -1 ){

        if(isAuthenticated) next();
        else{
            next({name:"LoginPage"})
        }
    }
    else{
        next();
    }




})



export default router