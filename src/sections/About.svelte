<script>
    export let id;

    import description from '../data/about.js';
</script>

<main class="mx-6 text-left">
    <h2 class="my-12 block lg:hidden text-lightest-slate text-xs font-bold uppercase">About</h2>
    <div id={id} class="my-4 mx-auto max-w-3xl text-light-slate">
        {#each description as paragraph, i (i)}
            <p class="my-8 mb-4">
                {paragraph.text}
                {#if paragraph.link}
                    <a class="highlight text-white hover:text-blue" href={paragraph.link} target="_blank">{paragraph.linkText}</a>
                    {paragraph.afterLinkText}
                {/if}
                {#if paragraph.secondLink}
                    <a class="highlight text-white hover:text-blue" href={paragraph.secondLink} target="_blank">{paragraph.secondLinkText}</a>
                    {paragraph.afterSecondLinkText}
                {/if}
            </p>
        {/each}
    </div>
</main>

<style>
    main {
        margin: 0 1rem;
    }

    .highlight {
        font-weight: bold;
        transition: color 0.3s;
    }
</style>
