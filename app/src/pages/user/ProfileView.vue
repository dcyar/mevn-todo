<script setup>
import { storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { useAuthStore } from '../../stores/auth';
const store = useAuthStore();

const form = reactive({
    name: store.user.name,
    old_password: '',
    new_password: '',
    new_password_confirmation: '',
});

const { user, error } = storeToRefs(store);

const handleUpdateProfile = () => {
    store.updateProfile(form)
    form.old_password = ''
    form.new_password = ''
    form.new_password_confirmation = ''
};
</script>
<template>
    <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>

            <h2 class="text-2xl font-bold">Mi Perfil</h2>
        </div>
    </div>
    <p v-if="error.status && !error.data.length" class="bg-red-500 text-white p-3 my-4">
        {{ error.message }}
    </p>
    <form class="mt-5 space-y-4" @submit.prevent="handleUpdateProfile">
        <div class="space-y-1">
            <label for="name" class="text-gray-500">Nombres:</label>
            <input id="name" v-model="form.name" type="text" name="name" class="w-full p-2 border rounded-lg">
        </div>
        <div class="space-y-1">
            <label for="email" class="text-gray-500">Correo:</label>
            <input id="email" :value="user.email" type="email" name="email" readonly
                class="w-full p-2 border rounded-lg text-slate-400">
        </div>

        <p v-if="(user.google && !user.p)" class="text-amber-600">Ingresa una contraseña, así podrás ingresar con
            ella aparte de tu cuenta de google.
        </p>
        <div v-if="(user.p)" class="space-y-1">
            <label for="old_password" class="text-gray-500">Contraseña anterior:</label>
            <input id="old_password" v-model="form.old_password" type="password" name="old_password"
                class="w-full p-2 border rounded-lg">
        </div>

        <div class="space-y-1">
            <label for="new_password" class="text-gray-500">Nueva contraseña:</label>
            <input id="new_password" v-model="form.new_password" type="password" name="new_password"
                class="w-full p-2 border rounded-lg">
        </div>

        <div class="space-y-1">
            <label for="new_password_confirmation" class="text-gray-500">Confirmar ontraseña:</label>
            <input id="new_password_confirmation" v-model="form.new_password_confirmation" type="password"
                name="new_password_confirmation" class="w-full p-2 border rounded-lg">
            <template v-if="error.status && error.data.length"
                v-for="err in error.data.filter(err => err.param === 'new_password_confirmation')">
                <small class="text-red-600 block">{{ err.msg }}</small>
            </template>
        </div>

        <p v-if="user.google" class="text-teal-500">Cuenta de google asociada a la cuenta.</p>

        <button type="submit" class="p-3 border w-full bg-teal-600 text-white font-semibold">
            Actualizar
        </button>
    </form>
</template>