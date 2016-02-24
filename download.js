'use strict';
const request = require('superagent');
const fs = require('fs');
const sleep = require('sleep');

const dataToRegularString = (jsonObject) => {
  return JSON.stringify(jsonObject).slice(1).slice(0,length-1)+", \r\n";
}

const getLunarInfo = (year, month) => {
	request
	.get('http://api.tuijs.com/calendar')
	.query({ year: year, month: month+1 })
	.set('Accept', 'application/json')
	.end((err, res) => {

		const json = JSON.parse(res.text).monthData;
	
  	fs.appendFile('sourceData.json', dataToRegularString(json) , (err) => {
	
  		if (year > 2033) {
        endDownload();
      }
  
      let tmp = new Date(year, month);
			tmp.setMonth(tmp.getMonth()+1);
			sleep.usleep(1000);
			getLunarInfo(tmp.getFullYear(), tmp.getMonth());
    });
	})
	
}
const endDownload = () => {
  console.log("download OK!");
} 
getLunarInfo(1901, 0);