<template>
    <div>
        <Navbar/>
        <RouterView/>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<style lang="scss" scoped>

</style>