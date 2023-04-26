
<template>
  <div>
    <p>Bird: {{ bird.name }} {{ bird.color }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import Bird from '@/models/Bird';


export default {
  setup() {
    const bird = ref(new Bird({ name: 'Eagle', color: 'Brown'}));

    return {
      bird,
    };
  },
  name: 'Bird',
}
</script>
