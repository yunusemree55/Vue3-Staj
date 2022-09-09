<template>


    <div class="row mb-5 ">

        <ToDoList />


    </div>

    <div class="row mb-5 ">

        <ToDoForm />

    </div>




</template>

<script>
import ToDoForm from './ToDoForm.vue';
import ToDoList from './ToDoList.vue';
    
export default{
    components: { ToDoForm, ToDoList }
}


</script>