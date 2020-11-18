
<template>
  <div>
   PassData
   <br>
   {{data}}
   <br>
   <button @click="all()">all</button>
   <slot name="head"></slot>
  </div>
</template>

<script>
export default {
  name: 'PassData',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   data:String
  },
  methods: {
    all(){
      this.$emit("all","aaaaaaaaaaaaaaaaaa")
    }
   
  },
}
</script>

<style lang="scss" scoped>

</style>

