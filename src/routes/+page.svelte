<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<div id="home-hero">
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

<style>
	#home-hero {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
