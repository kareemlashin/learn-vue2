<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="login()">log</button>
    <div v-if="error == '' ? false : true">
      {{ error }}
    </div>
    <div v-if="cars.length == 0 ? true : false">load</div>
    <button @click="load()">add more</button>

    <div v-for="(ite, index) in filteredBlogs" :key="index">
      {{ ite.id }} {{ index }}
      {{ ite.title }}
    </div>
    <div>-----------------</div>
    <div v-for="(ite, index) in cars" :key="index">
      {{ ite.id }} {{ index }}
      {{ ite.user }}
      <button class="text-danger delete" @click="deleteUser(ite.id)">
        &#10005;
      </button>
    </div>

    <button @click="add()">add</button>
    <button @click="deleteUser(id)">delete</button>
  </div>
</template>
<script>
import AuthService from "../axios/all.js";
import { /*mapGetters,*/ mapActions } from "vuex";
export default {
  methods: {
    add() {
      this.$store.dispatch("addUsers", { title: "title title title title" });
    },
    deleteUser(id){
            this.$store.dispatch("deleteUser", id);

    },
    load() {
      this.num++;
      console.log(this.num);
      this.$store.dispatch("fetchUsers", this.num);
    },

    login() {
      localStorage.setItem("token", "yyyyyyyyyy");
      localStorage.setItem("role", "one");
      AuthService.all();
      AuthService.getall()
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
    ...mapActions(["addUsers", "deleteUser"]),
  },
  data() {
    return {
      error: "",
      num: 1,
      property: "RX",
    };
  },
  computed: {
    // ...mapGetters(["all"]),
    cars() {
      return this.$store.getters.all;
    },

    filteredBlogs: function () {
      return this.cars.filter((blog) => {
        return blog.title.toLowerCase().includes(this.property.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers", this.unm);
    console.log(this.x);
  },
};
</script>
