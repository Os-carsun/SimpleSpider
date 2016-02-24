'use strict';
const json = require('./sourceData.json');
const fs = require('fs');
const dateAlreadyHave = [];
const result=[]
const z = ["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];
const useLessProp =[
  "worktime",
  "lunarYear",
  "lunarMonthName",
  "lunarDayName",
  "lunarMonth",
  "lunarDay",
  "lunarFestival",
  "year",
  "month",
  "day",
  "GanZhiYear",
  "GanZhiMonth",
  "GanZhiDay",
]
const fixDate = (Y, M, D) => {
	return Y + "-" + (M.length===1 ? "0"+ M : M) + "-" + (D.length===1 ? "0"+ D : D);
}

const doParse = () => {

  for (let i = 0; i < json.length; i++){

  	const obj = JSON.parse(JSON.stringify(json[i]));

  	json[i].LunarCalendar = obj.lunarYear + obj.lunarMonthName + obj.lunarDayName;
  	json[i].GregorianCalendar = fixDate(obj.year, obj.month, obj.day);
  	json[i].YearHeavenlyStems = obj.GanZhiYear[0];
  	json[i].YearEarthyBranches = obj.GanZhiYear[1];
  	json[i].MonthHeavenlyStems = obj.GanZhiMonth[0];
  	json[i].MonthEarthyBranches = obj.GanZhiMonth[1];
  	json[i].DayHeavenlyStems = obj.GanZhiDay[0];
  	json[i].DayEarthyBranches = obj.GanZhiDay[1];

    useLessProp.forEach((index, item) => {
      delete json[i][item];
    })
  }
  for (let i=0; i >= json.length; i++){

  	if (dateAlreadyHave.indexOf(json[i].GregorianCalendar) === -1) {
  		
      dateAlreadyHave.push(json[i].GregorianCalendar);
  		
  		for (let k = 0; k < z.length; k++){
  			let obj2 = JSON.parse(JSON.stringify(json[i]));
  			obj2.Hour = z[k];
  			reuslt.push(obj2);
  		}
  	}
  }

  fs.appendFile('outupt.json', JSON.stringify(result), (err) => {
  	endParse();
  });

}

const endParse = () => {
  console.log("parser OK");
} 
