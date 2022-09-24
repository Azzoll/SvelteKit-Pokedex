<script lang="ts">
    export let pokeman: any;
</script>
<!-- This is the Card that we see in the pokemon section -->
<a class="pokemonTitle" href={`/pokemon/${pokeman.id}`}>
<div class="pokemonCard">
        <img class="pokemonImage" src={pokeman.image} alt={pokeman.name}>
        <h2 class="pokemonName">{pokeman.id}. {pokeman.name}</h2>
</div>
</a>

<style>
a {
    text-decoration: none;
    color: black;
}
.pokemonCard {
    border-radius: 15px;
    background-color: lightgrey;
    text-align: center;
    padding: 10px;
    margin: 10px;
    display: inline-block;
    width: 450px;
    height: 250px;   
    margin-left: 100px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
}
.pokemonCard:hover {
    border: solid gray;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.pokemonImage {
    height: 180px;
    width: auto;
}
.pokemonName {
    font-size: 35px;
    text-transform: uppercase;
}
</style>