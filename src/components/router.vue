<template>
  <div>
  <div>router</div>
  <router-link to="/about" tag="a" active-class="allActive">allActive</router-link>
  <button>login</button>
  </div>
</template>

<script>
export default {
name:"Arouter",
methods:{
          go(){
            this.$router.push('/')
          }
}
}
</script>

<style>

</style>