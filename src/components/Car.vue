
<template>
  <div>
    <p>Car: {{ car.brand }} {{ car.model }} {{ car.price }}</p>

    <p>Status: {{ car.getStatus() }}</p>

    <br>

    <button @click="car.run()">Run</button>
    <button @click="car.stop()">Stop</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Car } from '@/models/Car';


export default {
  setup() {
    const car = ref(new Car({ brand: 'BMW', model: 'M3', price: 100000}));
    let car2 = 12;

    car2++;
    return {
      car,
      car2,
    };
  },
  name: 'Car',
}
</script>
