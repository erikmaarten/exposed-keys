<script lang="ts">
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>About — StarterKit</title>
    <meta
        name="description"
        content="Learn more about the SvelteKit StarterKit template and its features."
    />
</svelte:head>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div class="text-center mb-16">
        <h1
            class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
        >
            About This Template
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A carefully crafted starting point for your next SvelteKit project.
        </p>
    </div>

    <div class="space-y-12">
        <div class="prose prose-gray dark:prose-invert max-w-none">
            <div class="grid md:grid-cols-2 gap-8">
                <div
                    class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                    <h2
                        class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                    >
                        ✨ What's Included
                    </h2>
                    <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            SvelteKit 2 with Svelte 5 runes ($state, $derived, $props)
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            TypeScript strict mode throughout
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            Tailwind CSS v4 with dark mode
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            Responsive mobile navigation
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            SEO-friendly meta tags and semantic HTML
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            Fluid typography and smooth transitions
                        </li>
                    </ul>
                </div>

                <div
                    class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                >
                    <h2
                        class="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                    >
                        📦 Tech Stack
                    </h2>
                    <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            <strong class="text-gray-900 dark:text-white"
                                >Framework:</strong
                            > SvelteKit 2
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            <strong class="text-gray-900 dark:text-white"
                                >Language:</strong
                            > TypeScript
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            <strong class="text-gray-900 dark:text-white"
                                >Styling:</strong
                            > Tailwind CSS v4
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            <strong class="text-gray-900 dark:text-white"
                                >Build:</strong
                            > Vite 6
                        </li>
                        <li class="flex items-start gap-2">
                            <span class="text-indigo-500 mt-0.5">•</span>
                            <strong class="text-gray-900 dark:text-white"
                                >Deploy:</strong
                            > Adapter-Auto
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="text-center pt-8">
            <a
                href="/"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200"
            >
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
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to Home
            </a>
        </div>
    </div>
</section>
