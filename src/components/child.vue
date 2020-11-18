<template>
  <div>
    <div>name</div>
    {{ x }}
    <button @click="toParent()">toParent</button>
    <!--
    in parent
    <child :x="passsTochild" @all="z = $event"></child>
  --></div>
</template>

<script>
export default {
  name: "child",
  props: ["x"],
  data() {
    return {
      cdc: "from child",
    };
  },
  methods: {
    toParent() {
      this.$emit("all", this.cdc);
    },
  },
};
</script>

<style>
</style>