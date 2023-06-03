<script>
    export let id;

    import description from '../data/about.js';
</script>

<main class="mx-6 text-left">
    <div id={id} class="my-4 mx-auto max-w-3xl text-light-slate">
        {#each description as paragraph, i (i)}
            <p class="mb-4">
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
