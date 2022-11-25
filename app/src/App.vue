<script setup>
import Header from './shared/HeaderBar.vue'
</script>

<template>
    <Header />
    <div class="container mx-auto pt-5">
        <router-view />
    </div>
</template>
