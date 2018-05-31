// import axios from 'axios'

// // WEDS AM: use the remote url to test!

// var resultsurl = 'https://interactive.guim.co.uk/atoms/2018/05/irish-abortion-referendum/static/results.json';
// var yesbar = document.querySelector('.gv-bar.gv-yes');
// var nobar = document.querySelector('.gv-bar.gv-no');
// var yesvalue = document.querySelector('.gv-answer-value.gv-yes');
// var novalue = document.querySelector('.gv-answer-value.gv-no');
// var timestamp = document.querySelector('.gv-timestamp');
// var progress = document.querySelector('.gv-declared');


// function fetchdata() {
//     axios.get(resultsurl)
//     .then(function(json){
//         yesbar.style.width = json.data.votes_in_favour_percent + "%";
//         nobar.style.width = json.data.votes_against_percent + "%";
//         yesvalue.innerText = json.data.votes_in_favour_percent + "%";
//         novalue.innerText = json.data.votes_against_percent + "%";
//         timestamp.innerText = 'at ' + json.data.timestamp;
//         progress.innerText = json.data.constituenciesDeclared;
//     })
//     .catch(function (err) {
//         console.log(err)
//     })
// }


// setInterval(function() {
//     fetchdata();
// },150000)

// fetchdata();