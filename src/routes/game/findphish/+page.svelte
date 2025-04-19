<script>
    import { onMount } from "svelte";
    
    let text = "Find the phishing mail is a game aimed to help email users identify the phishing mail amongst the legitimate ones. You are working in a high security system in your company which is targeted by many hackers. The working hours is a blessing in disguise for the hackers as they send a lot of phishing mails which arrive to your machine. A series of 10 mails will be given and you have read through the 10 of them and identify the phishing mail.";
    let speed = 30; 
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
  
<style>
    .parent {
    width:80vw;
    margin: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    gap: 4rem;
    }
    * {
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.subh {
    font-size: xx-large;
    text-shadow: 0px 0px 10px rgb(255, 255, 255);
}
.subi {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: large;
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
</style>

  <div class="parent">
    <div class="subh">Find the Phishing Mail</div>
    <div class="subi">{displayedText}</div>
    <a href="/CyberWise/game/findphish/src_phish">
      <button id="b">Play!</button>
    </a>
  </div>
  