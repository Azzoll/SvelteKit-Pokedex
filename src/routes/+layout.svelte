
<nav>
    <a href="/">Home</a>
    <a href="/pokemon">Pokemon</a>

    <a href="/login"><img class="userIcon" src="/user_icon.png" alt="User Login Icon"></a>

</nav>

<style>
    :global(body){
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;;
    }
    nav {
        border-bottom: solid gray;
    }
    a{
        text-decoration: none;
        color: black;
        font-size: 20px;
        padding: 10px;
    }
    a:hover{
        border-radius: 10px;
        border: solid black;
        color: black;
    }
    nav{
        background-color: white;
        margin: 0;
        padding: 10px;
    }
    .userIcon {
        width: 20px;
        height: 20px;
    }
</style>

<slot></slot>