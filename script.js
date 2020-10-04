const url = new URL("https://osu.ppy.sh/api/v2/users/1/osu");

let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
}

fetch(url, {
    method: "GET",
    headers: headers,
})
.then(response => response.json())
.then(json => console.log(json));