<script lang="ts">
	import Typewriter from 'svelte-typewriter';
    import { Button } from '$lib/components/ui/button'
    
    function handleAnchorClick (event: { preventDefault: () => void; currentTarget: any; }) {
        event.preventDefault();
        const link = event.currentTarget;
        const anchorId: String = new URL(link.href).hash.replace('#', '');
        const anchor: HTMLElement = document.getElementById(anchorId)
        window.scrollTo({
            top: anchor.offsetTop,
            behavior: 'smooth'
        })
    }

</script>
<div id="home-hero">
    <div id="home-hero__content">
        <span class="mb-4 text-center leading-none dark:text-white md:text-5xl lg:text-6xl"
            ><h1>Joseph Budney</h1></span
        >
        <div class="text-center leading-loose flex text-4xl dark:text-white">
            <p class="">I do... &nbsp;</p>
            <div class="text-yellow-600">
                <Typewriter mode="loop" --cursor-color="white">
                    <h2> front-end</h2>
                    <h2> back-end</h2>
                    <h2> freelance</h2>
                    <h2> fun</h2>
                </Typewriter>
            </div>
        </div>
    </div>
    <Button href="#about" on:click={handleAnchorClick} class="left-1/2 -translate-x-1/2 bottom-10 absolute">About Me</Button>
</div>
<!-- svelte-ignore a11y-missing-content -->
<a id="about"></a>
<h2 class="text-4xl">About Me</h2>
<p class="w-4 mx-auto text-center">
    Lorem ipsum dolor sit amet, consectetur adipiscing 
    elit. Praesent tristique dui nec iaculis consectetur. 
    Fusce condimentum magna in condimentum rutrum. Fusce 
    risus ante, fringilla consectetur scelerisque a, luctus
    ac ante. Vivamus aliquam tincidunt dolor, a mollis
    justo. Fusce id magna at nisl lobortis porta vitae
    vitae nisi. Nulla vel lobortis ligula. Quisque quis
</p>
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
