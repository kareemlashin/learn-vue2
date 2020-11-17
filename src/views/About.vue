<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login()">log</button>
  </div>
</template>
<script>
import AuthService from '../axios/all.js'
export default {
  methods:{
    
    login(){
                    
             localStorage.setItem('token',"yyyyyyyyyy");
             localStorage.setItem('role',"one");
                   AuthService.all()
AuthService.getall().then(res=>console.log(res)).catch(err=>console.log(err))

          },

  },
  
    created() {
    },
    
    mounted() {
AuthService.getall().then(res=>console.log(res)).catch(err=>console.log(err))
    },
}
</script>
