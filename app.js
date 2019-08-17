const todoApp = { 
  name: "Moo.do",  
  features: ['email', 'calendar', 'lists', 'shortcuts', 'google drive'],
  rate: 8
};

Object.keys(todoApp) /*?*/
Object.values(todoApp) /*?*/
const entries = Object.entries(todoApp) /*?*/

for (const [key, value] of Object.entries(todoApp)) {
  console.log(`${key}: ${value}`);
}

Object.entries(todoApp).forEach(([key, value]) => {
  console.log(value);
});

Object.fromEntries(entries) /*?*/

const todoAppsMap = new Map([
  ["name", "Moo.do"],  
  ["features", ['email', 'calendar', 'lists', 'shortcuts', 'google drive']],
  ["rate", 8]
]);

Object.fromEntries(todoAppsMap); /*?*/