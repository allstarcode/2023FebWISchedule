<script lang="ts">
  import asterik from './assets/logo.svg';
  import Schedule from './lib/ScheduleParser.svelte';
  import anime from 'animejs';
  import { onMount } from 'svelte';

  let mainSchedule: HTMLDivElement;

  const toggleClassIfFound = (ele: Element, className: string) =>
    ele.classList.contains(className) ? ele.classList.toggle(className) : null;
  const toggleClassIfNotFound = (ele: Element, className: string) =>
    !ele.classList.contains(className) ? ele.classList.toggle(className) : null;

  const animateSchedule = () => {
    const allListItems = document.querySelectorAll(
      '#schedulecont > ul.collapsible > li'
    );
    anime({
      targets: allListItems,
      translateY: [250, 0],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 500,
      delay: anime.stagger(150),
    });
  };

  onMount(() => {
    animateSchedule()
  })
</script>

<main class="container">
  <div id="anchor" />
  <div class="row">
    <div class="col s12 center">
      <div class="title mainheader">
        <img id="titleAsterik" src={asterik} alt="ASC Asterik" />
        All Star Code 2023 WI Schedule
      </div>
    </div>
  </div>
  <ul class="collapsible">
    <div id="schedulecont" bind:this={mainSchedule}>
      <Schedule />
    </div>
  </ul>
  <button
    id="scrollToTop"
    class="waves-effect waves-light btn btn-medium"
    on:click={() =>
      document.getElementById('anchor').scrollIntoView({ behavior: 'smooth' })}
  >
    back to top
  </button>
</main>
