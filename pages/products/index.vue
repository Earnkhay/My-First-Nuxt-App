<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="(p, id) in products" :key="id">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<script setup>
//special composable function for using layouts in components
    definePageMeta({
        layout: 'products'
    })
    //fetch products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    //another way of overriding metadata using usehead composable function
    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            {name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })
</script>

<style scoped>

</style>