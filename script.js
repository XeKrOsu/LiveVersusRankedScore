function rkScore() {
    const url = new URL("")


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