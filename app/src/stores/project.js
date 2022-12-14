import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

const PROJECTS_API_URL = `${import.meta.env.VITE_API_URL}/projects`;
const TASKS_API_URL = `${import.meta.env.VITE_API_URL}/tasks`;

const authStore = useAuthStore();

export const useProjectStore = defineStore('projects', () => {
    const loading = ref(false);
    const projects = ref([]);
    const project = ref(null);
    const error = reactive({
        status: false,
        message: '',
        data: [],
    });

    function incompleteTasks() {
        return project.value.todos.filter((todo) => todo.completedAt).length;
    }

    async function getProjectById(uid) {
        loading.value = true;

        try {
            const response = await fetch(`${PROJECTS_API_URL}/${uid}`, {
                method: 'GET',
                headers: {
                    token: authStore.token,
                },
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            const data = await response.json();

            project.value = data;
        } catch (err) {
            console.log(err);
        } finally {
            loading.value = false;
        }
    }

    async function all() {
        loading.value = true;

        try {
            const response = await fetch(`${PROJECTS_API_URL}`, {
                method: 'GET',
                headers: {
                    token: authStore.token,
                },
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            const data = await response.json();

            projects.value = data.projects;
        } catch (err) {
            console.log(err);
        } finally {
            loading.value = false;
        }
    }

    async function save(name) {
        try {
            const response = await fetch(`${PROJECTS_API_URL}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    token: authStore.token,
                },
                body: JSON.stringify({
                    name,
                }),
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            this.router.push({ name: 'projects' });
        } catch (err) {}
    }

    async function destroy(uid) {
        loading.value = true;

        try {
            const response = await fetch(`${PROJECTS_API_URL}/${uid}`, {
                method: 'DELETE',
                headers: {
                    token: authStore.token,
                },
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            projects.value = projects.value.filter(
                (project) => project.uid !== uid
            );
        } catch (err) {
            console.log(err);
        } finally {
            loading.value = false;
        }
    }

    async function saveTask(projectId, title) {
        try {
            const response = await fetch(`${TASKS_API_URL}`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    token: authStore.token,
                },
                body: JSON.stringify({
                    title,
                    projectId,
                }),
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            const data = await response.json();

            project.value.todos = [...project.value.todos, data.task];
        } catch (err) {}
    }

    async function updateTask(taskId) {
        try {
            const response = await fetch(`${TASKS_API_URL}/${taskId}`, {
                method: 'PATCH',
                mode: 'cors',
                headers: {
                    'Content-type': 'application/json',
                    token: authStore.token,
                },
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            const data = await response.json();

            project.value.todos.forEach((todo) => {
                if (todo._id === taskId) {
                    todo.completedAt = data.completedAt;
                }
            });
        } catch (err) {}
    }

    async function destroyTask(uid) {
        loading.value = true;

        try {
            const response = await fetch(`${TASKS_API_URL}/${uid}`, {
                method: 'DELETE',
                headers: {
                    token: authStore.token,
                },
            });

            if (response.status >= 300) {
                throw new Error('Token no válido.');
            }

            project.value.todos = project.value.todos.filter(
                (todo) => todo._id !== uid
            );
        } catch (err) {
            console.log(err);
        } finally {
            loading.value = false;
        }
    }

    return {
        loading,
        projects,
        project,
        error,
        getProjectById,
        all,
        save,
        destroy,
        incompleteTasks,
        saveTask,
        updateTask,
        destroyTask,
    };
});
