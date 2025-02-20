
<script>
    let input = $state("");
    let secret = $state("");
    let flag = $state();
    let correct_value_number = $state(0);
    let correct_value_index = $state(0);
    let already_present = $state([]);
    let number_of_turns_left = $state(8);
    function getRandom(){
        return Math.floor(Math.random()*10);
    }
    function generateSecret(){
        for(var i = 0; i < 4; i++){
            let random_value = getRandom();
            if($state.snapshot(secret).includes(random_value+"")){
                i--;
            }
            else{
                secret += random_value;
            }
        }
    }
    function handleClick(value){
        if($state.snapshot(input).length < 3)
            input += value;
        else{
            input += value;
            checkInput();
        }
    }
    function checkInput(){
        if($state.snapshot(input) == $state.snapshot(secret))
            flag = 2;
        else{
            flag = 0;
            correct_value_index = 0;
            correct_value_number = 0;
            for(var i = 0; i < $state.snapshot(input).length; i++){
                if($state.snapshot(secret).includes($state.snapshot(input)[i])){
                    correct_value_number++;
                    if($state.snapshot(secret).indexOf($state.snapshot(input)[i]) == i){
                        correct_value_index++;
                    }
                }
            }
            already_present.push("<div> for <b>" + input + "</b> there are <b>" + correct_value_number + "</b> number/s that are present in the secret code and <b>" + correct_value_index + "</b> number/s at the right position" + "</div> <br>");
        }
        if(number_of_turns_left == 0){
            flag = -1;
            already_present = ["<div> You have had your chances, The warden is coming for you, better start running... oh no. Look behind you!!!!! the code was " + secret + "</div>"]
        }
        number_of_turns_left--;
        input = "";
    }
    generateSecret();
</script>

<style>
    *{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .game{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        top: 20vh;
        gap: 2rem;
    }
    .password_field{
        display: flex;
        gap: 1rem;
    }
    .password{
        width: 50px;
        height: 50px;
        border: 3px solid rgb(124, 124, 255);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgb(124, 124, 255);
        box-shadow: 0 0 10px rgb(124, 124, 255);
    }
    .subh {
        font-size: xx-large;
        text-shadow: 0px 0px 10px rgb(255, 255, 255);
        color: white;
    }
    .numpad{
        display: flex;
        flex-direction: column;
        color: white;
        margin-left: 2px;
    }
    .numpadrow{
        display: flex;
    }
    .button{
        width: 62px;
        height: 62px;
        padding: 10px;
        background-color: rgb(124, 124, 255);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        border: 0px solid transparent;
        border-radius: 10px;
        transition: all 0.4s ease;
    }
    .button:hover{
        background-color: white;
        font-size: xx-large;
        color: rgb(124, 124, 255);
        user-select: none;
    }
    .parent{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4rem;
    }
    .info{
        position: relative;
        top: 22vh;
        width: 50vw;
        height: 488px;
        background-color: rgb(39, 39, 39);
        color: white;
        text-shadow: 0 0 10px white;
        padding: 10px 0 10px 0;
        font-size: larger;
    }
    .overlay {
        position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.7);
		color: white;
		display: flex;
        flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 2rem;
		z-index: 1000;
        gap: 2rem;
        backdrop-filter: blur(10px);
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
    <div class="game">
        <div class="subh">Crack the Password</div>
        <div class="password_field">
            <div id="ip1" class="password">{input[0]}</div>
            <div id="ip2" class="password">{input[1]}</div>
            <div id="ip3" class="password">{input[2]}</div>
            <div id="ip4" class="password">{input[3]}</div>
        </div>
        <div class="numpad">
            <div class="numpadrow">
                <div class="button" onclick={()=>{handleClick(1)}}>1</div>
                <div class="button" onclick={()=>{handleClick(2)}}>2</div>
                <div class="button" onclick={()=>{handleClick(3)}}>3</div>
            </div>
            <div class="numpadrow">
                <div class="button" onclick={()=>{handleClick(4)}}>4</div>
                <div class="button" onclick={()=>{handleClick(5)}}>5</div>
                <div class="button" onclick={()=>{handleClick(6)}}>6</div>
            </div>
            <div class="numpadrow">
                <div class="button" onclick={()=>{handleClick(7)}}>7</div>
                <div class="button" onclick={()=>{handleClick(8)}}>8</div>
                <div class="button" onclick={()=>{handleClick(9)}}>9</div>
            </div>
            <div class="numpadrow">
                <div class="button" ></div>
                <div class="button" onclick={()=>{handleClick(0)}}>0</div>
                <div class="button" ></div>
            </div>
        </div>
    </div>
    <div class="info">
        <center>Start cracking, you have {number_of_turns_left + 1} turns</center>
        <center>
            {#each already_present as a}
            {@html a}
            {/each}
        </center>
    </div>
    {#if flag == -1}
    <div class="overlay">
        You have had your chances, The warden is coming for you, better start running... oh no. Look behind you!!!!! the code was {secret}
        <a href="/game/crackpass/">
            <button id="b">Play again?</button>
        </a>
        <a href="/game/">
                <button id="b">Quit</button>
            </a>
        </div>
    {/if}
    {#if flag == 2}
        <div class="overlay">
            You have successfully broken into the vault, Your services will be remembered!!
            <a href="/game/crackpass/">
                <button id="b">Play again?</button>
            </a>
            <a href="/game/">
                <button id="b">Quit</button>
            </a>
        </div>
    {/if}
</div>