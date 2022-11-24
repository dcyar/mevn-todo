<script setup>
import { onMounted } from 'vue';
import { useProjectStore } from '../../stores/project';
import { storeToRefs } from 'pinia';

const store = useProjectStore()

const { projects } = storeToRefs(store)

onMounted(async () => {
    await store.all()
});

</script>
<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <h2 class="text-2xl font-bold">Mis Proyectos</h2>
        </div>
        <router-link :to="{ name: 'new-project' }" class="border p-3 rounded-lg bg-indigo-500 text-white">Nuevo Proyecto
        </router-link>
    </div>
    <div class="flex space-x-3 mt-5">
        <template v-for="project in projects">
            <div class="flex justify-between items-center p-5 bg-indigo-200 border rounded-md">
                <router-link :to="{ name: 'todos', params: { id: project.uid } }" class="p-1">
                    {{ project.name }}
                </router-link>
            </div>
        </template>
    </div>
</template>