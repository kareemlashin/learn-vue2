<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login()">log</button>
    <div v-if="error==''?false:true">
    {{error}}
    </div>
    <div v-if="all.length==0?true:false">
  load
    </div>
    <div v-for="ite in all" :key="ite">{{ite.id}}
              <button class="text-danger delete" @click="deleteUser(ite.id)">&#10005;</button>

    </div>
        <button @click="add()">add</button>
    <button @click="delete2()">delete</button>

  </div>
</template>
<script>
import AuthService from '../axios/all.js'
import  {mapGetters,mapActions} from 'vuex'
export default {
  methods:{
    add(){
            this.$store.dispatch("addUsers",{title:"title title title title"})

    },
    
    
    login(){
                    
             localStorage.setItem('token',"yyyyyyyyyy");
             localStorage.setItem('role',"one");
                   AuthService.all()
AuthService.getall().then(res=>console.log(res)).catch(err=>console.log(err))

          },
  ...mapActions(["addUsers", "deleteUser"])
  },
  data(){
    return{
      data:[],
      error:''
    }
  },
      computed: {
        
              ...mapGetters(['all'])

    },
    mounted() {
      this.$store.dispatch("fetchUsers")
    },
}
</script>
