function checkAndNotify() {
    fetch('/api/hazemIn')
    .then(data => {
        self.registration.showNotification("URGENT", { body: "hazem has joined pls donate. clicking on this will take you to his profile!", url: "https://www.roblox.com/users/151848836/profile" })
    });
}



