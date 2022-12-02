import { useAuthStore } from '../stores/auth';

const store = useAuthStore();

export const setupGoogleClient = (google, btn) => {
    google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: handleGoogleConnect,
    });
    google.accounts.id.renderButton(btn, {
        theme: 'filled_blue',
        size: 'large',
        locale: 'es-PE',
    });
    google.accounts.id.prompt();
};

const handleGoogleConnect = async ({ credential }) => {
    await store.googleLogin(credential);
};
