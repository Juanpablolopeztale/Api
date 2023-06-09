let api_url = "https://api.thecatapi.com/v1/images/search?limit=10";


async function actualizarGato(api){
    let obtenerGato = await fetch(api);
    let dato = await obtenerGato.json();

    cargar_gatos(dato);
}
    actualizarGato(api_url)

    function cargar_gatos(data){
        let dom = document.querySelector(".root");

        data.forEach(element => {
            let item = document.createElement("div")
            item.classList.add("box-img")
            item.innerHTML = `
            <img src = "${element.url}">
            `;

            dom.appendChild(item);
        })
    }

    actualizarGato(api_url);