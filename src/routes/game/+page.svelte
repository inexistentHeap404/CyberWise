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
        height: 90vh;
        gap: 3rem;
        opacity: 0;
        animation: animation 1s forwards;
    }
    .tagline{
        font-size: xx-large;
        font-weight: bolder;
        text-shadow: 0px 0px 20px rgb(255, 255, 255);
    }
    .subcat{
        font-size: x-large;
        font-weight: lighter;
        text-shadow: 0px 0px 20px rgb(255, 255, 255);
    }
    a{
        text-decoration: none;
        color: rgb(124, 124, 255);
        text-shadow: 0px 0px 10px rgb(124, 124, 255);
        transition: all 0.3s ease;
    }
    a:hover{
        color: rgb(255, 255, 255);
        text-shadow: 0px 0px 10px rgb(255, 255, 255);
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

<div class="parent">
    <div class="tagline">
        Play mini games and learn about internet safety
    </div>
    <div class="subcat">
        <a href="/game/crackpass">Crack the code</a>
    </div>
    <div class="subcat">
        <a href="/game/findphish">Find the phishing mail</a>
    </div>
</div>