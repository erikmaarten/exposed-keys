<script lang="ts">
    import "../app.css";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { theme } from "$lib/stores/theme.svelte";

    let { children } = $props();
</script>

<Navbar />

<main class="min-h-screen pt-16">
    {@render children()}
</main>

<Footer />
