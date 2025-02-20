<script>
    const sections = [
      ["Brute force attack", "Social Engg", "DDoS Attack"],
      ["Phishing", "SQL Injection", "Zero-Day Exploit"]
    ];
    let matnow = $state();
    function handleClick(widget){
        matnow = widget;
    }
    function clear_learn(){
        matnow = "";
    }
  </script>

<style>
*{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.parent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 20vh;
}
.text1{
    transition: all 0.5s ease;
    font-size: large;
    transform: translateY(60%);
}
.text2{
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.2s ease;
    font-size: x-large;
    transform: translateY(100%);
}
.widget{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 20vw;
    height: 20vh;
    background-color: rgb(34, 34, 34);
    color: white;
    text-shadow: 0 0 10px white;
    box-shadow: 0 0 15px rgb(34, 34, 34);
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 25px;
}
.widget:hover{
    border-radius: 40px;
    background-color: rgb(124, 124, 255);
    color: black;
    box-shadow: 0 0 50px rgb(124, 124, 255);
    text-shadow: 0 0 10px rgb(65, 65, 65);
}
.widget:hover .text1{
    transform: translateY(-100%);
    opacity: 0;
}
.widget:hover .text2{
    transform: translateY(-60%);
    opacity: 1;
}
.section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    height: 30vh;
    scroll-snap-align: start;

}
.overlay {
    border: 0px solid transparent;
    border-radius: 20px;
    padding: 30px;
    width: 60vw;
    height: 60vh;
    background: rgba(133, 133, 133, 0.6);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 18vh;
    left: 20vw;
    font-size: 2rem;
    z-index: 1000;
    gap: 2rem;
    backdrop-filter: blur(10px);
    opacity: 0;
    animation: fadeIn 1s forwards;
    overflow: scroll;
}
button{
    box-shadow: 0 0 10px rgb(124, 124, 255);
    background-color: rgb(124, 124, 255);
    padding: 20px 60px 20px 60px;
    border: 0px solid transparent;
    border-radius: 20px;
    transition: all 0.3s ease;
}
button:hover{
    box-shadow: 0 0 10px rgb(255, 255, 255);
    background-color: white;
    color: black;
    padding: 20px 60px 20px 60px;
    border: 0px solid transparent;
    border-radius: 20px;
}

@keyframes fadeIn{
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
p, li{
    font-size: 60%;
}
</style>


<div class="parent">
    {#each sections as widgets}
    <div class="section">
      {#each widgets as widget}
        <div class="widget" on:click={()=>{handleClick(widget)}}>
            <div class="text1">{widget}</div>
            <div class="text2">{widget}</div>
        </div>
      {/each}
    </div>
    {/each}
    {#if matnow === ""}
        <div></div>
    {:else if matnow === "Brute force attack"}
    <div class="overlay">
        <h2>Brute Force Attack</h2>
        <p>
            A brute force attack is a hacking method that uses trial and error to crack passwords, login credentials, and encryption keys. It is a simple yet reliable tactic for gaining unauthorized access to individual accounts and organizations’ systems and networks. The hacker tries multiple usernames and passwords, often using a computer to test a wide range of combinations, until they find the correct login information.
            The name "brute force" comes from attackers using excessively forceful attempts to gain access to user accounts. Despite being an old cyberattack method, brute force attacks are tried and tested and remain a popular tactic with hackers.
        </p>
        <button id="b" on:click={()=>{clear_learn()}}>Close</button>
    </div>
    {:else if matnow === "Social Engg"}
    <div class="overlay">
        <h2>Social Engineering</h2>
        <p>
            over a computer system, or to steal personal and financial information. It uses psychological manipulation to trick users into making security mistakes or giving away sensitive information.
            Social engineering attacks happen in one or more steps. A perpetrator first investigates the intended victim to gather necessary background information, such as potential points of entry and weak security protocols, needed to proceed with the attack. Then, the attacker uses a form of pretexting such as impersonation to gain the victim’s trust and provide stimuli for subsequent actions that break security practices, such as revealing sensitive information or granting access to critical resources.
        </p>
        <button id="b" on:click={()=>{clear_learn()}}>Close</button>
    </div>
    {:else if matnow === "DDoS Attack"}
    <div class="overlay">
        <h2>DDoS Attack</h2>
        <p>
            A distributed denial-of-service (DDoS) attack is a malicious attempt to disrupt the normal traffic of a targeted server, service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.
            DDoS attacks achieve effectiveness by utilizing multiple compromised computer systems as sources of attack traffic. Exploited machines can include computers and other networked resources such as IoT devices.
            From a high level, a DDoS attack is like an unexpected traffic jam clogging up the highway, preventing regular traffic from arriving at its destination.
        </p>
        <button id="b" on:click={()=>{clear_learn()}}>Close</button>
    </div>
    {:else if matnow === "Phishing"}
        <div class="overlay">
            <h2>Phishing</h2>
            <p>
                Phishing (pronounced: fishing) is an attack that attempts to steal your money, or your identity, by getting you to reveal personal information -- such as credit card numbers, bank information, or passwords -- on websites that pretend to be legitimate. Cybercriminals typically pretend to be reputable companies, friends, or acquaintances in a fake message, which contains a link to a phishing website.
                Phishing is a popular form of cybercrime because of how effective it is. Cybercriminals have been successful using emails, text messages, and direct messages on social media or in video games, to get people to respond with their personal information. The best defense is awareness and knowing what to look for.
            </p>
            <button id="b" on:click={()=>{clear_learn()}}>Close</button>
    </div>
    {:else if matnow === "SQL Injection"}
    <div class="overlay">
        <h2>SQLi</h2>
        <p>
            SQL injection (SQLi) is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. This can allow an attacker to view data that they are not normally able to retrieve. This might include data that belongs to other users, or any other data that the application can access. In many cases, an attacker can modify or delete this data, causing persistent changes to the application's content or behavior. 
            Imagine a shopping application that displays products in different categories. When the user clicks on the Gifts category, their browser requests the URL:
            https://insecure-website.com/products?category=Gifts
            This causes the application to make a SQL query to retrieve details of the relevant products from the database:
            SELECT * FROM products WHERE category = 'Gifts' AND released = 1
            This SQL query asks the database to return:
        </p>
        <ul>
            <li>
                all details (*)
            </li>
            <li>
                from the products table
            </li>
            <li>
                where the category is Gifts
            </li>
            <li>
                and released is 1.            
            </li>
        </ul>
        <button id="b" on:click={()=>{clear_learn()}}>Close</button>
    </div>
    {:else if matnow === "Zero-Day Exploit"}
    <div class="overlay">
        <h2>Zero Day attack</h2>
        <p>
            Software often has security vulnerabilities that hackers can exploit to cause havoc. Software developers are always looking out for vulnerabilities to "patch" – that is, develop a solution that they release in a new update.
            However, sometimes hackers or malicious actors spot the vulnerability before the software developers do. While the vulnerability is still open, attackers can write and implement a code to take advantage of it. This is known as exploit code.
            The exploit code may lead to the software users being victimized – for example, through identity theft or other forms of cybercrime. Once attackers identify a zero-day vulnerability, they need a way of reaching the vulnerable system. They often do this through a socially engineered email – i.e., an email or other message that is supposedly from a known or legitimate correspondent but is actually from an attacker. The message tries to convince a user to perform an action like opening a file or visiting a malicious website. Doing so downloads the attacker’s malware, which infiltrates the user’s files and steals confidential data.
        </p>
        <button id="b" on:click={()=>{clear_learn()}}>Close</button>
    </div>
    {/if}
</div>