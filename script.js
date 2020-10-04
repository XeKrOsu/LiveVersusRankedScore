//fetch("https://osu.ppy.sh/api/v2/users/1/osu", {
//    headers: {
//      Authorization: 'Bearer BWzJJTNhoDEgACWDvIH8897nGnAkBBflUkG3vVGE'
//    }
//});
//
//const url = new URL("https://osu.ppy.sh/api/v2/users/1/osu");
//
//let headers = {
//    "Accept": "application/json",
//    "Content-Type": "application/json",
//}
//
//fetch(url, {
//    method: "GET",
//    headers: headers
//})
//.then(response => response.json())
//.then(json => console.log(json));

const TOKEN = "4cf18ced7dbee5e604b829e96ba2118a9e3112cd";

function getURL(Username, Mode) {
    return "https://osu.ppy.sh/api/get_user?k=" + TOKEN + "&u=" + Username + "&m=" + Mode;
}

fetch(getURL("Soulphase", 0))
.then(response => response.json())
.then(json => console.log(json[0].username + " : " + json[0].ranked_score));