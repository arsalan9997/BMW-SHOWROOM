// ===============================
// ADMIN DASHBOARD
// ===============================

const totalBookingsElement = document.getElementById("totalBookings");
const bookingTableBody = document.getElementById("bookingTableBody");
const refreshButton = document.getElementById("refreshBookings");
const logoutButton = document.getElementById("logoutButton");


// ===============================
// LOAD BOOKINGS
// ===============================

function loadBookings() {

    fetch("/api/bookings")
        .then(response => response.json())
        .then(bookings => {

            // Total bookings
            totalBookingsElement.textContent = bookings.length;

            // Clear table
            bookingTableBody.innerHTML = "";

            // No bookings
            if (bookings.length === 0) {

                bookingTableBody.innerHTML = `
                    <tr>
                        <td colspan="9" class="loading">
                            No bookings found.
                        </td>
                    </tr>
                `;

                return;
            }


            // Add bookings
            bookings.forEach(booking => {

                const row = document.createElement("tr");

                const status = booking.status || "Pending";

                row.innerHTML = `
                    <td>${booking.id}</td>

                    <td>
                        ${booking.firstName} ${booking.lastName}
                    </td>

                    <td>${booking.model}</td>

                    <td>${booking.mobile}</td>

                    <td>${booking.date}</td>

                    <td>${booking.time}</td>

                    <td>${booking.location}</td>

                    <td>
                        <select 
                            class="status-select"
                            onchange="updateStatus(${booking.id}, this.value)"
                        >
                            <option value="Pending" ${status === "Pending" ? "selected" : ""}>
                                Pending
                            </option>

                            <option value="Confirmed" ${status === "Confirmed" ? "selected" : ""}>
                                Confirmed
                            </option>

                            <option value="Completed" ${status === "Completed" ? "selected" : ""}>
                                Completed
                            </option>

                            <option value="Cancelled" ${status === "Cancelled" ? "selected" : ""}>
                                Cancelled
                            </option>
                        </select>
                    </td>

                    <td>
                        <button 
                            class="delete-button"
                            onclick="deleteBooking(${booking.id})"
                        >
                            Delete
                        </button>
                    </td>
                `;

                bookingTableBody.appendChild(row);

            });

        })
        .catch(error => {

            console.error("Error loading bookings:", error);

            bookingTableBody.innerHTML = `
                <tr>
                    <td colspan="9" class="loading">
                        Failed to load bookings.
                    </td>
                </tr>
            `;

        });

}


// ===============================
// UPDATE STATUS
// ===============================

function updateStatus(id, status) {

    fetch(`/api/bookings/${id}/status`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            status: status
        })

    })
    .then(response => response.json())
    .then(data => {

        alert("Booking status updated successfully!");

        loadBookings();

    })
    .catch(error => {

        console.error("Error updating status:", error);

        alert("Failed to update booking status.");

    });

}


// ===============================
// DELETE BOOKING
// ===============================

function deleteBooking(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
        return;
    }


    fetch(`/api/bookings/${id}`, {

        method: "DELETE"

    })
    .then(response => response.text())
    .then(message => {

        alert(message);

        loadBookings();

    })
    .catch(error => {

        console.error("Error deleting booking:", error);

        alert("Failed to delete booking.");

    });

}


// ===============================
// REFRESH BUTTON
// ===============================

if (refreshButton) {

    refreshButton.addEventListener("click", function () {

        loadBookings();

    });

}


// ===============================
// LOGOUT
// ===============================

if (logoutButton) {

    logoutButton.addEventListener("click", function () {

        window.location.href = "index.html";

    });

}


// ===============================
// LOAD BOOKINGS WHEN PAGE OPENS
// ===============================

loadBookings();