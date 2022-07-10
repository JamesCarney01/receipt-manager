<script setup lang="ts">
const props = defineProps<{
    text: string
}>();

</script>

<template>
    <button class="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
        {{ text }}
    </button>
</template>