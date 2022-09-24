<script>
    import {pokemon} from "../../stores/pokestore"
    import PokemanCard from "../../components/pokemanCard.svelte";

    let searchTerm = ""
    /**
* @type {any[]}
*/
    let filteredPokemon = []

    $: {
        console.log(searchTerm);
        if(searchTerm) {
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredPokemon = [...$pokemon]
        }
    }
</script>
<svelte:head>
    <title>SvelteKit PokeDex</title>
</svelte:head>

<div class="searchContainer">
<input class="searchBar" type="text" bind:value={searchTerm} placeholder="Search Pokemon">
</div>


<br>
{#each filteredPokemon as pokeman}
<PokemanCard pokeman={pokeman}/>
{/each}

<style>
    .searchContainer {
        text-align: center;
        margin-top: 20px;
    }
    .searchBar {
        width: 950px;
        height: 40px;
        border: 3px solid lightgray;
        border-radius: 10px;
        
    }
</style>