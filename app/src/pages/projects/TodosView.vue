<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useProjectStore } from '../../stores/project';

const route = useRoute();
const store = useProjectStore();

const { project } = storeToRefs(store);

onMounted(async () => {
    await store.getProjectById(route.params.id)
});

const handleChange = async (e) => {
    await store.updateTask(e.target.dataset.uid)
};

const handleSubmit = async (e) => {
    await store.saveTask(route.params.id, e.target.value)

    e.target.value = ''
};

const handleDestroy = async (uid) => {
    await store.destroyTask(uid)
}
</script>
<template>
    <template v-if="project">
        <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <h2 class="text-2xl">Tareas de <strong>{{ project.name }}</strong></h2>
        </div>
        <small>Completado {{ store.incompleteTasks() }} / {{ project.todos.length }}</small>
        <div class="space-y-4 mt-5">
            <ul class="flex flex-col space-y-2">
                <li v-for="todo in project.todos" :key="todo._id" class="flex items-center space-x-3">
                    <button @click="() => handleDestroy(todo._id)">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6 text-red-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <input type="checkbox" @change="handleChange" :checked="todo.completedAt" :data-uid="todo._id"
                        :name="`todo-${todo._id}`" :id="`todo-${todo._id}`" />
                    <label :for="`todo-${todo._id}`" :class="{ 'line-through': todo.completedAt }">
                        {{ todo.title }}
                    </label>
                </li>
            </ul>

            <input type="text" @keyup.enter="handleSubmit" class="w-1/3 p-2 text-sm border rounded-lg"
                placeholder="Ingrese una tarea..." />
        </div>
    </template>
    <p v-else class="text-2xl text-center">Cargando</p>
</template>