const { Booking } = require("../models");

const bookingData = [
  {
    owner_id: 1,
    pets_id: 1,
    startDate: 5 - 18 - 2022,
    endDate: 5 - 20 - 2022,
  },
  {
    owner_id: 2,
    pets_id: 2,
    startDate: 5 - 22 - 2022,
    endDate: 5 - 25 - 2022,
  },
];

const seedBooking = () => Booking.bulkCreate(bookingData);

module.exports = seedBooking;
