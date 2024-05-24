<script lang="ts">
    export function handleAnchorClick (event: { preventDefault: () => void; currentTarget: any; }) {
        event.preventDefault();
        const link = event.currentTarget;
        const anchorId: string = new URL(link.href).hash.replace('#', '');
        const anchor: HTMLElement | null = document.getElementById(anchorId)
        if(anchor){
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth'
            })
        }
    }

</script>