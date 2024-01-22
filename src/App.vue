<template>
  <p class="mx-auto my-8 flex justify-center items-center gap-2">
    ✌<img src="/vite.svg" alt="Vite Logo" />👉
    <button type="button" @click="onFetchData" class="p-2 border rounded">
      Send Request
    </button>
    👈<img :src="VueLogo" alt="Vue Logo" />✌
  </p>
  <div class="flex justify-center p-4">
    <ul v-if="msg !== null">
      <li>Response🎇🎇🎇: </li>
      <li v-for="item in Object.entries(msg)">
        - {{ item[0] }}: {{ item[1] }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import VueLogo from '~/vue.svg';

const msg = ref<Record<string, string>>(null);
const onFetchData = async () => {
  try {
    const { data } = await axios.get('/api/');
    msg.value = data || null;
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      msg.value = null;
    }, 5000);
  }
};
</script>
