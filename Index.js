
  const image = document.querySelector('.imge');
  const body = document.querySelector('body');
  const bigContainer = document.querySelector('.bigContainer');
  const countries = document.querySelector('.countriess');
  const turn_on = document.querySelector("#turn_on");
  const button = document.querySelector('button');
  const friday = document.querySelector('.friday');
  const iron = document.querySelector('.iron');
  const canvas = document.getElementById('canv');
  const fritext = document.getElementById('fs');
  const ctx = canvas.getContext('2d');
  const w = canvas.width = document.body.offsetWidth;
  const h = canvas.height = document.body.offsetHeight;
  const cols = Math.floor(w / 20) + 1;
  const ypos = Array(cols).fill(0);

  
function wishMe(message) {
    let day = new Date();
    let hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        readOut("Good Morning Boss");
    }

    else if(hr == 12) {
        readOut("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        readOut("Good Afternoon Boss");
    }

    else {
        readOut("Good Evening Boss");
    }
}

window.onload = function() {
    readOut("Activating Inertia");
    readOut("Going online");
    wishMe();
};
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = localStorage.getItem("lang");
 button.onclick = () => {
 recognition.start();
 friday.style.display = 'none';
 }
 
let stopingR = false;
let fridayComs = [];
fridayComs.push("open whatsapp");
fridayComs.push("open firebase");
fridayComs.push("open netlify");
fridayComs.push("open twitter");
fridayComs.push("open my twitter profile");
fridayComs.push("open instagram");
fridayComs.push("open my Instagram profile");
fridayComs.push("open github");
fridayComs.push("open my github profile");
fridayComs.push('play "your keywords" - to search on youtube ');
fridayComs.push("close this youtube tab - to close opened youtube tab");
fridayComs.push("open my github profile");

 recognition.onresult = function(event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  transcript.toLowerCase();
  let userData = localStorage.getItem("jarvis_setup");
  console.log(transcript);
  document.getElementById('ps').innerHTML = transcript;
  if(transcript.includes('hi') || transcript.includes('hi jarvis') || transcript.includes('hello') || transcript.includes('hello jarvis')) {
    wishMe();
    readOut('how can i help you');
  }
else if(transcript.includes("switch to Hindi")){
      readOut("switching to hindi");
      speech_lang = "hi-IN";
      localStorage.setItem("lang", "hi-IN");
      stopingR = true;
      recognition.stop();
      location.reload();
      readOut("मैं तैयार हू, सर");
    }
else if(transcript.includes("स्विच टू इंग्लिश")){
      readOut("switching to english")
      speech_lang = "en-IN"
      localStorage.setItem("lang", "en-IN")
      stopingR = true;
      recognition.stop();
      location.reload();
      readOut("i am ready");
    }
else if(transcript.includes('how are you')) {
    readOut("I am fine boss! tell me how can i assist you");
    }
else if (transcript.includes("shutdown") || transcript.includes('stop')) {
      readOut("Ok sir i will take a nap");
      stopingR = true;
      recognition.stop();
    }

else if (transcript.includes("play")) {
      let playStr = transcript.split("");
      playStr.splice(0, 5);
      let videoName = playStr.join("");
      playStr = playStr.join("").split(" ").join("+");
      readOut(`searching youtube for ${videoName}`);
      let a = window.open(`https://www.youtube.com/search?q=${playStr}`
      );
      windowsB.push(a)
    }
    

    
else if (transcript.includes("open WhatsApp")) {
      readOut("opening whatsapp");
      let a = window.open("https://web.whatsapp.com/");
      windowsB.push(a)
    }
else if (transcript.includes("open netlify")) {
      readOut("opening netlify");
      let a = window.open("https://app.netlify.com/");
      windowsB.push(a)
    }
  else if (transcript.includes("open spotify")) {
      readOut("opening spotify");
      let a = window.open("https://open.spotify.com/");
      windowsB.push(a);
  }
 else if (transcript.includes("open firebase") || transcript.includes("account")) {
      readOut("opening firebase console");
      let accId = transcript;
      accId = accId.split("");
      accId.pop();
      accId = accId[accId.length - 1];
      console.log(`accId: ${accId}`);
      // https://console.firebase.google.com/u/0/
      let a = window.open(`https://console.firebase.google.com/u/${accId}/`);
      windowsB.push(a)
    }
else if (transcript.includes("open Canvas design")) {
      readOut("opening canva designs");
      window.open("https://www.canva.com/folder/all-designs");
    }
  
else if(transcript.includes("open Canvas") || transcript.includes("open camera")) {
      readOut("opening canva");
      window.open("https://www.google.com/");
    }
  
else if(transcript.includes('name')) {
        readOut("My name is jarvis, I am vertual assistant created by Abhay Majhi who is 19 years old and student of jnv hooghly");
    }
else if(transcript.includes('what is') || transcript.includes('who is') || transcript.includes('what are') || transcript.includes('search in google')) {
        window.open(`https://www.google.com/search?q=${transcript.replace(" ", "+")}`, "_blank");
        readOut("This is what i found on internet regarding " + transcript);
    }
else if(transcript.includes('search for YouTube') || transcript.includes('search in YouTube')) {
        window.open(`https://m.youtube.in/search?q=${transcript.replace(" ", "+")}`, "_blank");
        readOut("This is what i found on internet regarding " + transcript);
    }
else if(transcript.includes('Wikipedia') || transcript.includes('search in Wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${transcript.replace("Wikipedia", "")}`, "_blank");
        readOut("This is what i found on wikipedia regarding " + transcript);
    }

    else if(transcript.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        readOut(time);
    }

    else if(transcript.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: "numeric"});
        readOut(date);
    }
    else if (transcript.includes("what's the current charge") || transcript.includes('current charge') || transcript.includes('battery status') || transcript.includes('battery')) {
      readOut(`the current charge is ${charge}`);
    }
    else if (transcript.includes("what's the charging status")) {
      readOut(`the current charging status is ${chargeStatus}`);
    }
    else if (transcript.includes("connection status")) {
      readOut(`you are ${connectivity} sir`);
    }
    
    else if (transcript.includes("tell about yourself") || transcript.includes('tell me about yourself') || transcript.includes('introduce yourself')) {
      readOut("sir, i am a jarvis, a voice asistant made for browsers using javascript by one of the Enthusiastic dev on the planet. I can do anything which can be done from a browser.");
    }
    else if (transcript.includes("top headlines")) {
      readOut("These are today's top headlines sir");
      getNews();
    }
    else if (transcript.includes("news regarding")) {
      // readOut("These are today's top headlines sir")
      let input = transcript
      let a = input.indexOf("regarding")
      input = input.split("")
      input.splice(0,a+9)
      input.shift()
      input.pop()
  
      readOut(`here's some headlines on ${input.join("")}`)
      getCategoryNews(input.join(""))
    }
   else if (transcript.includes("open calendar")) {
      readOut("opening calendar");
      let a = window.open("https://calendar.google.com/");
      windowsB.push(a)
    }
   else if (transcript.includes("open Instagram")) {
      readOut("opening instagram sir");
      let a =window.open("https://www.instagram.com");
      windowsB.push(a)
    }
   else if (transcript.includes("open my twitter profile")) {
      readOut("opening your twitter profile");
      let a=window.open(`https://twitter.com/${JSON.parse(userData).twitter}`);
      windowsB.push(a)
    }
    else if (transcript.includes("open twitter")) {
      readOut("opening twitter sir");
      let a = window.open(`https://twitter.com/`);
      windowsB.push(a)
    }
    else if(transcript.includes("go back")) {
      readOut("ok boss!");
      window.history.back();
    }
    else if(transcript.includes("information") && transcript.includes("regarding")) {
      let api = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=";
      let subject = transcript.replace("information regarding" , "");
      let api_new = api+subject;
      console.log(subject);
      fetch(api_new)
              .then(response => response.json())
              .then(response => {
                response = response.query.pages;
                let pageId = Object.keys(response)[0];
                let extract = response[pageId].extract;
                console.log(extract);
                readOut(extract);
              });
    }
    
    else if(transcript.includes('vibrate') || transcript.includes('vibration')) {
      readOut("start vibrating...");
      window.disabled = true;
         initiateChat()
    }
    else if(transcript.includes('location')) {
    getLocation();
    showPosition(position);    
    }
    else if(transcript.includes('open tic tac toe') || transcript.includes('tic tac toe') || transcript.includes('open tic') || transcript.includes('open game')) {
      readOut('opening...');
      console.log('opening tic tac toe...')
      window.open('https://abhaytictoc.tiiny.site/#');
    }
    else if(transcript.includes('countries information') || transcript.includes('country') || transcript.includes('country information')) {
      readOut('here! the countries information boss');
      countries.style.display = 'block';
      bigContainer.style.display = 'none';
      displayCountriesTable();
    }
