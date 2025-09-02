//1. ouvir evento de quando o usuaria sair do campo do cep
document.getElementById("cep").addEventListener("blur", (evento)=> {
    const elemento = evento.target;
    const cepInformado = elemento.value;

//2. validar cep
    if(!(cepInformado.length ===8 ))
        return;

//3 fazer busca no viacep
//3.1 promessa de que o fetch vai buscar o recurso
fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(response => response.json())
    .then(data =>{
        //3.2 processamento da pagina
        if(!data.error){
            document.getElementById("logradouro").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        }else{
            alert("CEP nao encontrado.")
        }
    })
    .catch(error => console.error("Erro ao buscar o CEP", error));

})

