const body = document.querySelector("body");
    hourHand = document.querySelector(".hour");
    minuteHand = document.querySelector(".minute");
    secondHand = document.querySelector(".second");
    modeSwitch = document.querySelector(".mode-Switch");

if (localStorage.getItem("mode") === "Dark Mode") 
{
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => 
{
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => 
{
    let date = new Date(),
      secToDeg = (date.getSeconds() / 60) * 360,
      minToDeg = (date.getMinutes() /60) * 360,
      hrToDeg = (date.getHours() / 12) * 360;

    secondHand.style.transform = `rotateZ(${secToDeg}deg)`;
    minuteHand.style.transform = `rotateZ(${minToDeg}deg)`;
    hourHand.style.transform = `rotateZ(${hrToDeg}deg)`;
};

setInterval(updateTime, 1000);

updateTime();

function updateLiveDate() 
{
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric',weekday: 'long' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('liveDate').textContent = formattedDate;
}

setInterval(updateLiveDate, 1000);

updateLiveDate();