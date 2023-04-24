
<template>
  <div>
    <h1>{{ num.value }}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
  setup() {
    const num = ref(0)
    const increment = () => {
      num.value++;
    };
    return {
      num,
      increment,
    };
  },
  name: 'Test',
}
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
