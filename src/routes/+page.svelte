<svelte:head>
    <title>SvelteKit Pokedex</title>
</svelte:head>

<div class="container">
    <div class="infoContainer">
        <img class="imagePD" src="/pokedexLogo.png" alt="PokedexLogo">
        <div class="info2">
            <h1 class="title">Welcome to the SvelteKit PokeDex of the first 151 Pokemon!</h1>
            <h1 class="title2">Go Check out the PokeDex!</h1>
            <a class="pokedex" href="/pokemon">Pokedex</a>
        </div>
    </div>
</div>

<style>
    .container {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100vh;
    }
    .infoContainer {
        text-align: center;
        margin: 40px;
    }
    .imagePD {
        width: 700px;
        height: auto;
        margin-bottom: 30px;
    }
    .info2 {
        border: solid lightgray;
        border-radius: 20px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 40px;
    }
    .pokedex{
        border: solid black;
        border-radius: 15px;
        padding: 15px;
        background-color: white;
        text-decoration: none;
        color: black;
    }
    .pokedex:hover {
        background-color: lightgrey;
    }
    
</style>