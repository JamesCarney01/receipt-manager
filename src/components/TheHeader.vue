<script setup lang="ts">
import BaseButton from '../components/BaseButton.vue'
const components = {
    BaseButton,
}
</script>

<template>
    <div>
        <div class="flex flex-row">
            <h1 class="py-7 text-6xl font-poppins font-semibold tracking-wide text-slate-100">
                Receipt Manager
            </h1>
            <div class="pl-20 pr-10 pt-10">
                <router-link :to="{ name: 'CreateReceipt' }">
                    <BaseButton text="Create receipts" />
                </router-link>
            </div>
            <div class="pt-10 pr-10">
                <router-link :to="{ name: 'ViewReceipt' }">
                    <BaseButton text="View receipts" />
                </router-link>
            </div>
            <div class="pt-10">
                <router-link :to="{ name: 'LoginRegister' }">
                    <BaseButton text="Login or Register" />
                </router-link>
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>

