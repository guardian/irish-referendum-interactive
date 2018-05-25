import axios from 'axios'
import fs from 'fs'
import xmlparse from 'pixl-xml'
import aws from 'aws-sdk'
import config from './../config.json'

var s3 = new aws.S3();
var s3params = {
    Bucket: "gdn-cdn",
    Key: 'atoms/' + config.path + '/static/results.json',
    ACL: "public-read",
    ContentType: "application/json",
    CacheControl: "max-age=60"
}

//TEST
// var url = 'https://gdn-cdn.s3.amazonaws.com/testing/2018/05/irish-referendum-test/results-feed.xml'
//LIVE
//var url = 'https://www.referendum.ie/results-feed.xml';
// LIVE 2
var url = 'http://www.referendum.ie/results-feed/'

var nationalresult;

var timestamp = new Date().toLocaleTimeString([], { timeZone: 'Europe/Dublin', hour: '2-digit', minute: '2-digit' })


export async function data() {

    var resultxml = (await (axios.get(url))).data;
    var results = xmlparse.parse(resultxml);
    nationalresult = results.Results.channel.national_result;
    if (results.Results.channel.item) {
        countOfDeclared = results.Results.channel.item.filter(c => {
            return c.perc_yes !== '0%' && c.perc_yes.length > 0;
        });
        nationalresult.constituenciesDeclared = countOfDeclared.length;
    } else nationalresult.constituenciesDeclared = 0;
    nationalresult.timestamp = timestamp;
    s3params.Body = JSON.stringify(nationalresult);
    console.log(nationalresult);
    s3.putObject(s3params, function (err) {
        if (err) console.log(err);
    })
    return nationalresult;
};
