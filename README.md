#Simple api spider write by nodejs

##Introduction
ths code is written by javasript ES2015

It's a simple practice, just use following package:

* [superagent] (https://github.com/zemirco/json2csv) to make ajax more easy 
* [sleep] (https://github.com/ErikDubbelboer/node-sleep) not so quickly XP
* [json2csv] (https://visionmedia.github.io/superagent/) convert json file to csv file

##requirement
* nodejs ( >= 4.0.0 )
* npm

##install
###in project
```shell
npm install 
```

## usage 
download the api data to 'sourceData.json' 

```shell
node download.js
```

to remove the redundancy & parse 
```shell
node parser.js
```

convet file
```shell
node json2csv.js
```

