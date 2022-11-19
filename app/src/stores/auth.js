import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(false);
    const loading = ref(false);
    const user = ref(null);
    const token = ref('');
    const error = reactive({
        status: false,
        message: '',
        data: null,
    });

    async function validateToken() {
        console.log('Validar token con el back');
    }

    async function login(email, password) {
        error.status = false;
        loading.value = true;

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.status > 300) throw new Error(data.message);

            user.value = data.user;
            token.value = data.token;
            isAuthenticated.value = true;

            this.router.push({ name: 'projects' });
        } catch (err) {
            error.status = true;
            error.message = err.message;
        } finally {
            loading.value = false;
        }
    }

    async function register(name, email, password, password_confirmation) {
        error.status = false;
        loading.value = true;

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    password_confirmation,
                }),
            });

            const data = await response.json();

            if (response.status > 300) {
                if (data.errors) {
                    error.data = data.errors;
                }
                throw new Error(data.message);
            }

            user.value = data.user;
            token.value = data.token;
            isAuthenticated.value = true;

            this.router.push({ name: 'projects' });
        } catch (err) {
            error.status = true;
            error.message = err.message;
        } finally {
            loading.value = false;
        }
    }

    function logout() {
        isAuthenticated.value = false;
        user.value = null;
        token.value = '';

        this.router.push({ name: 'login' });
    }

    return {
        isAuthenticated,
        loading,
        error,
        user,
        token,
        validateToken,
        login,
        register,
        logout,
    };
});
