export async function load({params, fetch, locals}: {params: any; fetch: any; locals: any}) {

    const id = params.id
    const [pokemonRes, pokeSpeciesRes] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`),

    ])
    if (pokemonRes.ok && pokeSpeciesRes.ok) {
        const pokeman = await pokemonRes.json()
        const pokeSpecies = await pokeSpeciesRes.json()
        const name = pokeman.name
        const pokeID = pokeman.id
        const height = pokeman.height / 10 + " m"
        const weight = pokeman.weight / 10 + " Kg"
        const type = pokeman.types[0].type.name
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        let type2 = ""
        if (pokeman.types.length > 1){
            type2 = pokeman.types[1].type.name
        }
        let evolveFrom = "This pokemon does not evolve from another pokemon"
        if (pokeSpecies.evolves_from_species !== null){
            evolveFrom = pokeSpecies.evolves_from_species.name
        }
        let eggGroup = []
        for (let i = 0; i < pokeSpecies.egg_groups.length; i++){
            eggGroup.push(pokeSpecies.egg_groups[i].name)
        }
        let pokeAbility = []
        for (let i = 0; i < pokeman.abilities.length; i++) {
            pokeAbility.push(pokeman.abilities[i].ability.name)
        }
        const description = pokeSpecies.flavor_text_entries[12].flavor_text
        let HP = 0
        let attack= 0
        let defense = 0
        let specialAttack = 0
        let specialDefense = 0
        let speed = 0
        for(let i = 0; i < pokeman.stats.length; i++){
            if(pokeman.stats[i].stat.name === "hp"){
                HP = pokeman.stats[i].base_stat
            }else if(pokeman.stats[i].stat.name === "attack"){
                attack = pokeman.stats[i].base_stat
            }else if(pokeman.stats[i].stat.name === "defense"){
                defense = pokeman.stats[i].base_stat
            }else if(pokeman.stats[i].stat.name === "special-attack"){
                specialAttack = pokeman.stats[i].base_stat
            }else if(pokeman.stats[i].stat.name === "special-defense"){
                specialDefense = pokeman.stats[i].base_stat
            }else if(pokeman.stats[i].stat.name === "speed"){
                speed = pokeman.stats[i].base_stat
            }
        }
        return {
            name,
            height,
            weight,
            type,
            type2,
            sprite,
            evolveFrom,
            eggGroup,
            pokeAbility,
            description,
            HP,
            attack,
            defense,
            specialAttack,
            specialDefense,
            speed,
            pokeID,
            
        }
    }
}
