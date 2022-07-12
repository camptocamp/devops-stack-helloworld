// Search something on DuckDuckGo and if no arguments are provided go to duckduckgo.com
d = duckduckgo;
duck = duckduckgo;
function duckduckgo(args) {
    if (args != undefined) {
        search = args.replace(" ", "+")
        window.open("https://www.duckduckgo.com/?q=" + args.replace(" ", "+"));
    } else {
        window.open("https://www.duckduckgo.com");
    }
}

// Search something on Google and if no arguments are provided go to google.com
g = google;
function google(args) {
    if (args != undefined) {
        let search = args.replace(" ", "+")
        window.open("https://www.google.com/search?q=" + search);
    } else {
        window.open("https://www.google.com");
    }
}

// Display time
time = clock;
function clock(args) {
    var today = new Date();
    block_log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
}

// Clear the terminal
cls = clear;
function clear(args) {
    document.getElementById('wrapper').innerHTML = "";
}

// Go to a website
function launch(args) {
    args = args.trim() // removes leading/trailing whitespace

    // This command handles both simple one-site commands ("launch example.com")
    // and multi-site commands ("launch example1.com example2.com example3.com").
    siteArray = args.split(" ")
    for (let i in siteArray) {
        window.open("https://" + siteArray[i])
    }
}

// TODO Add help with info about available links
// TODO Add hello as alias to help
// TODO Add DuckDuckGo search
// TODO Add favicon to terminal.css