# BMW Showroom Management System

## 📌 Project Overview

BMW Showroom Management System is a web-based application developed to provide an interactive BMW showroom experience.

The system allows users to explore different BMW car models, view detailed information, and book a test drive.

An Admin Dashboard is also provided to manage and monitor test drive bookings.

---

## 🚗 Features

### User Side

- BMW Showroom Homepage
- BMW car model showcase
- BMW 2 Series
- BMW 3 Series
- BMW 4 Series
- BMW 5 Series
- BMW 7 Series
- BMW 8 Series
- Detailed information for each car
- Test Drive booking
- Automatic BMW model selection
- Customer details form
- Showroom location selection
- Booking date and time selection
- Booking message
- Booking data stored in MySQL

### Admin Side

- Admin Dashboard
- Total cars display
- Total bookings display
- View all test drive bookings
- View customer information
- View selected BMW model
- View booking date and time
- View showroom location
- Update booking status
- Delete bookings
- Refresh booking data

### Booking Status

The administrator can change a booking status to:

- Pending
- Confirmed
- Completed
- Cancelled

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Java
- Spring Boot
- Spring Data JPA

### Database

- MySQL

### Development Tools

- Visual Studio Code
- Maven
- XAMPP / MySQL
- Git
- GitHub

---

## 📂 Project Structure

```text
BMW-SHOWROOM
│
├── backend
│   ├── src
│   │   └── main
│   │       ├── java
│   │       │   └── com
│   │       │       └── bmw
│   │       │           └── showroom
│   │       │               ├── BmwShowroomApplication.java
│   │       │               ├── Booking.java
│   │       │               ├── BookingController.java
│   │       │               └── BookingRepository.java
│   │       │
│   │       └── resources
│   │           ├── static
│   │           │   ├── css
│   │           │   ├── images
│   │           │   ├── js
│   │           │   ├── index.html
│   │           │   ├── test-drive.html
│   │           │   ├── car-details.html
│   │           │   └── admin.html
│   │           │
│   │           └── application.properties
│   │
│   └── pom.xml
│
├── frontend
│   ├── css
│   ├── js
│   └── index.html
│
└── README.md