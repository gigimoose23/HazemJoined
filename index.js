
let hazemIn = false
const express = require("express")
const path = require("path");
const app = express();
app.use('/', express.static('public'));
app.set("view engine", "ejs")
function myFunction() {

    
    (async () => {
        try {
            const response = await fetch('https://presence.roblox.com/v1/presence/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'insomnia/9.0.0'
                },
                body: JSON.stringify({
                    userIds: [151848836]
                })
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            const mainPresence = data.userPresences[0]
           
            const placeId = mainPresence.placeId
            if (placeId == 8737602449) {
                console.log("hazem is in pls donate"); // Log the response data to console
                hazemIn = true


               

                let url = 'https://discord.com/api/webhooks/1237289701774458920/KaiSK3N9oIrw8pF7csCGaoWlilbQGS10TVZO-6bK9h_J5gXizN5_ERHAiZDUD_i_sALg';
                
                // Create a new Date object (current date and time)
const now = new Date();

// Get the UTC time components from the Date object
const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1; // UTC months are zero-based (0 for January)
const day = now.getUTCDate();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();

// Create a string representing the current GMT date and time
const gmtDateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;
                
                
                let options = {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'insomnia/9.1.0',
                    cookie: '__dcfduid=b3fcdf2a064411efbc2262671167fa37; __sdcfduid=b3fcdf2a064411efbc2262671167fa376f861633e612ea709ef5158fe42dafcd80b7a15af6331b2fc81d8c77db81af9a; __cfruid=a9c723c2e3bf230b34d24aa3fb68490a500d17b8-1715063316; _cfuvid=EZ1fprZ7YbC7QSYrvNUCvzzBJN3ju0umi_e.a_IBNiM-1715063316823-0.0.1.1-604800000; '
                  },
                  body: `{"content":"HAZEM IS IN PLEASE DONATE @everyone, this happened at  ` + gmtDateString `"}`
                };
                
                fetch(url, options)
                  .then(res => res.json())
                  .then(json => console.log(json))
                  .catch(err => console.error('error:' + err));





            }
            else {
    
// Create a new Date object (current date and time)
const now = new Date();

// Get the UTC time components from the Date object
const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1; // UTC months are zero-based (0 for January)
const day = now.getUTCDate();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();

// Create a string representing the current GMT date and time
const gmtDateString = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

hazemIn = false

                console.log("hazem is not in pls donate, shows " + placeId + " but they were last seen being " + mainPresence.lastLocation + ". this happened at " + gmtDateString)
            }
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    })();





 }

app.get("/api/hazemIn", (req, res) => {
    res.send(hazemIn);
})

app.get("/sw.js", (req, res) => {
    const op = {
        root: path.join(__dirname)
    };
    // sending file
    const gfgFile = 'views/sw.js';
    res.sendFile(gfgFile, op, function (error) {
        if (error) {
            console.log("error")
        }
    });
})

app.get("/main", (req,res) => {
    res.render("index");
})



app.use((req, res, next) => {
    res.redirect("main")
  })

app.listen(8080, () => {
    console.log("web server running!")
})



 setInterval(myFunction, 2000);