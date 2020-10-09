const fetchPromise = fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/?fbclid=IwAR0Ox4t4_ifT-JjTgefzubTi4OZE3qp1Fzgf-tkTNMd-nYMH4uhZBsiqN-U`);
fetchPromise.then(connection => {
    console.log(`Connected`);
    console.log(connection);
    const jsonPromise = connection.json();
    console.log(jsonPromise)
});

