<script lang="ts">
    import { theme, toggleTheme } from "$lib/stores/theme.svelte";
    import { page } from "$app/stores";

    let mobileOpen = $state(false);

    let navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
    ];

    function linkClass(href: string) {
        const base =
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200";
        if ($page.url.pathname === href) {
            return `${base} bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white`;
        }
        return `${base} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800`;
    }
</script>

<nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <a href="/" class="flex items-center gap-2.5">
                <div
                    class="size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
                >
                    <svg
                        class="size-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>
                <span class="text-lg font-bold text-gray-900 dark:text-white"
                    >StarterKit</span
                >
            </a>

            <!-- Desktop nav -->
            <div class="hidden md:flex items-center gap-1">
                {#each navLinks as link}
                    <a href={link.href} class={linkClass(link.href)}>
                        {link.label}
                    </a>
                {/each}
            </div>

            <!-- Right side: theme toggle + mobile hamburger -->
            <div class="flex items-center gap-2">
                <button
                    onclick={toggleTheme}
                    class="p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    aria-label="Toggle dark mode"
                >
                    {#if theme === "dark"}
                        <svg
                            class="size-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                    {:else}
                        <svg
                            class="size-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    {/if}
                </button>

                <!-- Mobile hamburger -->
                <button
                    onclick={() => (mobileOpen = !mobileOpen)}
                    class="md:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                    aria-label="Toggle menu"
                >
                    <svg
                        class="size-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {#if mobileOpen}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        {:else}
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        {/if}
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    {#if mobileOpen}
        <div
            class="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
        >
            <div class="px-4 py-3 space-y-1">
                {#each navLinks as link}
                    <a
                        href={link.href}
                        onclick={() => (mobileOpen = false)}
                        class={linkClass(link.href) +
                            " block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"}
                    >
                        {link.label}
                    </a>
                {/each}
            </div>
        </div>
    {/if}
</nav>
