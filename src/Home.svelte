<script>
    let name = "Mingyu Park";
    let affiliation = "Master Candidate, Seoul National University ECE";
    let description = "Dedicated to democratizing high-tech innovation.";

    import github from "./assets/svg/github.svg";
    import scholar from "./assets/svg/scholar.svg";
    import gmail from "./assets/svg/gmail.svg";
    
    import { activeSection } from "./data/store.js"; // import the store
    let hoveredSection = null; // Add this line
</script>

<main class="mx-6 text-left">
    <div class="my-4 mx-auto max-w-3xl">
        <!-- Main Contents -->
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            <a href="/">{name}</a>
        </h1>
        <h2 class="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">{affiliation}</h2>
        <p class="mt-4 max-w-md leading-normal text-light-slate">{description}</p>    
        <!-- Below is the Navigation Bar -->
        <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
                <li>
                    <a
                    on:mouseenter={() => hoveredSection = 'about'}
                    on:mouseleave={() => hoveredSection = null}
                    class="group flex items-center py-3 {(hoveredSection === 'about' || (!hoveredSection && $activeSection === 'about')) ? 'active-text' : ''}"
                    href="#about"
                    >
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-lightest-slate group-hover:text-slate-200 group-focus-visible:text-slate-200"
                        >
                            <span class="line"></span>
                            <span>About</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                    on:mouseenter={() => hoveredSection = 'experience'}
                    on:mouseleave={() => hoveredSection = null}
                    class="group flex items-center py-3 {(hoveredSection === 'experience' || (!hoveredSection && $activeSection === 'experience')) ? 'active-text' : ''}"
                    href="#experience"
                    >
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-lightest-slate group-hover:text-slate-200 group-focus-visible:text-slate-200"
                        >
                            <span class="line"></span>
                            <span>Experience</span>
                        </span>
                    </a>
                </li>
                <li>
                    <a
                    on:mouseenter={() => hoveredSection = 'projects'}
                    on:mouseleave={() => hoveredSection = null}
                    class="group flex items-center py-3 {(hoveredSection === 'projects' || (!hoveredSection && $activeSection === 'projects')) ? 'active-text' : ''}"
                    href="#projects"
                    >
                        <span class="nav-text text-xs font-bold uppercase tracking-widest text-lightest-slate group-hover:text-slate-200 group-focus-visible:text-slate-200"
                        >
                            <span class="line"></span>
                            <span>Projects</span>
                        </span>
                    </a>
                </li>
            </ul>
        </nav>     
        <!-- Below are the links -->
        <div id="title-socials" class="flex space-x-4 mt-16" data-animate>
            <a href="mailto:mingyuninja@sillylabs.xyz?subject=Example%20Subject&body=Hello%20World" target="_blank" rel="noopener noreferrer">
                <img class="icon" src={gmail} alt="gmail" />
            </a>
            <a href="https://scholar.google.com/citations?user=V69oGVEAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <img class="icon" src={scholar} alt="scholar" />
            </a>
            <a href="https://github.com/MingyuNinja" target="_blank" rel="noopener noreferrer">
                <img class="icon" src={github} alt="github" />
            </a>
        </div>  
    </div>
</main>

<style>
    main {
        gap: 20px;
        margin: 0 1rem;
    }

    .line {
        display: inline-block;
        height: 1px;
        width: 20px;
        background-color: currentColor;
        vertical-align: middle;
        transition: width 0.3s ease-in-out;
        margin-right: 5px;  /* Add some space between line and text */
    }
    .active-text .line {
        width: 80px;
    }

    .icon {
        width: 30px; /* adjust to desired size */
        height: 30px; /* adjust to desired size */
        opacity: 0.4; /* adjust to desired opacity */
        transition: opacity 0.3s ease-in-out; /* for smooth transition */
    }
    .icon:hover {
        opacity: 0.8; /* adjust to desired opacity */
    }
</style>
