<template>
  <div>
  <button>login</button>
  <button>login</button>
  <button>login</button>
  <button>login</button>
  <button>login</button>
  <button>login</button>
  </div>
</template>

<script>
export default {
name:"login",
dat(){
return{
                    form:null

}
},
methods:{
          login(){
                    this.axios.post("path",{form:this.form}).then(res=>{
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