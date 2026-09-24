package com.bmw.showroom;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }


    // ===============================
    // CREATE BOOKING
    // ===============================

    @PostMapping("/api/bookings")
    public Booking createBooking(@RequestBody Booking booking) {

        return bookingRepository.save(booking);

    }


    // ===============================
    // GET ALL BOOKINGS
    // ===============================

    @GetMapping("/api/bookings")
    public List<Booking> getAllBookings() {

        return bookingRepository.findAll();

    }


    // ===============================
    // UPDATE BOOKING STATUS
    // ===============================

    @PutMapping("/api/bookings/{id}/status")
    public Booking updateBookingStatus(
            @PathVariable Long id,
            @RequestBody StatusRequest statusRequest) {

        Booking booking =
                bookingRepository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Booking not found"
                                )
                        );

        booking.setStatus(statusRequest.getStatus());

        return bookingRepository.save(booking);
    }


    // ===============================
    // DELETE BOOKING
    // ===============================

    @DeleteMapping("/api/bookings/{id}")
    public String deleteBooking(@PathVariable Long id) {

        if (!bookingRepository.existsById(id)) {

            return "Booking not found";

        }

        bookingRepository.deleteById(id);

        return "Booking deleted successfully";
    }


    // ===============================
    // STATUS REQUEST CLASS
    // ===============================

    public static class StatusRequest {

        private String status;


        public String getStatus() {
            return status;
        }


        public void setStatus(String status) {
            this.status = status;
        }

    }

}