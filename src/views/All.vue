
<template>
  <div>
    <div>all learn {{ this.$route.params.id }}</div>
    <PassData :data="allNews" @all="x = $event">
      <div slot="head">head head head head</div>
    </PassData>
    {{ x }}
    <h1>binding</h1>
    <div>{{ allNews }}</div>
    <h1>text binding</h1>
    <div v-text="allNews"></div>
    <h1>html binding</h1>
    <div v-html="htm"></div>
    <h1>class binding</h1>
    <div :class="allNews"></div>
    <h1>text id</h1>
    <div :id="allNews"></div>
    <h1>attrubute binding</h1>
    <img :src="allNews" :alt="allNews" />
    <h1>v - model</h1>
    <input type="text" v-model="mod" /> {{ mod }}
    <div v-bind:class="allNews"></div>
    <div v-once>{{ allNews }}</div>
    <div>event</div>
    <button v-on:click="all()">all</button>
    <button @click="all">all</button>

    <form @submit.prevent="all">
      <button>sub</button>
    </form>
    <div :class="{ one: allNews == 5, two: allNews == 5 }">one</div>
    <div :style="{ color: allNews == 5 ? 'blue' : 'green' }">one</div>
    <div v-if="allNews == 5">!5</div>
    <div v-if="allNews != 5">!!5</div>
    <div v-else-if="allNews == 5">!!5</div>
    <div v-else>!!5</div>
    <div>
      <div v-for="(ite, index) in ny" :key="ite">
        {{ ite }} index {{ index }}
      </div>
    </div>
    <h1>Refs</h1>
    <div ref="title">Refs</div>
    <button @click="go()">go</button>
    <div>{{ allNews | up }}</div>
  </div>
</template>

<script>
import PassData from "./PassData.vue";
import allMixin from "./mixin/now.js";
export default {
  name: "All",
  components: {
    PassData,
  },
  mixins:[allMixin],

};
</script>

<style lang="scss" scoped>
.one {
  color: green;
}
</style>

