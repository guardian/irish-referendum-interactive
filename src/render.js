import templateHTML from "./src/templates/main.html!text"
import axios from 'axios'
import xmlparse from 'pixl-xml'
import fs from 'fs'
import mustache from 'mustache'


//TEST
var url = 'https://gdn-cdn.s3.amazonaws.com/testing/2018/05/irish-referendum-test/results-feed.xml'
//LIVE
//var url = 'https://www.referendum.ie/results-feed.xml';

var nationalresult;

var timestamp = new Date().toLocaleTimeString([],{timeZone: 'Europe/Dublin', hour: '2-digit', minute: '2-digit'})

console.log(timestamp);

export async function render() {

    var resultxml = (await (axios.get(url))).data;
    var results = xmlparse.parse(resultxml);
    nationalresult = results.Results.channel.national_result;
    var countOfDeclared = results.Results.channel.item.filter(c => {
        return c.perc_yes !== '0%' && c.perc_yes.length > 0;
    });
    nationalresult.constituenciesDeclared = countOfDeclared.length;
    nationalresult.timestamp = timestamp;
    var outputhtml = mustache.render(templateHTML, nationalresult);
    return outputhtml;

}
