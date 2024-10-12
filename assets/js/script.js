/**
 * Buscar para el final drilling bootstrap timeline
 */
let charizard = `
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="https://img.pokemondb.net/sprites/silver/normal/charizard.png" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title" id="titulo-carta">charizard</h5>
                                <p class="card-text" id="parrafo-carta">This is a wider card with supporting text below as a natural
                                    lead-in to
                                    additional content. This content is a little bit longer.</p>
                                </p>
                            </div>
                        </div>
                    </div>
`;

const cartaPokemon = document.querySelector('#carta-pokemon');
cartaPokemon.addEventListener('click', ()=>{
    console.log('realice un click')
    cartaPokemon.parentNode.insertAdjacentHTML('beforeend',charizard)
})