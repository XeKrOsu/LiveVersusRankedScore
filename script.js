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

const baseURL = "https://osu.ppy.sh/api/get_user?k=4cf18ced7dbee5e604b829e96ba2118a9e3112cd";

let username = "Soulphase";
let mode = 0;

let user = JSON.parse(fetch(baseURL + "&u=" + username + "&m=" + mode));

console.log(user);