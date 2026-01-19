/* =============================== USERS COLLECTION =============================== */

//This file is to create and add sample user documents in the users collection

db.users.insertMany([
    {
        userId: "user1", 
        name: "Nehal", 
        email: "nehal@gmail.com", 
        phone: 9580317392, 
        role: "organizer", 
        createdAt: new Date()
    },
    {
        userId: "user2", 
        name: "Aarav", 
        email: "arav@gmail.com", 
        phone: 9580355392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user3", 
        name: "Ram", 
        email: "ram@gmail.com", 
        phone: 9580317313, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user4", 
        name: "Pooja", 
        email: "poojal@gmail.com", 
        phone: 9972759052, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user5", 
        name: "Snehal", 
        email: "snehal@gmail.com", 
        phone: 8580317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user6", 
        name: "Deepak", 
        email: "deepak@gmail.com", 
        phone: 9440317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user7", 
        name: "Roy", 
        email: "roy@gmail.com", 
        phone: 9880317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user8", 
        name: "Sachin", 
        email: "sachin@gmail.com", 
        phone: 9580317788, 
        role: "organizer", 
        createdAt: new Date()
    },
    {
        userId: "user9", 
        name: "Riya", 
        email: "riyal@gmail.com", 
        phone: 8080317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user10", 
        name: "Kabir", 
        email: "kabirl@gmail.com", 
        phone: 9580235692, 
        role: "organizer", 
        createdAt: new Date()
    },
    {
        userId: "user11", 
        name: "Neil", 
        email: "neil@gmail.com", 
        phone: 9580317344, 
        role: "organizer", 
        createdAt: new Date()
    },
    {
        userId: "user12", 
        name: "Kaira", 
        email: "kairal@gmail.com", 
        phone: 7080317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user13", 
        name: "Maya", 
        email: "maya@gmail.com", 
        phone: 9480317392, 
        role: "organizer", 
        createdAt: new Date()
    },
    {
        userId: "user14", 
        name: "Dev", 
        email: "dev@gmail.com", 
        phone: 7729317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user15", 
        name: "Gaurav", 
        email: "gauravl@gmail.com", 
        phone: 9581117392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user16", 
        name: "Geetika", 
        email: "geetika@gmail.com", 
        phone: 9580317421, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user17", 
        name: "Meera", 
        email: "meera@gmail.com", 
        phone: 7065902869, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user18", 
        name: "Tara", 
        email: "tara@gmail.com", 
        phone: 9880317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user19", 
        name: "Sara", 
        email: "sara@gmail.com", 
        phone: 9080317392, 
        role: "attendee", 
        createdAt: new Date()
    },
    {
        userId: "user20", 
        name: "Sidharth", 
        email: "sidharthl@gmail.com", 
        phone: 9595317392, 
        role: "organizer", 
        createdAt: new Date()
    }
])