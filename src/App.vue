<template>
  <h1 class="whitespace-nowrap overflow-hidden text-ellipsis mb-4">
    {{ msg }}
  </h1>
  <p class="w-72 m-auto flex justify-evenly">
    <img src="/vite.svg" alt="Vite Logo" />
    <img :src="VueLogo" alt="Vue Logo" />
  </p>
  <button type="button" @click="onFetchData">Request</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import VueLogo from '~/vue.svg';

const msg = ref('Response');
const onFetchData = async () => {
  try {
    const { data } = await axios.get('/api/');
    msg.value = data || 'Error';
  } catch (error) {
    msg.value = 'Error';
  } finally {
    setTimeout(() => {
      msg.value = 'Response';
    }, 1000);
  }
};
</script>
