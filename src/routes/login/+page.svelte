<style>
    *{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    }
    .form{
        display: flex;
        flex-direction: column;
        position: relative;
        top: 7vh;
        left: 27vw;
        margin: 10%;
        border: 2px solid rgb(85, 85, 85);
        padding: 100px;
        border-radius: 20px;
        background-color: rgb(255, 255, 255, 0.1);
        opacity: 0;
        width: fit-content;
        animation: animation 1s forwards;
    }
    input{
        padding: 5px;
        border: 0px solid transparent;
        border-radius: 10px;
        margin: 0 0 0 10px;
        color: rgb(41, 41, 41);
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .sub{
        background-color: rgb(85, 85, 85); 
        padding:10px; 
        color:white;
        transition: all 0.3s ease;
    }
    .sub:hover{
        background-color: rgb(41, 41, 41); 

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
<div class="form">
    <form action="/login/submitted">
        <center>
            <label for="name">User Name:</label>
            <input type="text">
        </center>
        <center>
            <label for="name">Password:</label>
            <input type="mail">
        </center>
        <center>
            <input class="sub" type="submit"> 
            <a href="/login">SignUp</a>
        </center>
    </form>
</div>