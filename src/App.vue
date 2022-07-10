<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="flex flex-col pl-10 h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
    <div class="pb-10">
      <TheHeader />
    </div>
    <div class="flex justify-center">
      <div>
        <Login />
      </div>
      <div>
        <Register />
      </div>
    </div>
    <div class="pt-20 pb-10">
      <TheFooter />
    </div>
  </div>
</template>

<style>
</style>
