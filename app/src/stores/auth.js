import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL;

export const useAuthStore = defineStore('auth', () => {
    const isAuthenticated = ref(localStorage.getItem('user') ? true : false);
    const loading = ref(false);
    const user = ref(
        localStorage.getItem('user')
            ? JSON.parse(localStorage.getItem('user'))
            : null
    );
    const token = ref(localStorage.getItem('token') || '');
    const error = reactive({
        status: false,
        message: '',
        data: [],
    });

    async function validateToken() {
        try {
            const response = await fetch(`${API_URL}/validate-token`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    token: token.value,
                }),
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }
        } catch (err) {
            isAuthenticated.value = false;
            user.value = null;
            token.value = '';

            localStorage.clear();
        }
    }

    async function login(email, password) {
        error.status = false;
        loading.value = true;

        try {
            const response = await fetch(`${API_URL}/login`, {
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

            if (response.status > 300) {
                if (data.errors) {
                    error.data = data.errors;
                }

                throw new Error(data.message);
            }

            user.value = data.user;
            token.value = data.token;
            isAuthenticated.value = true;
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);

            this.router.push({ name: 'projects' });
        } catch (err) {
            error.status = true;
            error.message = err.message;
        } finally {
            loading.value = false;
        }
    }

    async function googleLogin(credential) {
        error.status = false;
        loading.value = true;

        try {
            const response = await fetch(`${API_URL}/google/signin`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ credential }),
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
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);

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

        localStorage.clear();

        this.router.push({ name: 'login' });
    }

    async function updateProfile({
        name,
        old_password,
        new_password,
        new_password_confirmation,
    }) {
        error.status = false;
        loading.value = true;

        try {
            const response = await fetch(`${API_URL}/user/profile`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    token: token.value,
                },
                body: JSON.stringify({
                    name,
                    old_password,
                    new_password,
                    new_password_confirmation,
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
            localStorage.setItem('user', JSON.stringify(data.user));
        } catch (err) {
            error.status = true;
            error.message = err.message;
        } finally {
            loading.value = false;
        }
    }

    return {
        isAuthenticated,
        loading,
        error,
        user,
        token,
        validateToken,
        login,
        googleLogin,
        register,
        logout,
        updateProfile,
    };
});
