<script setup>
import { storeToRefs } from 'pinia';
import { reactive } from 'vue'
import { useAuthStore } from '../../stores/auth';
const store = useAuthStore()

const { loading, error } = storeToRefs(useAuthStore())

const form = reactive({
    email: 'homero@mail.com',
    password: 'password'
});

const handleLogin = async () => {
    await store.login(form.email, form.password)
};
</script>
<template>
  <div class="w-2/6 mx-auto">
    <h2 class="text-center text-2xl font-bold uppercase">
      Ingresar
    </h2>
    <p
      v-if="error.status && !error.data.length"
      class="bg-red-500 text-white p-3 my-4"
    >
      {{ error.message }}
    </p>
    <form
      class="mt-5 space-y-2"
      @submit.prevent="handleLogin"
    >
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
        <template v-if="error.status && error.data.length" v-for="err in error.data.filter(err => err.param === 'email')">
            <small class="text-red-600 block">{{ err.msg }}</small>
        </template>
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
        <template v-if="error.status && error.data.length" v-for="err in error.data.filter(err => err.param === 'password')">
            <small class="text-red-600 block">{{ err.msg }}</small>
        </template>
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="mt-3 p-3 border w-full bg-indigo-600 text-white font-semibold"
      >
        Ingresar
      </button>
    </form>
    <router-link
      to="/registrarse"
      class="mt-3 block text-sm text-blue-600"
    >
      ¿No tienes una cuenta?
    </router-link>
  </div>
</template>