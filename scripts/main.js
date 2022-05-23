const tacosDb = [
    {
        "name": "Taco de sushi",
        "price": "200MXN",
        "description": "Un taco clasico pero ahora con un toque de Asia.",
        "url": "../assets/photos/taco01.jpg",
        "id": "tacodesuhi"
    },
    {
        "name": "Taco de camaron",
        "price": "150MXN",
        "description": "Traido desde Veracruz llega en taco de marisco",
        "url": "../assets/photos/taco02.jpg",
        "id": "tacodecamaron"
    },
    {
        "name": "Quesadilla",
        "price": "50MXN",
        "description": "La quesadilla si lleva queso",
        "url": "../assets/photos/taco03.jpg",
        "id": "quesadilla"
    },
    {
        "name": "Taco con Queso",
        "price": "50MXN",
        "description": "No es una quesadilla.",
        "url": "../assets/photos/taco04.jpg",
        "id": "tacodequeso"
    },
    {
        "name": "Taco de Arroz",
        "price": "25MXN",
        "description": "Un taco con arroz, que mas esperabas?...",
        "url": "../assets/photos/taco05.jpg",
        "id": "tacodearroz"
    },
    {
        "name": "Taco de Aire",
        "price": "250MXN",
        "description": "Ahi decia ´Aire´",
        "url": "../assets/photos/taco06.jpg",
        "id": "tacodeaire"
    },
    {
        "name": "Taco Vegano",
        "price": "100MXN",
        "description": "Es como un taco, pero sin lo bueno de un taco.",
        "url": "../assets/photos/taco07.jpg",
        "id": "tacovegano"
    },
    {
        "name": "Taco de Frutas",
        "price": "120MXN",
        "description": "No preguntes como lo hicimos...",
        "url": "../assets/photos/taco08.jpg",
        "id": "tacodefrutas"
    }
]
const testImg = document.querySelector(".testImg");
const gridHolder = document.querySelector(".gridHolder");

tacosDb.forEach((e)=>{
    gridHolder.innerHTML = gridHolder.innerHTML + `<div class="cardBody">
    <div class="card" style="background-image: url('`+e.url+`');">
        <div class="cardData">
            <h2>`+e.name+`</h2>
            <p>`+e.description+`</p>
            <br>
            <div>
                <h2>$`+e.price+`</h2>
                <button class="addButton" id="`+e.id+`">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-plus-circle-fill addButtonIcon" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</div>`;
});

const locationCrds = document.querySelectorAll(".locationCard");
const map = document.querySelector(".map");

locationCrds.forEach((e)=>{
    e.addEventListener("click", ()=>{
        map.id = e.id;
        switch(map.id){
            case "Cerro":
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14388.6648515778!2d-100.2434238774446!3d25.63260848517753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c08c31400855%3A0x43327b80ef78b9be!2sCerro%20de%20la%20Silla!5e0!3m2!1ses!2smx!4v1653345512687!5m2!1ses!2smx";
                break;
            case "Ukrania":
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20451.467693854207!2d37.65857554978804!3d50.153029449758066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4126c9750a786d35%3A0xa12d95a8ea02a849!2sUkrposhta!5e0!3m2!1ses!2smx!4v1653345417515!5m2!1ses!2smx";
                break;
            case "North":
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13613.403051437008!2d-147.36337602686584!3d64.75407079777494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51324d51d5c5f2b9%3A0xda1a7714d9d98964!2sNorth%20Pole%2C%20Alaska%2099705%2C%20EE.%20UU.!5e0!3m2!1ses!2smx!4v1653345273732!5m2!1ses!2smx";
                break;
            case "Alaska":
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21700.39150009695!2d-143.67009124427835!3d70.12715355304479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa86ba22a7ba0ee44!2sKaktovik%20Arctic%20Adventures!5e0!3m2!1ses!2smx!4v1653345655347!5m2!1ses!2smx";
                break;
            case "Valle":
                map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.897854055898!2d-100.46218006605265!3d25.801487490701295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629bacff9f89d7%3A0xa6e749b411509ff7!2sValle%20de%20Lincoln%2C%2066026%20N.L.!5e1!3m2!1ses!2smx!4v1653346137375!5m2!1ses!2smx";
                break;
        }
    });
})