else if(transcript.includes('Matrix effect') || transcript.includes('matrix') || transcript.includes('Matrix')) {
      readOut('ok boss!');
      canvas.style.display = 'block';
      bigContainer.style.display = 'none';
      setInterval(matrix, 50);
    }
    
    else if(transcript.includes('tab') || transcript.includes('tabs') || transcript.includes('close')) {
      readOut('closing tab...');
      closeCurrentTab();
    }
    
else if(transcript.includes("जानकारी") && transcript.includes("बताओ"))  {
      const language = 'hi';  // 'hi' is the language code for Hindi
      let api = `https://${language}.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles= `;
      let subject = transcript.replace("जानकारी बताओ" , "");
      let api_new = api+subject;
      console.log(subject);
      fetch(api_new)
              .then(response => response.json())
              .then(response => {
                response = response.query.pages;
                let pageId = Object.keys(response)[0];
                let extract = response[pageId].extract;
                console.log(extract);
                readOutHindi(extract);
              });
    }
else if(transcript.includes('red')) {
     readOut('ok boss!');
     body.style.background = 'red';
    }
else if(transcript.includes('black')) {
     readOut('ok boss!');
     body.style.background = 'black';
    }
else if(transcript.includes('blue')) {
     readOut('ok boss!');
     body.style.background = 'blue';
    }
