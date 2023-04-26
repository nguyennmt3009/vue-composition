
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
import { reactive } from '@vue/composition-api';
import { Car } from '@/models/Car';

export default {
  setup() {
    const car = reactive(new Car({ brand: 'BMW', model: 'M3', price: 100000}));

    return {
      car,
    };
  },
  name: 'Car',
}
</script>
