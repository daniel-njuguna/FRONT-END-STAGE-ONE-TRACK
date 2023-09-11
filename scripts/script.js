document.addEventListener("DOMContentLoaded", function () {
    // Get elements by data-testid attributes
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');
    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    // Get current date and time
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[currentDate.getUTCDay()];

    // Populate data-testid elements with data
    currentDayOfTheWeek.textContent = `Current Day of the Week: ${currentDay}`;
    currentUTCTime.textContent = `Current UTC Time (in milliseconds): ${currentDate.getTime()}`;
});
