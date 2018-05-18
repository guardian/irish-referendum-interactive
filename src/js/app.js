// javascript goes here
import axios from 'axios'
//import xmlparse from 'pixl-xml'

var url = 'https://www.referendum.ie/results-feed.xml'

axios.get(url).then(function(response){
    console.log(response);
})