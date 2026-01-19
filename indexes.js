/* ========================================= INDEXES ========================================= */

// Index to search events by category 
db.events.createIndex({ category: 1 })

// Index to search events by date and time 
db.events.createIndex({ dateTime: 1 })

// Index to filter events by status 
db.events.createIndex({ status: 1 })

// Index to find events by organizer 
db.events.createIndex({ organizerId: 1 })

// Index to quickly find tickets of a user 
db.tickets.createIndex({ userId: 1 })

// Index to find tickets for a specific event 
db.tickets.createIndex({ eventId: 1 })