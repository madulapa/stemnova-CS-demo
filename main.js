const images = new Map();
images.set("mercury", "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg");
images.set("earth", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1920px-The_Earth_seen_from_Apollo_17.jpg");
images.set("jupiter", "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg");
images.set("mars", "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg");
images.set("neptune", "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg");
images.set("saturn", "https://i.ibb.co/ynhY0sq/saturn.png");
images.set("uranus", "https://upload.wikimedia.org/wikipedia/commons/2/2e/Uranus_true_colour.jpg");
images.set("venus", "https://upload.wikimedia.org/wikipedia/commons/0/08/Venus_from_Mariner_10.jpg");


const description_planet_key =  new Map();
description_planet_key.set("mercury", 0);
description_planet_key.set("earth", 1);
description_planet_key.set("jupiter", 2);
description_planet_key.set("mars", 3);
description_planet_key.set("neptune", 4);
description_planet_key.set("saturn", 5);
description_planet_key.set("uranus", 6);
description_planet_key.set("venus", 7);

const descriptions = [];
descriptions[0] = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets";
descriptions[1] = "Earth is the third planet from the Sun and the only astronomical object known to harbor and support life. About 29.2% of Earth's surface is land consisting of continents and islands";
descriptions[2] = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.";
descriptions[3] = "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the Red Planet";
descriptions[4] = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus";
descriptions[5] = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.";
descriptions[6] = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
descriptions[7] = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";

function getImage () {
    let searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    if(images.get(searchTerm) == null){
        document.getElementById("description").innerHTML = '<br><p> That does not exist in our solar system! </p>';
        event.preventDefault();
        return;
    }
    document.getElementById("image").innerHTML = '<img src="' + images.get(searchTerm) + '">';
    document.getElementById("description").innerHTML = '<br><p>' + descriptions[description_planet_key.get(searchTerm)] + '</p>';
    event.preventDefault();
    
}
