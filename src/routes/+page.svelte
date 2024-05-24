<script lang="ts">
	import Typewriter from 'svelte-typewriter';
    import { Button } from '$lib/components/ui/button'
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Card from "$lib/components/ui/card";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    
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

<nav class="fixed w-full top-0 left-0">
<ul class="flex">
    <li class="flex-1 mr-2">
        <a class="text-center block border border-border rounded py-2 px-4 bg-primary hover:bg-ring text-primary-foreground" 
        href="#home-hero" on:click={handleAnchorClick}>Home</a>
    </li>
    <li class="flex-1 mr-2">
        <a class="text-center block border border-border rounded bg-secondary text-secondary-foreground hover:bg-muted-foreground py-2 px-4" 
        href="#about" on:click={handleAnchorClick}>About Me</a>
    </li>
    <li class="text-center flex-1">
        <a class="text-center block border border-border rounded bg-secondary text-secondary-foreground hover:bg-muted-foreground py-2 px-4" 
        href="#" on:click={handleAnchorClick}>Contact</a>
    </li>
</ul>
</nav>


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
    <Button href="#about" variant="ghost" on:click={handleAnchorClick} class="left-1/2 -translate-x-1/2 bottom-10 absolute">About Me</Button>
</div>

<h2 id="about" class="text-4xl">About Me</h2>
<div class="container grid grid-rows-3 grid-cols-3 gap-4">
    <div class="col">
        <Avatar.Root>
            <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
            <Avatar.Fallback>CN</Avatar.Fallback>
        </Avatar.Root>
    </div>
    <div>
        <Card.Root>
            <Card.Header>
                <Card.Title>About Me</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Card Content</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card.Root>
    </div>
    <div class="row-span-2">
        <Card.Root class="h-full">
            <Card.Header>
                <Card.Title>Skills</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Card Content</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card.Root>
    </div>
    <div class="col-span-2">
        <Card.Root>
            <Card.Header>
                <Card.Title>Hobbies</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Card Content</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card.Root>
    </div>
    <div></div>
    <div>
        <Carousel.Root class="h-full">
            <Carousel.Content>
                <Carousel.Item>
                    <Card.Root>
                        <Card.Content>1</Card.Content>
                    </Card.Root>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Root>
                        <Card.Content>2</Card.Content>
                    </Card.Root>
                </Carousel.Item>
                <Carousel.Item>
                    <Card.Root>
                        <Card.Content>3</Card.Content>
                    </Card.Root>
                </Carousel.Item>
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
        </Carousel.Root>
    </div>
    <div></div>
    <div class="col-span-3">
        <Card.Root>
            <Card.Header>
                <Card.Title>My Story</Card.Title>
                <Card.Description>Card Description</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>Card Content</p>
            </Card.Content>
            <Card.Footer>
                <p>Card Footer</p>
            </Card.Footer>
        </Card.Root>
    </div>

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
