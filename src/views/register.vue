<template>
  <div>
  <button>register</button>
  </div>
</template>

<script>
export default {
name:"register",
dat(){
return{
                    form:null

}
},
methods:{
          register(){
                    this.axios.post("path",{form:this.form}).then(res=>{
                              console.log(res)
                    }).catch(err=>{
                              console.log(err)
                    })
          }
}
}
</script>

<style>

</style>