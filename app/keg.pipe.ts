// import {Pipe, PipeTransform} from 'angular2/core';
// import { Keg } from './keg.model';
//
//   @Pipe({
//     name= "low",
//     pure: false
//   })
//
//   export class LowPipe implements PipeTransform {
//     transform(input: Keg[], args) {
//       var desiredKegState = args[0];
//       if(desiredKegState === "low") {
//         return input.filter((keg) => {
//           if(tap.kegs < 10) {
//             return !keg.low;
//           }
//         });
//       } else if (desiredKegState === "notLow") {
//         return input.filter((keg) => {
//           if(tap.kegs > 9) {
//             return !keg.low;
//           }
//         })
//       } else {
//         return input;
//       }
//     }
//   }
