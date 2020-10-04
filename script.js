function rkScore() {
    const url = new URL("https://osu.ppy.sh/api/user=9358042&k=dd3cf8d732d52467a004f69dc400da964697b2d3")


let headers = {
    "Accept": "application/json",
    "Contnt-Type": "application/json",
}

fetch(url, {
    method:"GET",
    headers: headers,

}
    )
.then(response => response.json())
.then(json => console.log(json));
}