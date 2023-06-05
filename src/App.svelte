<script>
	import { onMount } from 'svelte';
	import { activeSection } from './data/store.js';
	import Home from './Home.svelte';
	import About from './sections/About.svelte';
	import Experience from './sections/Experience.svelte';
	import Projects from './sections/Projects.svelte';

	onMount(() => {
		const sections = ["about", "experience", "projects"];
		
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					activeSection.set(entry.target.id);
				}
			});
		}, { threshold: [ 0.4 ] });

		sections.forEach(section => {
			const element = document.getElementById(section);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			sections.forEach(section => {
				const element = document.getElementById(section);
				if (element) {
					observer.unobserve(element);
				}
			});
		};
	});

</script>

<main class="flex flex-col lg:flex-row justify-center mx-8 pt-24">
	<div class="flex flex-col lg:flex-row justify-between max-w-7xl"> <!-- center-column -->
		<div class="mb-4 lg:mb-0 lg:mr-8 flex-1 lg:sticky lg:top-24"> <!-- left-column -->
			<Home {activeSection}/>	
		</div>
		<div class="lg:ml-8 flex-1" id="scrollable-section"> <!-- right-column -->
			<About id="about"/>
			<Experience id="experience"/>
			<Projects id="projects"/>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		gap: 20px;
		padding-top: 96px;
	}

	#scrollable-section {
		overflow-y: scroll;
		height: calc(100vh - 96px); /* Adjust the height based on your layout */
		margin-right: -20px; /* Adjust the negative margin as per your preference */
		padding-right: 20px; /* Add padding to create space for the hidden scrollbar */
	}

	/* Custom styling for the scrollbar */
	#scrollable-section::-webkit-scrollbar {
		width: 0.5rem; /* Adjust the width of the scrollbar */
		background-color: transparent; /* Set the background color of the scrollbar */
	}

	#scrollable-section::-webkit-scrollbar-thumb {
		background-color: transparent; /* Set the color of the scrollbar thumb */	
	}


	.sticky {
		position: -webkit-sticky;
		position: sticky;
	}

    /* Responsive layout for narrow screens */
    @media (max-width: 1024px) {
        #scrollable-section {
            height: auto;
        }

        .sticky {
            position: relative;
        }
    }
</style>
