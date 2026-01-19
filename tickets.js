/* =============================== TICKETS COLLECTION =============================== */

//This file is to create and add sample ticket documents in the tickets collection

db.tickets.insertMany([
    {
        ticketId: "ticket1", 
        eventId: "event1", 
        userId: "user2", 
        bookingDate: "2025-12-20", 
        quantity: 2, 
        totalAmount: 1000, 
        status: "booked"
    },
    {
        ticketId: "ticket2", 
        eventId: "event1", 
        userId: "user3", 
        bookingDate: "2025-12-21", 
        quantity: 1, 
        totalAmount: 500, 
        status: "booked"
    },
    {
        ticketId: "ticket3", 
        eventId: "event2", 
        userId: "user4", 
        bookingDate: "2026-01-10", 
        quantity: 3, 
        totalAmount: 2400, 
        status: "booked"
    },
    {
        ticketId: "ticket4", 
        eventId: "event2", 
        userId: "user5", 
        bookingDate: "2026-01-12", 
        quantity: 2, 
        totalAmount: 1600, 
        status: "cancelled"
    },
    {
        ticketId: "ticket5", 
        eventId: "event3", 
        userId: "user6", 
        bookingDate: "2026-01-15", 
        quantity: 1, 
        totalAmount: 300, 
        status: "booked"
    },
    {
        ticketId: "ticket6", 
        eventId: "event3", 
        userId: "user2", 
        bookingDate: "2026-01-16", 
        quantity: 2, 
        totalAmount: 600, 
        status: "booked"
    },
    {
        ticketId: "ticket7", 
        eventId: "event4", 
        userId: "user7", 
        bookingDate: "2025-12-28", 
        quantity: 1, 
        totalAmount: 200, 
        status: "booked"
    },
    {
        ticketId: "ticket8", 
        eventId: "event4", 
        userId: "user8", 
        bookingDate: "2025-12-29", 
        quantity: 2, 
        totalAmount: 400, 
        status: "booked"
    },
    {
        ticketId: "ticket9", 
        eventId: "event5", 
        userId: "user9", 
        bookingDate: "2026-01-25", 
        quantity: 1, 
        totalAmount: 400, 
        status: "cancelled"
    },
    {
        ticketId: "ticket10", 
        eventId: "event5", 
        userId: "user10", 
        bookingDate: "2026-01-26", 
        quantity: 2, 
        totalAmount: 800, 
        status: "booked"
    },
    {
        ticketId: "ticket11", 
        eventId: "event6", 
        userId: "user11", 
        bookingDate: "2025-12-22", 
        quantity: 1, 
        totalAmount: 250, 
        status: "booked"
    },
    {
        ticketId: "ticket12", 
        eventId: "event6", 
        userId: "user2", 
        bookingDate: "2025-12-23", 
        quantity: 2, 
        totalAmount: 500, 
        status: "booked"
    },
    {
        ticketId: "ticket13", 
        eventId: "event7", 
        userId: "user12", 
        bookingDate: "2026-02-01", 
        quantity: 3, 
        totalAmount: 450, 
        status: "booked"
    },
    {
        ticketId: "ticket14", 
        eventId: "event8", 
        userId: "user13", 
        bookingDate: "2026-02-05", 
        quantity: 1, 
        totalAmount: 350, 
        status: "booked"
    },
    {
        ticketId: "ticket15", 
        eventId: "event9", 
        userId: "user14", 
        bookingDate: "2026-02-10", 
        quantity: 2, 
        totalAmount: 400, 
        status: "cancelled"
    },
    { 
        ticketId: "ticket16", 
        eventId: "event10", 
        userId: "user15", 
        bookingDate: "2026-02-15", 
        quantity: 1, 
        totalAmount: 300, 
        status: "booked"
    },
    { 
        ticketId: "ticket17", 
        eventId: "event11", 
        userId: "user16", 
        bookingDate: "2025-12-18", 
        quantity: 2, 
        totalAmount: 500, 
        status: "booked"
    },
    {
        ticketId: "ticket18", 
        eventId: "event12", 
        userId: "user17", 
        bookingDate: "2026-03-01", 
        quantity: 1, 
        totalAmount: 600, 
        status: "booked"
    },
    {
        ticketId: "ticket19", 
        eventId: "event19", 
        userId: "user18", 
        bookingDate: "2026-01-18", 
        quantity: 2, 
        totalAmount: 400, 
        status: "booked"
    },
    {
        ticketId: "ticket20", 
        eventId: "event20", 
        userId: "user19", 
        bookingDate: "2026-01-20", 
        quantity: 1, 
        totalAmount: 300, 
        status: "booked"
    }
])