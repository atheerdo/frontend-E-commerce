//import {v4 as uuid} from "uuid"
import { IProduct } from "../interfaces";


export const productList:IProduct [] = [
    {
        id:"1",
        title:"2024 Toyota",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_640.jpg",
        price:"$70,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://cdn.pixabay.com/photo/2022/04/24/12/26/car-7153508_640.jpg",
        }
    },

    {
        id:"2",
        title:"2022 BMW",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg",
        price:"$50,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg",
        }
    },
    {
        id:"3",
        title:"2023 Mercedes",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://cdn.pixabay.com/photo/2019/06/02/15/31/mercedes-4246654_640.jpg",
        price:"$80,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://cdn.pixabay.com/photo/2019/06/02/15/31/mercedes-4246654_640.jpg",
        }
    },
    {
        id:"4",
        title:"2024 Ferrari",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://www.supercars.net/blog/wp-content/uploads/2021/04/pictures_ferrari_f50_1995_8-e1619827398552-416x277.jpg",
        price:"$72,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://www.supercars.net/blog/wp-content/uploads/2021/04/pictures_ferrari_f50_1995_8-e1619827398552-416x277.jpg",
        }
    },
    {
        id:"5",
        title:"2024 Opel",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://media.gettyimages.com/id/1457702238/photo/brussels-belgium-opel-corsa-e-full-electric-compact-hatchback-car-at-brussels-expo-on-january.jpg?s=612x612&w=0&k=20&c=a8sbxoroo2UyxnhbrJF8yL9S8OuuatYkblIqILxzhMk=",
        price:"$66,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://media.gettyimages.com/id/1457702238/photo/brussels-belgium-opel-corsa-e-full-electric-compact-hatchback-car-at-brussels-expo-on-january.jpg?s=612x612&w=0&k=20&c=a8sbxoroo2UyxnhbrJF8yL9S8OuuatYkblIqILxzhMk=",
        }
    },
    {
        id:"6",
        title:"2020 GMC GV89",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://media.gettyimages.com/id/1295841951/photo/2021-gmc-sierra-1500-denali-pickup-truck.jpg?s=612x612&w=0&k=20&c=RTFlZtz2gbiIzQE27Y5JfywNiX05LT4ouemTGqIqwq4=",
        price:"$78,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://media.gettyimages.com/id/1295841951/photo/2021-gmc-sierra-1500-denali-pickup-truck.jpg?s=612x612&w=0&k=20&c=RTFlZtz2gbiIzQE27Y5JfywNiX05LT4ouemTGqIqwq4=",
        }
    },
    {
        id:"7",
        title:"2023 Charger GV89",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://cdn.pixabay.com/photo/2019/06/05/13/26/dodge-charger-4253671_640.jpg",
        price:"$44,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://cdn.pixabay.com/photo/2019/06/05/13/26/dodge-charger-4253671_640.jpg",
        }
    },
    {
        id:"8",
        title:"2024 Lexus",
        description: "Dimensions:4912 x 3264, Aspect Ratio:307:204, Camera:NEX-5N, Focal:120.0mm, Aperture:ƒ/5.6, ISO:320, Taken At:Feb 22.2018, Software:Photos 3.0",
        imageURL:"https://media.gettyimages.com/id/458671775/photo/lexus-is-350-2010.jpg?s=612x612&w=0&k=20&c=1tJXRvwgSAfUJ2k4LH0nHaKz1fN5Hv2P-gtOameDRDA=",
        price:"$33,000",
        colors:["#FF0032","#2563eb","#FF6E31"],
        category:{
            name:"Cars",
            imageURL:"https://media.gettyimages.com/id/458671775/photo/lexus-is-350-2010.jpg?s=612x612&w=0&k=20&c=1tJXRvwgSAfUJ2k4LH0nHaKz1fN5Hv2P-gtOameDRDA=",
        }
    },
]