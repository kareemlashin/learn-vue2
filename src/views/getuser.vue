<template>
  <div>
  <button>getuser</button>
  <button>getuser</button>
  <button>getuser</button>
  <button>getuser</button>
  <button>getuser</button>
  <button>getuser</button>
  </div>
</template>

<script>
export default {
name:"getuser",
dat(){
return{
                    form:null

}
},
methods:{
          getuser(){
                    this.axios.get("path",{headers:{
                              Authrization:`Bearer ${localStorage.getItem('token')}`
                    }}).then(res=>{
                              console.log(res);
                              this.$router.push('/path')
                    }).catch(err=>{
                              console.log(err)
                    })
          }
}
}
</script>

<style>

</style>