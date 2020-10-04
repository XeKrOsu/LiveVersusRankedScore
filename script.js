const url = new URL("https://osu.ppy.sh/api/v2/users/1/scores/best");

let params = {
    "include_fails": "0",
    "mode": "osu",
    "limit": "12",
    "offset": "1",
};
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

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