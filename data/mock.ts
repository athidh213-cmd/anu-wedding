export type Rsvp = {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
  message?: string;
  createdAt: string;
};

const daysAgo = (days: number, hour: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  date.setHours(hour, 18, 0, 0);
  return date.toISOString();
};

export const mockRsvps: Rsvp[] = [
  { id: 'rsvp-01', name: 'Meera Nair', attending: true, guests: 3, message: "Congratulations to you both! Can't wait to be there.", createdAt: daysAgo(0, 10) },
  { id: 'rsvp-02', name: 'Arjun Menon', attending: true, guests: 2, message: 'Wishing you a lifetime of happiness.', createdAt: daysAgo(0, 8) },
  { id: 'rsvp-03', name: 'Lakshmi Krishnan', attending: true, guests: 4, message: 'So happy for you both. See you in Palakkad!', createdAt: daysAgo(1, 18) },
  { id: 'rsvp-04', name: 'Rahul Varma', attending: false, guests: 0, message: 'Sending all our love, and wishing we could join you.', createdAt: daysAgo(1, 12) },
  { id: 'rsvp-05', name: 'Kavya Pillai', attending: true, guests: 1, message: "What a beautiful beginning. I'll be there!", createdAt: daysAgo(2, 16) },
  { id: 'rsvp-06', name: 'Sanjay Iyer', attending: true, guests: 5, message: 'Congratulations to you both! Our family is looking forward to it.', createdAt: daysAgo(2, 9) },
  { id: 'rsvp-07', name: 'Ananya Menon', attending: true, guests: 2, message: 'Wishing you a lifetime of happiness.', createdAt: daysAgo(3, 15) },
  { id: 'rsvp-08', name: 'Ananya Menon ', attending: true, guests: 2, message: 'With warm wishes for your forever.', createdAt: daysAgo(3, 11) },
  { id: 'rsvp-09', name: 'Vivek Radhakrishnan', attending: true, guests: 3, message: "Can't wait to celebrate this special day with you.", createdAt: daysAgo(4, 19) },
  { id: 'rsvp-10', name: 'Devika Suresh', attending: true, guests: 2, message: 'Many happy returns of this beautiful day!', createdAt: daysAgo(4, 10) },
  { id: 'rsvp-11', name: 'Nikhil Das', attending: false, guests: 0, message: 'So sorry we will miss it. Have a wonderful celebration.', createdAt: daysAgo(5, 17) },
  { id: 'rsvp-12', name: 'Priya Narayanan', attending: true, guests: 4, message: 'Congratulations! Looking forward to the celebrations.', createdAt: daysAgo(5, 8) },
  { id: 'rsvp-13', name: 'Gokul Krishnan', attending: true, guests: 1, message: "We wouldn't miss it for the world.", createdAt: daysAgo(6, 14) },
  { id: 'rsvp-14', name: 'Sreelakshmi Bose', attending: true, guests: 3, message: 'Wishing you both a lifetime filled with joy.', createdAt: daysAgo(6, 11) },
  { id: 'rsvp-15', name: 'Hari Menon', attending: true, guests: 2, message: 'A new chapter, a lifetime of memories. See you there.', createdAt: daysAgo(7, 16) },
  { id: 'rsvp-16', name: 'Riya Nair', attending: true, guests: 2, message: 'So delighted for you both!', createdAt: daysAgo(7, 9) },
  { id: 'rsvp-17', name: 'Thomas Mathew', attending: false, guests: 0, message: 'Our blessings are with you both always.', createdAt: daysAgo(8, 13) },
  { id: 'rsvp-18', name: 'Akhil Kumar', attending: true, guests: 6, message: "Congratulations to you both! Can't wait to be there.", createdAt: daysAgo(8, 8) },
  { id: 'rsvp-19', name: 'Shreya Iyer', attending: true, guests: 1, message: 'With love and best wishes for your wedding day.', createdAt: daysAgo(9, 18) },
  { id: 'rsvp-20', name: 'Madhav Nair', attending: true, guests: 2, message: 'See you both at the celebrations!', createdAt: daysAgo(9, 12) },
  { id: 'rsvp-21', name: 'Neethu Raj', attending: true, guests: 3, message: 'Wishing you a lifetime of happiness.', createdAt: daysAgo(10, 15) },
  { id: 'rsvp-22', name: 'Sonia Varma', attending: false, guests: 0, message: 'Sending our love from afar.', createdAt: daysAgo(10, 9) },
  { id: 'rsvp-23', name: 'Aditya Menon', attending: true, guests: 2, message: 'A beautiful day for a beautiful couple.', createdAt: daysAgo(11, 17) },
  { id: 'rsvp-24', name: 'Aditya  Menon', attending: true, guests: 2, message: 'Cannot wait to celebrate with you!', createdAt: daysAgo(11, 10) },
  { id: 'rsvp-25', name: 'Malavika Suresh', attending: true, guests: 4, message: 'Congratulations and lots of love to you both.', createdAt: daysAgo(12, 14) },
  { id: 'rsvp-26', name: 'Joel Thomas', attending: true, guests: 1, message: 'We are so happy for you!', createdAt: daysAgo(12, 8) },
  { id: 'rsvp-27', name: 'Reshma Mohan', attending: true, guests: 3, createdAt: daysAgo(13, 16) },
  { id: 'rsvp-28', name: 'Karthik Rajan', attending: false, guests: 0, createdAt: daysAgo(13, 10) },
];
