<script setup>
import { ref } from 'vue';
import { useProjectStore } from '../../stores/project';

const store = useProjectStore();
const name = ref('');

const save = async () => {
    await store.save(name.value);
};
</script>
<template>
    <h2 class="text-2xl font-bold">Nuevo proyecto</h2>
    <form class="mt-5 space-y-2" @submit.prevent="save">
        <div class="space-y-1">
            <label for="name" class="text-gray-500">Nombre del proyecto:</label>
            <input id="name" v-model="name" type="text" name="name" placeholder="Ingrese el nombre del proyecto"
                class="w-full p-2 border rounded-lg">
            <!-- <template v-if="error.status && error.data.length" v-for="err in error.data.filter(err => err.param === 'email')">
            <small class="text-red-600 block">{{ err.msg }}</small>
        </template> -->
        </div>

        <button type="submit" class="mt-3 p-3 border w-full bg-indigo-600 text-white font-semibold">
            Ingresar
        </button>
    </form>
</template>