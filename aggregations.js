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