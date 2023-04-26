<template>
  <div class="hello">
    <Car />
    <p>{{ msg }}</p>

    <Bird />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Car from '@/components/Car.vue';
import Bird from '@/components/Bird.vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Car,
    Bird,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
