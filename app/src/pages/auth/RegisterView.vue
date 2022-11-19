<script setup>
import { storeToRefs } from 'pinia';
import {reactive} from 'vue';
import {useAuthStore} from '../../stores/auth';

const store = useAuthStore();

const {error} = storeToRefs(store);

const form = reactive({
    name: 'ca',
    email: 'carl@mail.com',
    password: 'password',
    password_confirmation: 'passwordd'
});

const handleRegister = async () => {
    await store.register(form.name, form.email, form.password, form.password_confirmation)
};

</script>
<template>
  <div class="w-2/6 mx-auto">
    <h2 class="text-center text-2xl font-bold uppercase">
      Registrarse
    </h2>
    <form
      @submit.prevent="handleRegister"
      class="mt-5 space-y-2"
    >
      <div class="space-y-1">
        <label
          for="name"
          class="text-gray-500"
        >Nombres:</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          name="name"
          placeholder="Homero..."
          class="w-full p-2 border rounded-lg"
        >
        <small v-if="error.data" class="text-red-600">errores</small>
      </div>

      <div class="space-y-1">
        <label
          for="email"
          class="text-gray-500"
        >Correo:</label>
        <input
          id="email"
          v-model="form.email"
          type="text"
          name="email"
          placeholder="homero@mail.com"
          class="w-full p-2 border rounded-lg"
        >
        <small class="text-red-600">errores</small>
      </div>

      <div class="space-y-1">
        <label
          for="password"
          class="text-gray-500"
        >Contraseña:</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          name="password"
          placeholder="*******"
          class="w-full p-2 border rounded-lg"
        >
        <small class="text-red-600">errores</small>
      </div>

      <div class="space-y-1">
        <label
          for="password_confirmation"
          class="text-gray-500"
        >Confirmar Contraseña:</label>
        <input
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          name="password_confirmation"
          placeholder="*******"
          class="w-full p-2 border rounded-lg"
        >
        <small class="text-red-600">errores</small>
      </div>
      <button
        type="submit"
        class="mt-3 p-3 border w-full bg-indigo-600 text-white font-semibold"
      >
        Enviar
      </button>
    </form>
    <router-link
      to="/ingresar"
      class="mt-3 block text-sm text-blue-600"
    >
      ¿Ya tienes una cuenta?
    </router-link>
  </div>
</template>