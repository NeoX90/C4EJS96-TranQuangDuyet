async function load(){
    const conn = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR0Ox4t4_ifT-JjTgefzubTi4OZE3qp1Fzgf-tkTNMd-nYMH4uhZBsiqN-U`);
    const data = await conn.json();
    console.log(data);
    console.log(data.abilities)
}
load(); 