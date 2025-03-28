//simple type
// var data = {name : "XYZ",age : 28};
// console.log(data);
// console.log(data.name);

//json type
// var run = require('./a.json');
// console.log(run);
// console.log(run.Age);

// let obj1 = '{"name":"jeet","rollno":02}';
// console.log(obj1);
// console.log(obj1.name);
// obj2 = JSON.parse('{"name":"Manthan","Rollno":16}');
// console.log(obj2);
// console.log(obj2.name);
// obj3 = JSON.stringify({"name":"Manthan","Rollno":16});
// console.log(obj3);
// console.log(obj3.Rollno);

// //task-1
// const a ={
//             "Datastructures":[{"Name": "tree","course":"Intro","content":["1","B","C"]},
//             {"Name": "tree1","course":"Intro1","content":["1","B","C","d"]}],
//             "xyz":{"Name":"Graphics","Topic":["BFS","CDF","Sorting"],}
//         };
// console.log(a.Datastructures[1].Name);
// console.log(a.Datastructures[0].Name);
// console.log(a.xyz.Name);
// console.log(a.xyz.Topic);                            //to get 3 write in html
// console.log(a.xyz.Topic[0]);
// console.log(a.Datastructures[1]);
// console.log(a.Datastructures[3]);
// console.log(a.xyz);

//task-2
// const sub = {
//                 "FSD": [{"Topic": "HTML","course": "Beginer","content": ["tags", "table", "form"],},
//                         {"Topic": "CSS","course": "Beginer","content": ["tags", "table", "form"]}]
//             };
// for(i of sub.FSD.entries()){
//     console.log(i);
// }
//Or
// for(i in sub.FSD){
//     for(j in sub.FSD[x]){
//         console.log(sub.FSD[x][y])
//     }
// }

//task-3
// myObj = {"name" : "John",
//         "age" : 30,
//         "cars" : [
//                 { "name" : "Ford",  "models":[ "Fiesta", "Focus", "Mustang" ] },
//                 { "name" : "BMW", "models" : [ "320", "X3", "X5" ] },
//                 { "name" : "Fiat", "models" : [ "500", "Panda" ] }
//                 ]
//         };
// console.log(myObj.name+" has "+myObj.cars[1].name+"-"+myObj.cars[1].models[1]+" at the age of "+myObj.age+".");

//task-4
// const obj = JSON.parse(`{"name":"xyz","age":"17","dob":"1997-03-14"}`);
// console.log(obj.dob);
// a = new Date(obj.dob);
// console.log(a);
// console.log("Birth Day of "+obj.name+" is "+a);

//task-5
// function fromListToObject(a){
//     var obj = {};
//     for(i=0;i<a.length;i++){
//         var newArray = a[i];
//         obj[newArray[0]] = newArray[1];
//     }
//     return obj;
// }
// a = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
// ans = fromListToObject(a);
// console.log(ans);

//task-6
// function transformFirstAndLast(a){
//     var obj = {};
//     obj[a[0]] = a[a.length-1];
//     console.log(obj);
// }
// a = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// transformFirstAndLast(a);

//task-7
// const person =[{name: "PQR", age: 38},
//                 {name: "ABC", age: 35},
//                 {name: "XYZ", age: 47}
//             ];
// for(i=0;i<person.length;i++){
//     for(j=0;j<person.length;j++){
//         if(person[i].age>person[j].age){
//             var temp;
//             temp = person[j];
//             person[j] = person[i];
//             person[i] = temp;
//         }
//     }
// }
// for(i=0;i<person.length;i++){
//     console.log(person[i].name,person[i].age);
// }
//Or
// function fun(p){
//     return p.sort((a,b)=>a.age>b.age)[0];
// }
// console.log(fun(person));

//task-8
// var test = { "division1": {"name":["Z","B","H"]},
//             "division2": {"name" :["Y","A","G"]}               
//             };
// p = test.division1.name.concat(test.division2.name);
// console.log(p);
// console.log(p.sort((a,b)=>a.localeCompare(b)));

//task-9
const student = [{name: "ABC", height: 5.7},
                {name: "PQR", height: 6.0},
                {name: "XYZ", height: 6.2}
                ];
ans = student.sort((a,b)=>b.height-a.height);
console.log(ans);