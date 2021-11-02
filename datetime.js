var currentDate = new Date();

console.log(currentDate);

var time=currentDate.toTimeString();

console.log(time);

var hours=currentDate.getHours();

var min=currentDate.getMinutes();

var sec=currentDate.getSeconds();

hms=hours*3600000;

mms=min*60000;

sms=sec*1000;

ms=hms+sms+mms;

console.log("Time in milliseconds",ms);

hs=hours*3600;

ms=min*60;

s=hs+ms+sec;

console.log("Time in seconds",s);

var utc=currentDate.toGMTString();

console.log("UTC Format : ",utc);

var ld=currentDate.toLocaleDateString();

var lt=currentDate.toTimeString();

console.log("DD/MM/YYYY HH:MM:SS Format : ",ld,lt);

var x=currentDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

console.log("DD-MON-YYYY HH:MM:SS Format : ",x);

console.log("Total hours",hours);

var hm=hours*60;

hmm=hm+min;

console.log("Hours+min in minutes",hmm);