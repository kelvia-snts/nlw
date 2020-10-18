//create map
const map = L.map('mapid').setView([-7.9902151,-34.8520147], 15)

// create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', )
.addTo(map)

// create icon 
const icon =L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor: [29, 68],
})


let marker;


// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng;

    //remover icon 
    marker && map.removeLayer(marker)

    //add icon Layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})


// adicionar o campo de fotos
function addPhotoField() {
    // pega o container de fotos #images.
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-images.
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da ultima imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    //verificar se o campo está vazio, se sim não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adcionar o clone ao container de #images.
    container.appendChild(newFieldContainer)    
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = "" 
        return
    }
    // deletar o campo
    span.parentNode.remove();
    
}


// selecionar sim ou não
function toggleSelect (event) {
    // retirar a classe .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function (button) {
        button.classList.remove('active')
    })
    // colocar a classe .active  nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meu input escondido com o valor selecionado 
    const input = document.querySelector('[name ="open_on_Weekends"]')

    input.value = button.dataSet.value
    
    
}

function validate(event) {

    //validar se lat e lng estão preenchidos (desafio)
    const needsLatAndLng = false;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }
    
}