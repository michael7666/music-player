import {v4 as uuidv4} from "uuid"


function ChillHop() {
    return [
        {
            name: "Roses n Flames",
            artist: "C Y G N",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-300x300.jpg",
            id: uuidv4(),
            active: true,
            color: ["#A48D7C", "#643D76"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=14984"
        },
        {
            name:"Sunrise Hike",
            artist: "Ruck P",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/453b13ae3c0e2eec280fcc6357800b825239806e-300x300.jpg",
            id: uuidv4(),
            active: false,
            color: ["#489E95", "#94C6AB"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12133"

        },

        {
            name: "Woodnote",
            artist: "Aarigod, imagiro",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-300x300.jpg",
            id: uuidv4(),
            active: false,
            color: ["#323E3E", "#2C3534"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13011"
        },

        {
            name: "Forever Tired",
            artist: "Psalm Trees, Guillaume Muschalle, Thomas Renwick",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/644dedb802e85f3eb700b8b091e729504b680a9c-300x300.jpg",
            id: uuidv4(),
            active: false,
            color: ["#F5DE67", "#FFFFF7"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10555"
        },

        {
            name: "Rest Until Dark",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
            id: uuidv4(),
            active: false,
            color: ["#3A98A0", "#59221F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10014"
        },

        {
            name: "Witch Hat",
            artist: "Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-300x300.jpg",
            id: uuidv4(),
            active: false,
            color: ["#3A98A0", "#59221F"],
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10016"
            
        }
    ]

}

export default ChillHop