<script>
  import { onMount } from "svelte";
  
  let text = "Crack the Password is a game aimed to teach the importance of strong and lengthier passwords.\nYou are tasked with a mission on breaking into a high security vault which is protected by a 4 digit number.\nYou start by guessing the 4 digit number after which you get an acknowledgement about the count of right numbers and whichever are in the right places. Based on the given outputs you have to find out which numbers to use and where to use the numbers. This game was inspired from a mobile game.";
  let speed = 30; 
  let index = 0;
  let displayedText = "";
  let opa = 0.0;
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
  
<style>
  * {
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .parent {
    width:80vw;
    margin: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 4rem;
  }

  .subh {
    font-size: xx-large;
    text-shadow: 0px 0px 10px rgb(255, 255, 255);
  }
  .subi {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 130%;
  }
  button{
    box-shadow: 0 0 10px rgb(124, 124, 255);
    background-color: rgb(124, 124, 255);
    padding: 20px 60px 20px 60px;
    border: 0px solid transparent;
    border-radius: 20px;
    transition: all 0.3s ease;
    position: relative;
    bottom: 0;
  }
  button:hover{
    box-shadow: 0 0 10px rgb(255, 255, 255);
    background-color: white;
    color: black;
    padding: 20px 60px 20px 60px;
    border: 0px solid transparent;
    border-radius: 20px;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
</style>

<div class="parent">
  <div class="subh">Crack the Password</div>
  <div class="subi">{displayedText}</div>
  <a href="/game/crackpass/src_crack_pass">
  <button id="b">Play!</button>
  </a>
</div>
  