<script>
    export let id;
    
    import { experiences } from "../data/experiences.js";
    let hoveredExperience = null;
</script>

<main class="mx-6 text-left">
    <h2 class="my-12 block lg:hidden text-lightest-slate text-xs font-bold uppercase">Experience</h2>
    <div id={id} class="my-4 mx-auto max-w-3xl text-light-slate">
        {#each experiences as experience (experience.id)}
        <article class="my-8 flex flex-col sm:flex-row items-start gap-4 {hoveredExperience !== null && experience !== hoveredExperience ? 'fade' : ''}"
            on:mouseenter={() => hoveredExperience = experience}
            on:mouseleave={() => hoveredExperience = null}
            on:click={() => window.open(experience.url, '_blank')}
        >
            <div>
                <h3 class="font-medium {hoveredExperience === experience ? 'text-blue' : 'text-white'}">
                    {experience.title}
                </h3> 
                <div class="bg-transparent py-4 rounded text-slate-200 text-sm w-24 flex-shrink-0 sm:order-none mt-2 sm:mt-0">
                    {experience.duration}
                </div>
                <p>
                    {experience.text}
                    {#if experience.link}
                        <a 
                            class="highlight text-white hover:text-blue" 
                            href={experience.link} 
                            target="_blank"
                            on:click|stopPropagation
                        >
                            {experience.linkText}
                        </a>
                        {experience.afterLinkText}
                    {/if}
                    {#if experience.secondLink}
                        <a 
                            class="highlight text-white hover:text-blue" 
                            href={experience.secondLink} 
                            target="_blank"
                            on:click|stopPropagation
                        >
                            {experience.secondLinkText}
                        </a>
                        {experience.afterSecondLinkText}
                    {/if}
                </p>
                <ul class="mt-2 flex flex-wrap" aria-label="Technologies used" style="padding-left: 0;">
                {#each experience.technologies as technology}
                    <li class="mr-1.5 mt-2">
                    <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue">
                        {technology}
                    </div>
                    </li>
                {/each}
                </ul>
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
    }

    .fade {
        opacity: 0.5;
    }
</style>
