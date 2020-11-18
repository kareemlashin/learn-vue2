<template>
  <div class="home">
    <router-link to="/Home/Arouter" tag="a" active-class="allActive"
      >allActive</router-link
    >
    <router-view></router-view>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <input v-model="property" />
      <div v-for="item in filteredBlogs" :key="item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      items: [
        {
          name: "thing1",
          age: 5,
          properties: [
            { name: "color", value: "black" },
            { name: "weight", value: 3 },
          ],
        },
        {
          name: "thing2",
          age: 3,
          properties: [
            { name: "length", value: 4 },
            { name: "weight", value: 4 },
          ],
        },
        {
          name: "thing3",
          age: 9,
          properties: [
            { name: "color", value: "black" },
            { name: "length", value: 20 },
          ],
        },
      ],
      property: "",
    };
  },
  methods: {},
  computed: {
    // to calack and display data limited  property render 1
    filteredBlogs: function () {
      return this.items.filter((blog) => {
        return blog.name.match(this.property);
      });
    },
  },
  beforeMount() {
  },
  mounted() {
  },
};
</script>
