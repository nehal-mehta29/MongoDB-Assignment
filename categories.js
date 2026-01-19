/* =============================== CATEGORIES COLLECTION =============================== */

//This file is to create and add sample category documents in the categories collection 

db.categories.insertMany([
    { 
        categoryId: "cat1", 
        name: "Technology", 
        description: "Events related to technology, AI, and robotics" 
    },
    { 
        categoryId: "cat2", 
        name: "Music", 
        description: "Concerts and musical performances" 
    },
    { 
        categoryId: "cat3", 
        name: "Business", 
        description: "Entrepreneurship, startup and networking events" 
    },
    { categoryId: "cat4", 
        name: "Art", 
        description: "Art exhibitions and creative showcases"
    },
    { 
        categoryId: "cat5", 
        name: "Education", 
        description: "Workshops and educational sessions" 
    },
    { 
        categoryId: "cat6", 
        name: "Dance", 
        description: "Dance competitions and performances" 
    },
    { 
        categoryId: "cat7", 
        name: "Food", 
        description: "Food festivals and culinary events" 
    },
    { 
        categoryId: "cat8", 
        name: "Photography", 
        description: "Photography workshops and exhibitions" 
    },
    { 
        categoryId: "cat9", 
        name: "Health", 
        description: "Yoga camps, health awareness and fitness events" 
    },
    { 
        categoryId: "cat10", 
        name: "Literature", 
        description: "Book readings and literature festivals" 
    },
    { 
        categoryId: "cat11", 
        name: "Film", 
        description: "Film screenings and indie cinema events" 
    },
    { 
        categoryId: "cat12", 
        name: "Career", 
        description: "Job fairs and career guidance events" 
    },
    { 
        categoryId: "cat13", 
        name: "Fashion", 
        description: "Fashion shows and related events" 
    },
    { 
        categoryId: "cat14", 
        name: "Science", 
        description: "Science exhibitions and student projects" 
    },
    { 
        categoryId: "cat15", 
        name: "Gaming", 
        description: "Competitive gaming tournaments and esports" 
    },
    { 
        categoryId: "cat16", 
        name: "Sports", 
        description: "Marathons, competitions, and sports events" 
    },
    { 
        categoryId: "cat17", 
        name: "Drama", 
        description: "Stage plays and theatrical performances" 
    },
    { 
        categoryId: "cat18", 
        name: "Cultural", 
        description: "Cultural nights and college events" 
    },
    { 
        categoryId: "cat19", 
        name: "Photography Workshop", 
        description: "Specialized photography skill sessions" 
    },
    { 
        categoryId: "cat20", 
        name: "Dance Workshop", 
        description: "Dance training and workshops" 
    }
])