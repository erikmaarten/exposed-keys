<script lang="ts">
    import { page } from "$app/stores";

    const features = [
        {
            icon: "⚡",
            title: "Lightning Fast",
            description:
                "SvelteKit delivers instant page loads with its fine-grained reactivity and compile-time optimizations.",
        },
        {
            icon: "🎨",
            title: "Tailwind CSS v4",
            description:
                "Utility-first CSS framework with the latest v4 features for rapid and beautiful UI development.",
        },
        {
            icon: "🌙",
            title: "Dark Mode",
            description:
                "Built-in dark mode with system preference detection and manual toggle, persisted across visits.",
        },
        {
            icon: "📱",
            title: "Fully Responsive",
            description:
                "Mobile-first design that looks stunning on every screen size, from phones to ultrawide monitors.",
        },
        {
            icon: "🔒",
            title: "Type Safe",
            description:
                "Full TypeScript support with strict mode for catching errors early and improving developer experience.",
        },
        {
            icon: "🚀",
            title: "Ready to Deploy",
            description:
                "Pre-configured for Vercel, Netlify, Cloudflare Pages, and more via the adapter pattern.",
        },
    ];
</script>

<svelte:head>
    <title>StarterKit — SvelteKit Template</title>
    <meta
        name="description"
        content="A modern SvelteKit starter template with Tailwind CSS, dark mode, and responsive design."
    />
    <meta
        name="keywords"
        content="sveltekit, starter, template, tailwindcss, dark mode"
    />
</svelte:head>

<section class="relative overflow-hidden">
    <!-- Hero background gradient -->
    <div
        class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 -z-10"
    ></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
        <div class="text-center max-w-3xl mx-auto">
            <div
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-8"
            >
                <span class="size-2 rounded-full bg-indigo-500 animate-pulse"
                ></span>
                SvelteKit + Tailwind v4
            </div>

            <h1
                class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
            >
                Build something
                <span
                    class="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
                    >amazing</span
                >
            </h1>

            <p
                class="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed"
            >
                A modern starter template with SvelteKit, TypeScript, Tailwind
                CSS v4, and dark mode. Fast, accessible, and ready to ship.
            </p>

            <div
                class="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
                <a
                    href="/about"
                    class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-base hover:bg-gray-800 dark:hover:bg-gray-100 shadow-lg shadow-gray-900/10 dark:shadow-white/10 transition-all duration-200 hover:scale-[1.02]"
                >
                    Get Started
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
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </a>
                <a
                    href="https://kit.svelte.dev/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-base hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                    Read the Docs
                </a>
            </div>
        </div>
    </div>

    <!-- Features section -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div class="grid md:grid-cols-3 gap-8">
            {#each features as feature}
                <div
                    class="group p-6 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
                >
                    <div
                        class="size-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    >
                        <span class="text-2xl">{feature.icon}</span>
                    </div>
                    <h3
                        class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
                    >
                        {feature.title}
                    </h3>
                    <p
                        class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                    >
                        {feature.description}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
