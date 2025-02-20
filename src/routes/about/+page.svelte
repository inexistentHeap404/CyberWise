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
        gap: 3rem;
        margin: 10%;
        opacity: 0;
        animation: animation 1s forwards;
    }
    .tagline{
        font-size: 220%;
        font-weight: bolder;
        text-shadow: 0px 0px 20px rgb(255, 255, 255);
    }
    .runningtext{
        font-size: 130%;
    }

    @keyframes animation{
        from{
            transform: translateY(-100px);
            opacity: 0;
        }
        to{
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>

<script>
    import { onMount } from "svelte";
    let text = "CyberWise is an initiative created to help the general public learn about safe ways of using the internet. Strong passwords, Two-Factor authentication, reporting phishing mails are some lessons that you will learn in this journey. Along with byte sized lessons play games and see how it's done."
    let speed = 20; 
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
    <div class="tagline">
      About 
    </div>
    <div class="runningtext">{displayedText}</div>
</div>