fetch("https://osu.ppy.sh/oauth/token", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "grant_type": "authorization_code",
        "client_id": 1,
        "client_secret": "secret",
        "redirect_uri": "https://notarealaddress.local/oauth/osu",
        "code": ""
    })
})
.then(response => {
    return response.json();
});