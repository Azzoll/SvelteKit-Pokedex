<script lang="ts">

    export let data: any
        
</script>
<svelte:head>
    <title>SvelteKit PokeDex {data.name}</title>
</svelte:head>

<div class="back">
    <a class="backLink" href="/pokemon"> Go Back</a>
</div>
<div class="pokeCard">
    <div class="pokeName">
        {data.name}
    </div>
    <div class="pokeDescription">
        {data.description}
    </div>
    <span>
        <img class="pokeImage" src={data.sprite} alt={data.name}>
    </span>
    <div class="evolution">
        {#if data.evolveFrom === 'This pokemon does not evolve from another pokemon'}
            {data.evolveFrom}
        {:else}
            This pokemon evolve from <a href='/pokemon/{data.pokeID - 1}'>{data.evolveFrom}</a>
        {/if}
    </div>
    <div class="pokeStats">
        <div>HP: {data.HP}</div>
        <div> Attack: {data.attack}</div>
        <div>Defense: {data.defense}</div>
        <div>Specical Attack: {data.specialAttack}</div>
        <div>Specical Defense: {data.specialDefense}</div>
        <div>Speed: {data.speed}</div>
    </div>

    <div class="infoContainer">
        <div class="pokeHeight">Height: {data.height}</div>
        <div class="pokeWeight">Weight: {data.weight}</div>
        <div class="pokeEggGroup">EggGroup: {data.eggGroup}</div>
        <div class="pokeType">Type: {data.type} | {data.type2}</div>
        <div class="pokeAbility">Ability: {data.pokeAbility}</div>
    </div>

</div>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
    .back {
        float: left;
        padding: 10px;
        margin-left: 20px;
        font-size: 25px;
        border: solid lightgray;
        border-radius: 15px;
        margin-top: 20px;
    }
    .back:hover {
        border: solid black;
    }
    .evolution a {
        text-decoration: none;
        color: rgb(214, 83, 22);
    }
    .evolution a:hover {
        border-bottom: solid rgb(214, 83, 22);
    }
    .pokeCard{
        float: center;
        height: 840px;
        width: 75%;
        margin: auto;
        margin-top: 40px;
        border-radius: 10px;
    }
    .pokeName {
        font-size: 3em;
        text-align: center;
        text-transform: uppercase;
    }
    .pokeImage {
        width: auto;
        height: 450px;
        border: solid lightgrey;
        border-radius: 15px;
        margin-top: 20px;
        margin-left: 50px;
        float: left;
    }
    .pokeDescription {
        font-size: 25px;
        text-align: center;
    }
    .pokeStats {
        border: solid lightgray;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
        border-radius: 15px;
        font-size: 30px;
        padding: 50px;
        width: 50%;
    }
    .infoContainer {
        border: solid lightgrey;
        border-radius: 15px;
        float: left;
        margin-top: 20px;
        margin-left: 10px;
        padding: 50px;
        font-size: 30px;
        width: 50%;
    }
    .evolution {
        float: left;
        margin-left: 100px;
        margin-top: 20px;
        font-size: 25px;
    }
    
</style>





