const TOKEN = "4cf18ced7dbee5e604b829e96ba2118a9e3112cd";

var score = [-1, -1];

function getURL(Username, Mode) {
    return "https://osu.ppy.sh/api/get_user?k=" + TOKEN + "&u=" + Username + "&m=" + Mode;
}

function fetchUser(Username, id) {

    fetch(getURL(Username, 0))
    .then(response => response.json())
    .then(function (json) {
        /*document.getElementById("player_name_"+id.toString()).innerHTML = json[0].username*/
        if (json.length > 0) {
            document.getElementById("player_name_"+id.toString()).href = "http://osu.ppy.sh/u/"+json[0].username
            document.getElementById("player_score_"+id.toString()).innerHTML = numberWithCommas(json[0].ranked_score)
            document.getElementById("player_image_"+id.toString()).src = "https://a.ppy.sh/"+json[0].user_id.toString()
            score[id-1] = parseInt(json[0].ranked_score, 0);
        }
    });
    /*.then(json => document.getElementById("player1").innerHTML = json[0]);*/
    /*console.log(json[0].username + " : " + json[0].ranked_score)*/

}

function comparePlayers(player1, player2) {
    
    fetchUser(player2, 2);
    fetchUser(player1, 1);

}

/*comparePlayers("MrLucky974", "XeKr");*/

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*setInterval(
    function() {
        if (document.getElementById("player_1_input").value != "" && document.getElementById("player_2_input").value != "") {
            comparePlayers(document.getElementById("player_1_input").value, document.getElementById("player_2_input").value)
        }
}, 500);*/

setInterval(
    function() {
        if (document.getElementById("player_1_input").value != "") {
            fetchUser(document.getElementById("player_1_input").value, 1)
        }
}, 500);

setInterval(
    function() {
        if (document.getElementById("player_2_input").value != "") {
            fetchUser(document.getElementById("player_2_input").value, 2)
        }
}, 500);

setInterval(
    function() {
        if (document.getElementById("player_1_input").value != "" && document.getElementById("player_2_input").value != "") {
            document.getElementById("ranked_score_difference").innerHTML = numberWithCommas(Math.abs(score[1] - score[0]));
        }
}, 500);