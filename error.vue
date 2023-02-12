<template>
    <div class="mt-12 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops</p>
        <p class="mt-7">{{ error.message }}</p>
        <button @click="handleClearError" class="btn my-7">Go home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/'})
</script>

<style lang="scss" scoped>

</style>