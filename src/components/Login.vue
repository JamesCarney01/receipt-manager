<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
const components = {
    BaseButton,
}
</script>

<template>
    <div>
        <div>
            <h1 class="pt-7 pb-5 text-4xl font-poppins text-center font-semibold tracking-wide text-slate-100">
                Login
            </h1>
        </div>

        <div class="pb-5">
            <p class="pb-2 font-bold text-white text-2xl text-center">Email</p>
            <input class="pl-1.5 rounded-md outline-none" type="email" v-model="email" placeholder="example@email.com">
        </div>
        <div>
            <p class="pb-2 font-bold text-white text-2xl text-center">Password</p>
            <input class="pl-1.5 rounded-md outline-none" type="password" v-model="password" placeholder="*******">
        </div>
        <div class="pt-5 flex justify-center">
            <BaseButton text="Login" />
        </div>
    </div>
</template>