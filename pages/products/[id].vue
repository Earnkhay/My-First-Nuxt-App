<template>
    <div>
        <!-- second way of overriding metadata using builtin tags -->
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>
        <productDetails :product="product"/>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch the product
    const { data: product } = await useFetch(uri)

    if(!product.value){
        throw createError({statusCode: 404, statusMessage: 'Product not Found', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    })
</script>

<style lang="scss" scoped>

</style>