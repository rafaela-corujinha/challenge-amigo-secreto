let amigos = [];


function adicionarAmigo() {
   const inputAmigo = document.getElementById('amigo');
   const nomeAmigo = inputAmigo.value.trim();
   
   if (nomeAmigo) {
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    atualizarListaAmigos();
   } else {
    alert('Por favor, digite um nome válido.');
   } 
   

}
    
   function atualizarListaAmigos() {
        const listaAmigos = document.getElementById('listaAmigos'); 
        listaAmigos.innerHTML = '';

        amigos.forEach((amigo, index) => {
            const itemLista = document.createElement('li');
            itemLista.textContent = `${index + 1}. ${amigo}`;
            listaAmigos.appendChild(itemLista);
        });
         
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert('Adicione pelo menos dois amigos para sortear.');
            return;
        }
        
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

        
        amigos.forEach((amigo, index) => {
            const amigoSorteado = amigosEmbaralhados[index];
            const itemResultado = document.createElement('li');
            itemResultado.textContent = `${amigo} tirou ${amigoSorteado}`;
            resultado.appendChild(itemResultado); 
    });

}
       
        
      function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    
        
       
    
    
        
    
