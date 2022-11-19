<script setup>
import { storeToRefs } from 'pinia';
import { useAuthStore } from '../stores/auth';
const store = useAuthStore();

const { isAuthenticated } = storeToRefs(store);

const handleLogout = () => {
    store.logout()
}

</script>
<template>
  <header class="flex justify-between items-center p-5 bg-indigo-400 text-white font-bold">
    <div class="flex items-center space-x-3">
      <router-link to="/">
        <img
          src="../assets/vue.svg"
          class="logo vue"
          alt="Vue logo"
        >
      </router-link>
      <nav>
        <ul class="flex space-x-3">
          <li>
            <router-link to="/">
              Inicio
            </router-link>
          </li>
          <li v-if="isAuthenticated">
            <router-link to="/proyectos">
              Proyectos
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
    <ul class="flex items-center space-x-4">
        <template v-if="isAuthenticated">
            <li>Hola Homero Simpson</li>
            <li>
                <button @click="handleLogout" class="bg-red-400 p-3">Salir</button>
            </li>
        </template>
        <template v-else>
            <li>
                <router-link
                    to="/ingresar"
                    class="bg-amber-600 p-3"
                >
                    Iniciar Sesión
                </router-link>
            </li>
            <li>
                <router-link
                    to="/registrarse"
                    class="bg-red-600 p-3"
                >
                    Registrarse
                </router-link>
            </li>
        </template>
    </ul>
  </header>
</template>