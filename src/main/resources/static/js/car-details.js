const cars = {

    "BMW 2 Series": {
        image: "images/bmw2.jpg",
        description: "Experience dynamic performance, modern design and premium BMW comfort.",
        engine: "2.0L Turbo",
        power: "255 HP",
        transmission: "8-Speed Automatic",
        drive: "Rear-Wheel Drive",
        aboutTitle: "Designed to move you.",
        aboutText: "The BMW 2 Series combines sporty styling, responsive performance and advanced technology to create an exciting driving experience."
    },

    "BMW 3 Series": {
        image: "images/bmw3.jpg",
        description: "A perfect combination of sporty performance, luxury and everyday driving comfort.",
        engine: "2.0L Turbo",
        power: "255 HP",
        transmission: "8-Speed Automatic",
        drive: "Rear-Wheel Drive",
        aboutTitle: "The ultimate sports sedan.",
        aboutText: "The BMW 3 Series delivers a balance of performance, technology and premium comfort with a distinctive BMW driving experience."
    },

    "BMW 4 Series": {
        image: "images/bmw4.jpg",
        description: "Bold styling meets exciting performance in the sophisticated BMW 4 Series.",
        engine: "2.0L Turbo",
        power: "255 HP",
        transmission: "8-Speed Automatic",
        drive: "Rear-Wheel Drive",
        aboutTitle: "Designed to stand apart.",
        aboutText: "The BMW 4 Series combines expressive design with engaging performance and modern technology."
    },

    "BMW 5 Series": {
        image: "images/bmw5.jpg",
        description: "Luxury, technology and performance come together in the BMW 5 Series.",
        engine: "2.0L Turbo",
        power: "255 HP",
        transmission: "8-Speed Automatic",
        drive: "Rear-Wheel Drive",
        aboutTitle: "Luxury meets performance.",
        aboutText: "The BMW 5 Series provides a premium driving environment with sophisticated technology and refined performance."
    },

    "BMW 7 Series": {
        image: "images/bmw7.jpg",
        description: "Experience flagship BMW luxury with advanced technology and exceptional comfort.",
        engine: "3.0L Turbo",
        power: "375 HP",
        transmission: "8-Speed Automatic",
        drive: "All-Wheel Drive",
        aboutTitle: "The pinnacle of BMW luxury.",
        aboutText: "The BMW 7 Series brings together luxury, advanced technology and powerful performance in a flagship sedan."
    },

    "BMW 8 Series": {
        image: "images/bmw8.jpg",
        description: "A powerful grand tourer combining elegant design, luxury and exhilarating performance.",
        engine: "4.4L Twin Turbo",
        power: "523 HP",
        transmission: "8-Speed Automatic",
        drive: "All-Wheel Drive",
        aboutTitle: "Luxury with a sporting soul.",
        aboutText: "The BMW 8 Series delivers a dramatic combination of luxury, performance and distinctive grand touring design."
    }

};


// Get model from URL
const parameters = new URLSearchParams(window.location.search);

let model = parameters.get("model");

if (model) {
    model = model.replaceAll("-", " ");
}


// Select car
const car = cars[model] || cars["BMW 2 Series"];


// Update page
document.getElementById("carName").textContent =
    model || "BMW 2 Series";

document.getElementById("sectionModel").textContent =
    model || "BMW 2 Series";

document.getElementById("carDescription").textContent =
    car.description;

document.getElementById("carImage").src =
    car.image;

document.getElementById("carImage").alt =
    model || "BMW";


// Specifications
document.getElementById("engine").textContent =
    car.engine;

document.getElementById("power").textContent =
    car.power;

document.getElementById("transmission").textContent =
    car.transmission;

document.getElementById("drive").textContent =
    car.drive;


// About section
document.getElementById("aboutTitle").textContent =
    car.aboutTitle;

document.getElementById("aboutText").textContent =
    car.aboutText;


// Test drive links
const modelParameter =
    (model || "BMW 2 Series").replaceAll(" ", "-");

const testDriveURL =
    "test-drive.html?model=" + modelParameter;

document.getElementById("testDriveButton").href =
    testDriveURL;

document.getElementById("bottomTestDrive").href =
    testDriveURL;