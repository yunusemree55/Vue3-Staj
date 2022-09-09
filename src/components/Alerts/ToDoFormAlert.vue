<template>

    <div v-if="hideAlert" class="alert alert-success w-25 text-center p-5 m-auto" role="alert">
        Başarıyla Eklendi!<br><br>
        <button class="btn btn-sm btn-light float-end">Yeni veri gir</button>
    </div>


</template>



<script>
export default {
    
    data() {
        return {
            
        }
    },

    inject:["hideAlert"]


}
</script>