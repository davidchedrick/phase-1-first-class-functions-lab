
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = () => {
  const firstTwo = drivers.slice(0, 2);
  return firstTwo;
}
returnFirstTwoDrivers(); 

const returnLastTwoDrivers = () => {
    const lastTwo = drivers.slice(2, 4);
    return lastTwo;
}
returnLastTwoDrivers();

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function  createFareMultiplier(fareMultiplier){
  return function (fare){
   return fare * fareMultiplier;
 } 
}
createFareMultiplier(5);



const fareDoubler = (fareD) => fareD *= 2;
fareDoubler(10)

const fareTripler = (fareT) => fareT *= 3;
fareTripler(12);


 const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
   return returnFirstTwoDrivers(arrayOfDrivers);
 }