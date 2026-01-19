/* =============================== USERS COLLECTION SCHEMA =============================== */

const UsersSchema = {
    _id: "ObjectId",
    userId: "String",
    name: "String",
    email: "String",
    phone: "Number",
    role: "String",
    createdAt: "Date"
}

/* =============================== EVENTS COLLECTION SCHEMA =============================== */ 

const EventsSchema = {
    _id: "ObjectId",
    eventId: "String",
    title: "String",
    description: "String",
    category: "String",
    dateTime: "String",
    venue: "String",
    organizerId: "String",
    price: "Number",
    totalTickets: "Number",
    availableTickets: "Number",
    status: "String"
}