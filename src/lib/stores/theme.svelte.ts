import { browser } from '$app/environment';

function getInitialTheme(): 'light' | 'dark' {
    if (!browser) return 'light';
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(t: 'light' | 'dark') {
    if (!browser) return;
    document.documentElement.classList.toggle('dark', t === 'dark');
}

let currentTheme = $state<'light' | 'dark'>(getInitialTheme());

applyTheme(currentTheme);

export function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme(currentTheme);
}

export const theme = {
    get value() { return currentTheme; }
};

// Listen for system preference changes
if (browser) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            applyTheme(currentTheme);
        }
    });
}