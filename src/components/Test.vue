
<template>
  <div>
    <h1>Fade Chat GPT</h1>
    <input class="big-form" v-model="message.value" type="text" placeholder="Enter your question">
    <input type="submit" @click="sendMessage" value="Send">
    <!-- show loading -->
    <h2 v-if="isLoading.value">Loading...</h2>
    <h1>{{ 'Answer' }}</h1>
    <p>{{ answer.value }}<p>
    <br>
    <h1>{{ num.value }}</h1>
    <button @click="increment">Increment</button>
    <br>
    <img :src="imageURL.value" alt="random image">
    <br>
    <button @click="randomImage">Get new random image</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
// import { getChatbot } from '@/api/chatbot.ts';
import Car from '@/models/Car.ts';


export default {
  setup() {
    const num = ref(0);
    const isLoading = ref(false);
    const imageURL = ref('https://picsum.photos/200/300');
    const message = ref('');
    const answer = ref('');
    const increment = () => {
      num.value++;
    };

    const car = ref(new Car({ brand: 'BMW', model: 'M3', price: 100000}));
    const randomImage = () => {
      imageURL.value = `https://picsum.photos/200/300?random=${Math.random()}`;
    };
    const sendMessage = async () => {
      isLoading.value = true;
      console.log(message.value);
      // const response = await getChatbot(message.value);
      // answer.value = response.data.choices[0].text;
      answer.value = 'haha';
      isLoading.value = false;
    };
    return {
      num,
      increment,
      imageURL,
      randomImage,
      message,
      sendMessage,
      answer,
      isLoading,
      car,
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
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

p {
  white-space: pre-line;
  text-align: left;
  padding: 20px;
}
</style>
