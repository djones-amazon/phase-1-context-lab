/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 /*const theList = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ];
  const fakeTimeStamp = '2023-04-30 2200';

const csvDataEmployees = [
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
  ]
  const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-01 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
  ]

  const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-01 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
  ]
*/

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    debugger;
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    debugger;
    return payable
}

const createEmployeeRecord = function(employeeInfo) {
    const employeeRecord = {
        firstName: employeeInfo[0],
        familyName: employeeInfo[1],
        title: employeeInfo[2],
        payPerHour: employeeInfo[3],
        timeInEvents: [],
        timeOutEvents: []};
    return employeeRecord;
}

const createEmployeeRecords = function(employeeList) {
    const employees = employeeList.map(employee => createEmployeeRecord(employee));
    return employees;
}

const createTimeInEvent = function(timeStamp) {
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(timeStamp.substr(11, 4)),
        date: timeStamp.substr(0, 10)
    });
    debugger;
    return this;
}

const createTimeOutEvent = function(timeStamp) {
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(timeStamp.substr(11, 4)),
        date: timeStamp.substr(0, 10)
    });
    debugger;
    return this;
}

const hoursWorkedOnDate = function(dateData) {
    let hoursWorked = 0;
    const dateMatchInEvents = [];
    const dateMatchOutEvents = [];
    const record = Object.values(this);
    debugger;
    const timeIns = record[4];
    const timeOuts = record[5];
    debugger;
    
    timeIns.forEach(timeInEvent => {
        if(timeInEvent.date === dateData) {
            dateMatchInEvents.push(timeInEvent.hour)
            debugger;
        }
    });
    
    timeOuts.forEach(timeOutEvent => {
        if(timeOutEvent.date === dateData) {
            dateMatchOutEvents.push(timeOutEvent.hour)
            debugger;
        }
    });

    dateMatchInEvents.sort(function (a, b) {return a - b});
    debugger;
    dateMatchOutEvents.sort(function (a, b) {return a - b});
    debugger;

    for (let index = 0; index < dateMatchInEvents.length; index++) {
        hoursWorked = (dateMatchOutEvents[index] - dateMatchInEvents[index]) + hoursWorked;
        debugger;
    }
    

    return (hoursWorked / 100);
}

const wagesEarnedOnDate = function(dateData) {
    const employeeWage = parseInt(this.payPerHour);
    debugger;
    const hoursWorked = hoursWorkedOnDate.call(this, dateData);
    debugger;
    const totalEarned = employeeWage * hoursWorked;
    debugger;
    return totalEarned;
}

const findEmployeeByFirstName = function(employeeRecords, targetName) {
    const matchingRecords = employeeRecords.find(employeeRecord => employeeRecord.firstName === targetName);
    debugger;
    return matchingRecords;
}

const calculatePayroll = function(empRawData) {
    //const employeeRecords = createEmployeeRecords(empRawData);
    const employeeRecords = empRawData;
    const initTotalWages = 0;

    debugger;
   const employeeWagesTotals = []

    employeeRecords.forEach(record => {
        employeeWagesTotals.push(allWagesFor.call(record));
        debugger;
    });

    const totalWages = employeeWagesTotals.reduce((runningTotal, currentWage) => runningTotal + currentWage, initTotalWages);
    debugger;
    return totalWages;
}
/*
emps = createEmployeeRecords(theList);
debugger;
createTimeInEvent.call(emps[0], fakeTimeStamp);
debugger;
console.log(emps[0]);
*/

/*cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000]);
createTimeInEvent.call(cRecord, "2044-03-15 0900");
createTimeOutEvent.call(cRecord, "2044-03-15 1100");
hoursWorkedOnDate.call(cRecord, "2044-03-15");*/
/*
let employeeRecords = createEmployeeRecords(csvDataEmployees)
            employeeRecords.forEach(function (rec) {
              let timesInRecordRow = csvTimesIn.find(function (row) {
                return rec.firstName === row[0]
              })

              let timesOutRecordRow = csvTimesOut.find(function (row) {
                return rec.firstName === row[0]
              })

              timesInRecordRow[1].forEach(function(timeInStamp){
                createTimeInEvent.call(rec, timeInStamp)
              })

              timesOutRecordRow[1].forEach(function(timeOutStamp){
                createTimeOutEvent.call(rec, timeOutStamp)
              })
            })
    calculatePayroll(employeeRecords) */