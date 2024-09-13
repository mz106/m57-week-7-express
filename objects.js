// step 1

// const someObj = {
//   key: "value",
//   name: "ironman",
//   isRich: true,

// };

//step 2

const avengerName = "black widow";

const avenger = {
  avenger: 123,
  key: "value",
  name: avengerName,
  isRich: true,
  details: {
    canFly: false,
    gender: "female",
    weapons: "guns",
    phoneNumbers: {
      mobile: {
        num1: 47474,
        num2: 838383,
      },
      landline: {
        num1: 44443,
        workNums: {
          num1: 494949,
        },
      },
    },
  },
  friends: ["banner", "cap", "hawkeye"],
};

// console.log(avenger.details.phoneNumbers.landline.workNums.num1);

//step 2: dynamic objects

// const value1 =

// const awesomeObj = {
//   name: value1,
//   age: "27",
//   isAwesome: true,
// };

const value1 = true;
const value2 = 3;

const key1 = "sunroof";
const key2 = "doors";

const car = {
  [key1]: value1,
  [key2]: value2,
};

console.log(car);
