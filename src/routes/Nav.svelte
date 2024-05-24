<script lang="ts">
    import Page from './+page.svelte';

    let slide;
</script>

<Page bind:this={slide} />

<nav class="fixed w-full top-0 left-0">
    <ul class="flex">
        <li class="flex-1 mr-2">
            <a class="text-center block border border-border rounded py-2 px-4 bg-primary hover:bg-ring text-primary-foreground" 
            href="#home-hero" on:click={slide.handleAnchorClick}>Home</a>
        </li>
        <li class="flex-1 mr-2">
            <a class="text-center block border border-border rounded bg-secondary text-secondary-foreground hover:bg-muted-foreground py-2 px-4" 
            href="#about" on:click={slide.handleAnchorClick}>About Me</a>
        </li>
        <li class="text-center flex-1">
            <a class="text-center block border border-border rounded bg-secondary text-secondary-foreground hover:bg-muted-foreground py-2 px-4" 
            href="#contact" on:click={slide.handleAnchorClick}>Contact</a>
        </li>
    </ul>
</nav>