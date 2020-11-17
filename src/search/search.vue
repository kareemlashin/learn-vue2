<template>
  <div class="home">
  
    <input v-model="property"  />
<div v-for="item in filteredBlogs" :key="item">
    {{ item.name }}
</div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
   data() {
     return{
    items: [
      {name: 'thing1', age: 5, properties: [
         { name: 'color', value: 'black'},
         { name: 'weight', value: 3}
       ]},
      {name: 'thing2', age: 3, properties: [
         { name: 'length', value: 4},
         { name: 'weight', value: 4}
       ]},
      {name: 'thing3', age: 9, properties: [
         { name: 'color', value: 'black'},
         { name: 'length', value: 20}
       ]}
     ],
     property: ''
     }
 },
 methods: {

  },
  computed:{
          filteredBlogs:function(){
        return this.items.filter((blog) => {
           return blog.name.match(this.property);
        });
      }

  }
  
}
</script>
