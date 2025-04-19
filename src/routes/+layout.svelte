<script>
	let { children } = $props();
    export const prerender = true;
</script>



<style>
    *{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .topbar{
        user-select: none;
        display: flex;
        justify-content: center;
        font-size: 258%;
        width: 100vw;
        padding: 20px;
        color: white;
        position: fixed;
        text-shadow: 0 0 10px rgb(255, 255, 255);
        backdrop-filter: blur(10px);
    }
    .topbar b{
        color: rgb(124, 124, 255);
        text-shadow: 0 0 10px rgb(124, 124, 255);
    }

    .navbar{
        width: min-content;
        padding: 0px 40px 0px 10px;
        background-color: rgb(124, 124, 255);
        border: 0px solid transparent;
        border-radius: 20px;
        position: fixed;
        bottom: 20px;
    }
    .navbar ul{
        display: flex;
        justify-content: space-evenly;
        gap: 3rem;
    }
    .navbar ul li{
        padding: 10px;
        list-style: none;
        border: 0px solid transparent;
        border-radius: 10px;
        transition: all 0.3s ease;
    }
    .navbar ul li:hover{
        background-color: rgb(139, 139, 255);
        transform: scale(1.2);
    }
    .parentnav{
        display: flex;
        justify-content: center;
    }
    .parenttop{
        display: flex;
        justify-content: center;
    }
    svg{
        position: fixed;
        z-index: 0;
        left: -44%;
        transform: rotate(90deg);
        width: 100%;
        animation: anim 1s infinite;
    }
    .body{
        z-index: -100;
    } 
    a{
        color: rgb(48, 48, 48);
        text-decoration: none;
    }
</style>

<div class="body">
    <div class="parenttop">
        <div class="topbar">
            <b>Cyber</b>Wise
        </div>
    </div>
    
    <div class="parentnav">
        <div class="navbar">
            <ul>
                <a href="/CyberWise">
                    <li>
                        Home
                    </li>
                </a>
                <a href="/CyberWise/about">
                    <li>About</li>
                </a>
                <a href="/CyberWise/learn">
                    <li>Learn</li>
                </a>
                <a href="/CyberWise/game">
                    <li>Minigames</li>
                </a>
                <a href="/CyberWise/login">
                    <li>Login</li>
                </a>
                
            </ul>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7c7cff" fill-opacity="1" d="M0,96L30,90.7C60,85,120,75,180,64C240,53,300,43,360,58.7C420,75,480,117,540,133.3C600,149,660,139,720,128C780,117,840,107,900,128C960,149,1020,203,1080,224C1140,245,1200,235,1260,218.7C1320,203,1380,181,1410,170.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
</div>

{@render children()}