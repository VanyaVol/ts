// import {ILaunch} from "./interfaces/launches.interface";
//
// const launch: Partial<ILaunch> = {
//     mission_name: "Starlink-15 (v1.0)",
//     launch_date_local: "2020-10-24T11:31:00-04:00",
//     launch_site: {
//         site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
//     },
//     links: {
//         article_link: null,
//         video_link: "https://youtu.be/J442-ti-Dhg"
//     },
//     rocket: {
//         rocket_name: "Falcon 9",
//         first_stage: {
//             cores: [
//                 {
//                     flight: 7,
//                     core: {
//                         reuse_count: 6,
//                         status: "unknown"
//                     }
//                 }
//             ]
//         },
//         second_stage: {
//             payloads: [
//                 {
//                     payload_type: "Satellite",
//                     payload_mass_kg: 15400,
//                     payload_mass_lbs: 33951.2
//                 }
//             ]
//         }
//     }
// }
//
// console.log(launch);

//------------------ TASK 1 -----------------------------//
//
// const user = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }

// Variant 1 class

// class User {
//     constructor(public name: string, public age: number, public gender: string) {
//     }
// }
//
// const user: User = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
//
// function incAge(someUser: User, inc: number): User {
//     someUser.age += inc;
//     return someUser;
// }
//
// console.log(incAge(user, 10));

// Variant 2 interface

// interface User {
//     name: string;
//     age: number;
//     gender: string;
// }
//
// const user: User = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// }
//
// function incAge(someUser: User, inc: number): User {
//     someUser.age += inc;
//     return someUser;
// }
//
// console.log(incAge(user, 10));


// ---------------------- TASK 2 ----------------------------- //
//
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
// console.log(sum(1, 2));
// showSum(2,3)

// function sum(a:number, b:number):number {
//     return a + b;
// }
//
// function showSum(a: number, b: number): void {
//     console.log(a + b);
// }
//
//
// console.log(sum(1, 2));
// showSum(2, 3);
