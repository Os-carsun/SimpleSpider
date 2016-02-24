'use strict';

const json2csv = require('json2csv');
const myData = require('./output.json');
const fs = require('fs');



const fields = ["zodiac","YearHeavenlyStems","YearEarthyBranches","MonthHeavenlyStems","MonthEarthyBranches","DayHeavenlyStems","DayEarthyBranches","LunarCalendar","lunarLeapMonth","GregorianCalendar","Hour"
];

json2csv({ data: myData, fields: fields }, (err, csv) => {
  if (err) console.log(err);
  
  fs.appendFile('output.csv', csv+"\r\n" , (err) => {

    console.log("json to csv OK");		
	});
});