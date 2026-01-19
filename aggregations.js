/* ========================================= AGGREGATION PIPELINES ========================================= */

//Top 5 events by ticket sales
db.tickets.aggregate([
    {
      $group: {
        _id: "$eventId",
        totalTicketsSold: { $sum: "$quantity" }
      }
    },
    {
      $sort: { totalTicketsSold: -1 }
    },
    {
      $limit: 5
    }
])

//Total revenue earned by an organizer
db.events.aggregate([
    {
      $lookup: {
        from: "tickets",
        localField: "eventId",
        foreignField: "eventId",
        as: "ticketInfo"
      }
    },
    {
      $unwind: "$ticketInfo"
    },
    {
      $group: {
        _id: "$organizerId",
        totalRevenue: { $sum: "$ticketInfo.totalAmount" }
      }
    }
])

//Number of attendees per event
db.tickets.aggregate([
  {
    $group: {
      _id: "$eventId",
      totalAttendees: { $sum: "$quantity" }
    }
  }
])

//Events grouped by category and status
db.events.aggregate([
  {
    $group: {
      _id: {
        category: "$category",
        status: "$status"
      },
      totalEvents: { $sum: 1 }
    }
  }
])