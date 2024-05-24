<script lang="ts">
	import Typewriter from 'svelte-typewriter';
    import { Button } from '$lib/components/ui/button'
    import Page from './+page.svelte';

    let slide;
</script>

<Page bind:this={slide} />

<div id="home-hero">
    <div id="home-hero__content">
        <span class="mb-4 text-center leading-none dark:text-white md:text-5xl lg:text-6xl"
            ><h1>Joseph Budney</h1></span
        >
        <div class="text-center leading-loose flex text-4xl dark:text-white">
            <p class="">I do... &nbsp;</p>
            <div class="text-primary">
                <Typewriter mode="loop" --cursor-color="white">
                    <h2>front-end</h2>
                    <h2>back-end</h2>
                    <h2>freelance</h2>
                    <h2>it all... except design</h2>
                </Typewriter>
            </div>
        </div>
    </div>
    <Button href="#about" variant="ghost" on:click={slide.handleAnchorClick} class="left-1/2 -translate-x-1/2 bottom-10 absolute">Learn more about what I do</Button>
</div>

<style>
    #home-hero{
        height: 100vh;
        min-height: 80vh;
        max-height: 120vh;
    }
	#home-hero__content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>