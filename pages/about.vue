<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis laborum, nostrum, laudantium aspernatur culpa assumenda sunt pariatur sint voluptates nesciunt praesentium dolore, 
            voluptatem esse enim repudiandae fugiat rem eveniet qui.
        </p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Odio, asperiores unde quae tenetur exercitationem, culpa quidem, explicabo rerum inventore amet doloribus sint voluptate officia. Harum tenetur molestias incidunt nihil error.
        </p>
        <div>{{ data }}</div>
   </div>
</template>

<script setup>
    // const { data } = await useFetch('/api/app?name=jules', {
    //     method:'post',
    //     body: {age: 30}
    // })
    const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
h2{
    margin-bottom: 20px;
    font-size:30px;
}
p{
    margin: 20px 0;
}
</style>
