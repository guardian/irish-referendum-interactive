import templateHTML from "./src/templates/main.html!text"
import axios from 'axios'
import xmlparse from 'pixl-xml'
import fs from 'fs'
import mustache from 'mustache'
import mkdirp from 'mkdirp'
import data from './data.js'

mkdirp.sync('./.build/static')

export async function render() {
    var nationalresult = await data();
    var outputhtml = mustache.render(templateHTML, nationalresult);
    return outputhtml;
}
