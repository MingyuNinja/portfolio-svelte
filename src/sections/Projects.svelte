<script>
    export let id;

    import { projects } from "../data/projects.js";
    let hoveredProjects = null;
    
    import { onMount } from 'svelte';

    let splineViewer;

    onMount(async () => {
        const module = await import('https://unpkg.com/@splinetool/viewer@0.9.356/build/spline-viewer.js');
        splineViewer = module.default;
    });
</script>

<main class="mx-6 text-left">
    <div id={id} class="my-4 mx-auto max-w-3xl text-light-slate">
        {#each projects as project (project.id)}
        <article class="my-4 p-4 flex items-start gap-4 {hoveredProjects !== null && project !== hoveredProjects ? 'fade' : ''}"
                on:mouseenter={() => hoveredProjects = project}
                on:mouseleave={() => hoveredProjects = null}
                on:click={() => window.open(project.url, '_blank')}
        >
            {#if project.videoSrc}
                <video width="96" height="54" autoplay loop muted>
                    <source src={project.videoSrc} type="video/webm" />
                </video>
            {:else if project.envdSrc}
                <spline-viewer width="96" height="96" url={project.envdSrc}></spline-viewer>
            {:else}
                <img alt="" loading="lazy" width="96" height="54" decoding="async" data-nimg="1" class="rounded border-2 border-slate-200/10 self-start" style="color:transparent" srcset={project.imageSrc} src={project.imageSrc} />
            {/if}
            <div>
                <h3 class="font-medium {hoveredProjects === project ? 'text-blue' : 'text-white'}">
                    {project.title}
                </h3>
                <p>{project.description}</p>
            </div>
        </article>
        {/each}
    </div>
</main>



<style>
    main {
        margin: 0 1rem;
        padding-top: 48px;
    }

    article {
        transition: opacity 0.3s ease-in-out;
        margin-bottom: 1rem;
    }

    .fade {
        opacity: 0.5;
    }
</style>