else if(transcript.includes('pink')) {
     readOut('ok boss!');
     body.style.background = 'pink';
    }
else if(transcript.includes('violet')) {
     readOut('ok boss!');
     body.style.background = 'violet';
    }
else if(transcript.includes('gold') || transcript.includes('yellow')) {
     readOut('ok boss!');
     body.style.background = 'gold';
    }
else if(transcript.includes('red')) {
     readOut('ok boss!');
     body.style.background = 'red';
    }
else if(transcript.includes('white')) {
     readOut('ok boss!');
     body.style.background = 'white';
    }
else if(transcript.includes('green')) {
     readOut('ok boss!');
     body.style.background = 'green';
    }
else if(transcript.includes('silver')) {
     readOut('ok boss!');
     body.style.background = 'silver';
    }
    else if(transcript.includes('flash on') || transcript.includes('flash off') || transcript.includes('flash')) {
      readOut('ok boss!')
    toggleFlashlight();
    }
    else if(transcript.includes('take image') || transcript.includes('images') || transcript.includes('image')) {
navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then((stream) => {
                const video = document.getElementById('video');
                video.srcObject = stream;
            })
            .catch((error) => {
                console.error('Error accessing camera:', error);
            });

            document.getElementById('captureBtn').addEventListener('click', () => {
            const video = document.getElementById('video');
            const canvas = document.getElementById('canvas');
            const downloadLink = document.getElementById('downloadLink');
            const context = canvas.getContext('2d');

            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas to base64 image data
            const imageDataURL = canvas.toDataURL('image/png');

            // Display download link
            downloadLink.href = imageDataURL;
            downloadLink.download = 'captured_image.png';
            downloadLink.style.display = 'block';
        });
            bigContainer.style.display = 'none';
            image.style.display = 'block';
    }
    else if(transcript.includes('print')) {
        window.print(fritext);
    }
    else {
      readOut('i do not understand boss!');
    }
}

  recognition.onstart = function() {
    console.log('i am active');
    iron.style.display = 'block';
    friday.style.display = 'none';
  }
  recognition.continuous = true;
  recognition.onend = function() {
    console.log('i am deactive');
    friday.style.display = 'block';
    iron.style.display = 'none';
  }
  function readOut(message) {
    const Speech = new SpeechSynthesisUtterance();
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
    console.log(Speech);
    document.getElementById('fs').innerHTML = Speech.text;
  }


let batteryPromise = navigator.getBattery();
  batteryPromise.then(batteryCallback);

  
function batteryCallback(batteryObject) {
    printBatteryStatus(batteryObject);
    setInterval(() => {
      printBatteryStatus(batteryObject);
    }, 5000);
  }
  function printBatteryStatus(batteryObject) {
    document.querySelector("#battery").textContent = `${
      (batteryObject.level * 100).toFixed(2)
    }%`;
    charge = batteryObject.level * 100
    if (batteryObject.charging === true) {
      document.querySelector(".battery").style.width = "200px";
      document.querySelector("#battery").textContent = `${(batteryObject.level * 100).toFixed(2)}% Charging`;
      chargeStatus = "plugged in";
    }
  }
if(navigator.onLine){
      document.querySelector("#internet").textContent = "online"
      connectivity = "online"
    } else {
      document.querySelector("#internet").textContent = "offline"
      connectivity = "offline"
    }
