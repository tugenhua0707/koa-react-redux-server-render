
import fs from 'fs';
import thunkify from 'thunkify';
import latestJson from '../data/latest-bills.json';
import datailedJson from '../data/datailed-bills.json';
const readFile = thunkify(fs.readFile);

export default {
  list: function *() {
    this.type = 'json';
    this.body = JSON.parse(latestJson);
  },
  info: function *() {
    var billData = JSON.parse(datailedJson);
    this.type = 'json';
    this.body = billData;
  }
}