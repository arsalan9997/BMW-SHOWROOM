const modelButtons = document.querySelectorAll(".model-option");
const carImage = document.getElementById("testDriveCarImage");
const modelSelect = document.getElementById("model");
const testDriveForm = document.getElementById("testDriveForm");
const bookingPanel = document.getElementById("bookingPanel");
const openBooking = document.getElementById("openBooking");
const closeBooking = document.getElementById("closeBooking");


// ================= BOOKING PANEL =================

if (openBooking && bookingPanel) {
    openBooking.addEventListener("click", function () {
        bookingPanel.classList.add("active");
    });
}

if (closeBooking && bookingPanel) {
    closeBooking.addEventListener("click", function () {
        bookingPanel.classList.remove("active");
    });
}


// ================= BMW MODEL IMAGES =================

const modelImages = {

    "BMW 2 Series": "images/bmw2.jpg",

    "BMW 3 Series": "images/bmw3.jpg",

    "BMW 4 Series": "images/bmw4.jpg",

    "BMW 5 Series": "images/bmw5.jpg",

    "BMW 7 Series": "images/bmw7.jpg",

    "BMW 8 Series": "images/bmw8.jpg"

};


// ================= CHANGE CAR =================

function changeCar(model) {

    if (!modelImages[model]) {
        return;
    }

    carImage.src = modelImages[model];

    carImage.alt = model;

    modelSelect.value = model;
}


// ================= MODEL BUTTONS =================

modelButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        modelButtons.forEach(function (item) {

            item.classList.remove("active");

        });

        button.classList.add("active");


        const selectedModel =
            button.getAttribute("data-model");


        changeCar(selectedModel);

    });

});


// ================= URL MODEL =================

const urlParameters =
    new URLSearchParams(window.location.search);

const urlModel =
    urlParameters.get("model");


if (urlModel) {

    const selectedModel =
        urlModel.replaceAll("-", " ");

    if (modelImages[selectedModel]) {

        changeCar(selectedModel);


        modelButtons.forEach(function (button) {

            button.classList.remove("active");


            if (
                button.getAttribute("data-model")
                === selectedModel
            ) {

                button.classList.add("active");

            }

        });

    }

}


// ================= DATE =================

const dateInput =
    document.getElementById("date");


if (dateInput) {

    const today = new Date();

    const year =
        today.getFullYear();

    const month =
        String(today.getMonth() + 1)
        .padStart(2, "0");

    const day =
        String(today.getDate())
        .padStart(2, "0");


    dateInput.min =
        `${year}-${month}-${day}`;

}


// ================= MOBILE =================

const mobileInput =
    document.getElementById("mobile");


if (mobileInput) {

    mobileInput.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(/\D/g, "");

        }
    );

}


// ================= BOOKING =================

testDriveForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        const booking = {

            firstName:
                document
                    .getElementById("firstName")
                    .value
                    .trim(),

            lastName:
                document
                    .getElementById("lastName")
                    .value
                    .trim(),

            model:
                modelSelect.value,

            location:
                document
                    .getElementById("location")
                    .value,

            mobile:
                document
                    .getElementById("mobile")
                    .value
                    .trim(),

            email:
                document
                    .getElementById("email")
                    .value
                    .trim(),

            date:
                document
                    .getElementById("date")
                    .value,

            time:
                document
                    .getElementById("time")
                    .value,

            message:
                document
                    .getElementById("message")
                    .value
                    .trim()

        };


        // ================= TERMS =================

        const terms =
            document
                .getElementById("terms")
                .checked;


        if (!terms) {

            alert(
                "Please accept the Terms & Conditions."
            );

            return;
        }


        // ================= SEND TO SPRING BOOT =================

        try {

            const response =
                await fetch(
                    "/api/bookings",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type":
                                "application/json"
                        },

                        body:
                            JSON.stringify(booking)
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Booking failed"
                );

            }


            // ================= SUCCESS =================

            alert(
                "Thank you " +
                booking.firstName +
                " " +
                booking.lastName +
                "!\n\n" +
                "Your " +
                booking.model +
                " test drive request has been successfully booked."
            );


            // Reset form
            testDriveForm.reset();


            // Reset model buttons
            modelButtons.forEach(function (button) {

                button.classList.remove("active");

            });


            modelButtons[0].classList.add("active");


            // Reset to BMW 2 Series
            changeCar("BMW 2 Series");

        }

        catch (error) {

            alert(
                "Something went wrong. Please try again."
            );

            console.error(error);

        }

    }
);