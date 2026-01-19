/* ========================================= CRUD OPERATIONS ========================================= */

/* ---------- CREATE ---------- */
//Already done refer users.js, events.js, tickets.js, categories.js 


/* ---------- READ OPERATIONS ---------- */

// View all users
db.users.find()

// View all events
db.events.find()

// View all tickets
db.tickets.find()

// View all categories
db.categories.find()


/* ---------- UPDATE OPERATIONS ---------- */

//Updating role 
db.users.updateOne(
    { userId: "user20" },
    { $set: { role: "organizer" } }
)

//Updating event status
db.events.updateOne(
    { eventId: "event18" },
    { $set: { status: "upcoming" } }
)

//Updating ticket status
db.tickets.updateOne(
    { ticketId: "ticket7" },
    { $set: { status: "cancelled" } }
)

//Updating categories description
db.categories.updateOne(
    { categoryId: "cat18" },
    { $set: { description: "Cultural college events" } }
)