let speech_lang = "hi-IN"; // "hi-IN" | "en-US"
if(localStorage.getItem("lang") === null) {
  localStorage.setItem("lang", "en-US");
}
async function getNews(){
  var url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b0712dc2e5814a1bb531e6f096b3d7d3"
  var req = new Request(url)
  await fetch(req).then((response) => response.json())
  .then((data) => {
    console.log(data);
    let arrNews = data.articles
    arrNews.length = 10
    let a = []
    arrNews.forEach((e,index) => {
      a.push(index+1)
      a.push(".........")
      a.push(e.title)
      a.push(".........")

    });
    readOut(a)
  })
}

let yyyy,mm,dd;

dd = date.getDate();
mm = date.getMonth();
yyyy = date.getFullYear();

async function getCategoryNews(category){
  var url = "https://newsapi.org/v2/everything?" + `q=${category}&` + `from=${yyyy}-${mm}-${dd}&` + "sortBy=popularity&" + "apiKey=b0712dc2e5814a1bb531e6f096b3d7d3";

    // https://newsapi.org/v2/everything?q=Apple&from=2021-09-19&sortBy=popularity&apiKey=API_KEY

    var req = new Request(url);

  await fetch(req).then((response) => response.json()).then((data) => {
    console.log(data);
    let arrNews = data.articles;
    arrNews.length = 10;
    let a = [];
    arrNews.forEach((e,index) => {
      a.push(index+1);
      a.push(".........");
      a.push(e.title);
      a.push(".........");
    });
    readOut(a);
  })
}

function readOutHindi(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  speech.lang = "hi-IN"
  window.speechSynthesis.speak(speech);
  console.log("Speaking out");
  document.getElementById('fs').innerHTML = speech.text;
  // createMsg("jmsg", message);
}

function initiateChat() {
        if("vibrate" in window.navigator) {
          window.navigator.vibrate(5000);
        } else {
          console.log("vibration not supported");
        }
    }
    
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("fs").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  document.getElementById("fs").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}


 async function getCountriesData() {
      const response = await fetch("https://restcountries.com/v2/all")
      const countriesData = await response.json()
      return countriesData
    }
    async function displayCountriesTable() {
      const countries = await getCountriesData()
      console.log(countries);
      const countriesTableBody = document.getElementById("countries");
      for(let country of countries) {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = country.name
        row.appendChild(nameCell)
        
        const flagCell = document.createElement('td');
        const flagImg = document.createElement('img');
        flagImg.src = country.flag
        flagCell.appendChild(flagImg)
        row.appendChild(flagCell)
        
       const populationCell = document.createElement('td');
        populationCell.textContent = (country.population / 1000000).toFixed(2)
        row.appendChild(populationCell)
        
      const areaCell = document.createElement('td');
        areaCell.textContent = (country.area / 1000000).toFixed(2)
        row.appendChild(areaCell)
        
     const capitalCell = document.createElement('td');
        capitalCell.textContent = country.capital
        row.appendChild(capitalCell)
        
    const languagesCell = document.createElement('td');
    const languageList = country.languages.map(language => language.name).join(', ');
    languagesCell.textContent = languageList;
        row.appendChild(languagesCell)
        
    const callingCell = document.createElement('td');
        callingCell.textContent = '+' + country.callingCodes[0];
        row.appendChild(callingCell)
        
    const regionCell = document.createElement('td');
        regionCell.textContent = country.region
        row.appendChild(regionCell)
        
    const independentCell = document.createElement('td');
        independentCell.textContent = country.independent 
        row.appendChild(independentCell)

    countriesTableBody.appendChild(row);
      }
    }
    displayCountriesTable();
    
    
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
function matrix() {
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);
  
  ctx.fillStyle = '#0f0';
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);

function toggleFlashlight() {
    const body = document.body;
    const isFlashlightOn = body.classList.toggle('flashlight-on');

    try {
      if (isFlashlightOn) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
          .then(stream => {
            const track = stream.getVideoTracks()[0];
            track.applyConstraints({ advanced: [{ torch: true }] });
          })
          .catch(error => {
            console.error('Error accessing the camera:', error);
          });
      } else {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
          .then(stream => {
            const track = stream.getVideoTracks()[0];
            track.applyConstraints({ advanced: [{ torch: false }] });
          })
          .catch(error => {
            console.error('Error accessing the camera:', error);
          });
      }
    } catch (error) {
      console.error('Error toggling flashlight:', error);
    }
  }
function closeCurrentTab() {
      window.close();
    }
