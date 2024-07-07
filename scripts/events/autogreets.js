const allOnEvent = global.GoatBot.onEvent;

const fs = require("fs");
const cron = require("node-cron");
const tz = "Asia/Karachi"; // Set time zone to Karachi, Pakistan

const greetings = {
  morning: [
    { time: "7:35 AM", message: "Good morning! ☀️ How about starting the day with a delicious breakfast?" },
    { time: "8:30 AM", message: "Rise and shine! It's breakfast time! 🍳☕" },
    { time: "9:00 AM", message: "Morning vibes! Anyone up for a breakfast feast?" },
  ],
  lunchtime: [
    { time: "12:00 PM", message: "It's lunchtime, my friends! Let's gather for a tasty meal." },
    { time: "12:30 PM", message: "Hungry yet? Lunch plans anyone?" },
    { time: "1:00 PM", message: "Lunch break! Who's in for some good food and great company?" },
  ],
  afternoonSnack: [
    { time: "3:00 PM", message: "Time for a snack break! Join me for some treats?" },
    { time: "3:30 PM", message: "Feeling a bit peckish? Snacks and chit-chat await!" },
    { time: "4:00 PM", message: "Afternoon delight: Snacks, laughter, and fun!" },
  ],
  eveningDinner: [
    { time: "6:00 PM", message: "Dinner plans tonight? Let's enjoy a hearty meal together." },
    { time: "7:36 PM", message: "Evening has come, and so has the dinner bell! 🍽️" },
    { time: "7:24 PM", message: "Dinner is served! Who's joining me at the table?" },
  ],
  lateNightSnack: [
    { time: "11:00 PM", message: "Late-night munchies? Come on over for some snacks!" },
    { time: "11:30 PM", message: "Midnight snack run, anyone? Let's satisfy those cravings." },
    { time: "12:00 AM", message: "Burning the midnight oil? Grab a snack and keep me company." },
  ],
};

module.exports = {
  config: {
    name: "autogreet",
    version: "1.1",
    author: "Zed",
    description: "Autogreeting",
    category: "events"
  },

  onStart: async ({ api, args, message, event, threadsData, usersData, dashBoardData, threadModel, userModel, dashBoardModel, role, commandName }) => {
    process.env.TZ = tz; // Set time zone globally

    cron.schedule('0 9 * * *', () => {
      sendRandomGreeting(greetings.morning);
    }, { tz });

    cron.schedule('0 12 * * *', () => {
      sendRandomGreeting(greetings.lunchtime);
    }, { tz });

    cron.schedule('0 15 * * *', () => {
      sendRandomGreeting(greetings.afternoonSnack);
    }, { tz });

    cron.schedule('0 18 * * *', () => {
      sendRandomGreeting(greetings.eveningDinner);
    }, { tz });

    cron.schedule('0 23 * * *', () => {
      sendRandomGreeting(greetings.lateNightSnack);
    }, { tz });
  }
};

function sendRandomGreeting(greetingArray) {
  const randomIndex = Math.floor(Math.random() * greetingArray.length);
  const { time, message } = greetingArray[randomIndex];
  console.log(`[${time}] ${message}`);
  // Add code to send the message to the desired chat or thread
  // api.sendMessage({ body: message }, threadID);
}