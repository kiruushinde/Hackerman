let a = [
    "Initializing the Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 1...",
    "IP address : 127.923.928.231...",
    "Connection Failed !! retrying...",
    "Connecting to server 2...",
    "IP address 127.923.928.231...",
    "Connected Successfully !!",
    "Username iammeow...",
    "Trying Brute Force 🕷️",
    "100K passwords tried...",
    "Match Not Found...",
    "Another 200K passwords tried...",
    "Match Found !!!",
    "Accessing account...",
    "Hack Successful ✅",
];


let sleep = async (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, sec * 1000);
    })
}


let showMsg = async (messages, index, totalLen) => {
    await sleep(0.5);
    console.log(messages);
    text.innerHTML = text.innerHTML + messages + "<br>";

    if (index != totalLen - 1) {

        await sleep(1);
        text.innerHTML = text.innerHTML + "." + "<br>";
        await sleep(1);
        text.innerHTML = text.innerHTML + "." + "<br>";
    }

}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showMsg(a[i], i, a.length);
    }
})()