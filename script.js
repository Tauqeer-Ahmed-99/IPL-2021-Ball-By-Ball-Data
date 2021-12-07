// const byBall = {};

// for (const item of data) {
//   const { match_name } = item;

//   byBall[match_name] = {
//     "1st innings": [],
//     "2nd innings": [],
//   };
// }

// const byMatch = Object.keys(byBall);

// for (const match of byMatch) {
//   for (const item of data) {
//     if (match === item["match_name"] && item["inning"] === "1st innings") {
//       byBall[match]["1st innings"].push(item);
//     } else if (
//       match === item["match_name"] &&
//       item["inning"] === "2nd innings"
//     ) {
//       byBall[match]["2nd innings"].push(item);
//     }
//   }
// }

// console.log(byBall);

// const season = {};

// data.forEach((item) => {
//   const { match_name, inning, dates } = item;

//   const name = match_name.replace(dates, "").trim();

//   if (!season[match_name]) {
//     season[match_name] = {
//       [inning]: [{ ...item, match_name: name }],
//       "2nd innings": [],
//     };
//   } else {
//     season[match_name] = {
//       ...season[match_name],
//       [inning]: [...season[match_name][inning], { ...item, match_name: name }],
//     };
//   }
// });

for (const key in data) {
  const newKey = key.split(" ").join("-");
  data[newKey] = data[key];
  delete data[key];
}

console.log(data);
