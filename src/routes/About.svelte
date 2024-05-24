<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar";
    import * as Card from "$lib/components/ui/card";
    import * as Carousel from "$lib/components/ui/carousel/index.js";
</script>

<h2 id="about" class="text-4xl">About Me</h2>
<div class="container grid grid-rows-3 grid-cols-3 gap-4">
    <div class="col">
        <Avatar.Root class="w-1/2 h-auto max-w-full mx-auto">
            <Avatar.Image src="/joe.jpg" alt="@shadcn" />
            <Avatar.Fallback>Joseph Budney</Avatar.Fallback>
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
</div>
