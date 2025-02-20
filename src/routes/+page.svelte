
<style>
    *{
        color: whitesmoke;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .parent{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    }
    .tagline{
        font-size: xx-large;
        font-weight: bolder;
        text-shadow: 0px 0px 20px rgb(255, 255, 255);
    }
</style>

<script>
    import { onMount } from "svelte";
    let text = "Stay ahead of threats, Stay safe online."
    let speed = 40; 
    let index = 0;
    let displayedText = "";
  
    function typeEffect() {
      if (index < text.length) {
        displayedText += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
      } 
    }
  
    onMount(() => {
      typeEffect();
    });
</script>

<div class="parent">
    <div class="tagline">{displayedText}</div>
      
</div>
<div class="parent">
    <div class="tagline">
        Learn safe ways to browse the internet
    </div>
    <div class="tagline">
        through games and byte sized lessons on cyber threats and security
    </div>
</div>