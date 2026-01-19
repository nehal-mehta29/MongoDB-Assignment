# MongoDB Assignment – Event Management & Ticket System

This repository contains a **MongoDB-based assignment** focused on designing and querying an **Event Management & Ticket System**. The project demonstrates database modeling, CRUD operations, aggregations, and indexing using MongoDB.

---

##  Project Objective

The goal of this assignment is to understand and apply core MongoDB concepts by building a realistic data model for an event management system, including users, events, tickets, and categories.

---

##  Project Structure

* **MongoDB_Assignment_NehalMehta.pdf :** Assignment description / explanation
* **schema.js :** Collection schemas / structure
* **users.js :** User collection data & queries
* **categories.js :** Event categories data
* **events.js :** Event collection data
* **tickets.js :** Ticket collection data
* **crud.js :** CRUD operations
* **aggregations.js :** Aggregation queries
* **indexes.js :** Index creation queries


---

## Collections Used

* **Users** – Stores user details such as name, email, role, etc.
* **Categories** – Defines event categories (Technology, Music, Business, etc.)
* **Events** – Stores event information linked to categories and organizers
* **Tickets** – Manages ticket bookings and availability

---

## Features Implemented

### 1. Schema Design

* Properly structured MongoDB collections
* Use of references between collections where required

### 2. CRUD Operations

Implemented in `crud.js`:

* Insert documents
* Read / fetch data
* Update existing records
* Delete records

### 3. Aggregation Queries

Implemented in `aggregations.js`:

* Grouping data
* Filtering using `$match`
* Calculations using `$sum`, `$avg`
* Joining collections using `$lookup`

### 4. Indexing

Implemented in `indexes.js`:

* Index creation for frequently queried fields
* Performance optimization examples

---

## How to Run the Project

### Prerequisites

* MongoDB installed locally **or** MongoDB Atlas account
* MongoDB Shell (`mongosh`)
* Node.js (optional, if running scripts via Node)

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/nehal-mehta29/MongoDB-Assignment.git
   ```

2. **Open MongoDB Shell**

   ```bash
   mongosh
   ```

3. **Select or create a database**

   ```js
   use eventManagementDB
   ```

4. **Run the files**

   * Copy and paste queries from individual `.js` files into `mongosh`
   * OR run them using Node.js if configured

---

## Learning Outcomes

* MongoDB schema design
* CRUD operations in MongoDB
* Aggregation framework usage
* Indexing and performance optimization
* Real-world database modeling

---