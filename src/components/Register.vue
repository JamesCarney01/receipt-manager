<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
const components = {
    BaseButton,
}
</script>

<template>
    <div class="pl-40">
        <div>
            <h1 class="pt-7 pb-5 text-4xl font-poppins text-center font-semibold tracking-wide text-slate-100">Register
            </h1>
        </div>
        <div>
            <div>
                <div class="flex flex-row">
                    <div class="pb-5 pr-7">
                        <p class="pb-2 font-bold text-white text-2xl text-center">First name</p>
                        <input class="pl-1.5 rounded-md outline-none" type="name" v-model="name" placeholder="James">
                    </div>
                    <div class="pb-5">
                        <p class="pb-2 font-bold text-white text-2xl text-center">Last name</p>
                        <input class="pl-1.5 rounded-md outline-none" type="lastName" v-model="lastName"
                            placeholder="Carney">
                    </div>
                </div>
            </div>
            <div>
                <div class="flex flex-row">
                    <div class="pb-5 pr-7">
                        <p class="pb-2 font-bold text-white text-2xl text-center">Email</p>
                        <input class="pl-1.5 rounded-md outline-none" type="email" v-model="email"
                            placeholder="example@email.com">
                    </div>
                    <div>
                        <p class="pb-2 font-bold text-white text-2xl text-center">Password</p>
                        <input class="pl-1.5 rounded-md outline-none" type="password" v-model="password"
                            placeholder="*******">
                    </div>
                </div>
                <div class="pl-40">
                    <BaseButton text="Register" />
                </div>
            </div>
        </div>
    </div>
</template>