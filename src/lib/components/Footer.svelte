<footer
    class="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
            class="flex flex-col md:flex-row items-center justify-between gap-4"
        >
            <div class="flex items-center gap-2.5">
                <div
                    class="size-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"
                >
                    <svg
                        class="size-4 text-white"
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
                <span
                    class="text-sm font-semibold text-gray-900 dark:text-white"
                    >StarterKit</span
                >
            </div>

            <p class="text-sm text-gray-500 dark:text-gray-500">
                Built with SvelteKit & Tailwind CSS
            </p>

            <div class="flex items-center gap-4">
                <a
                    href="https://kit.svelte.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                    SvelteKit Docs
                </a>
                <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                    Tailwind CSS
                </a>
            </div>
        </div>

        <div
            class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center"
        >
            <p class="text-xs text-gray-400 dark:text-gray-600">
                &copy; {new Date().getFullYear()} StarterKit. MIT License.
            </p>
        </div>
    </div>
</footer>
