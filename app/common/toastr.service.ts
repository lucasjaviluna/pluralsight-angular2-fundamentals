// import {Injectable} from '@angular/core';
//
// //toastr está en el scope global y se puede acceder desde cualquier lugar, pero
// //al compilador de TypeScript no le gusta porque no lo encuentra
// //Poniendolo como declare entonces le decimos al compilador de TypeScript que no se preocupe por ese objeto
// declare let toastr:any;
//
// @Injectable()
// export class ToastrService {
//   success(message:string, title?:string) {
//     toastr.success(message, title);
//   }
//
//   info(message:string, title?:string) {
//     toastr.info(message, title);
//   }
//
//   warning(message:string, title?:string) {
//     toastr.warning(message, title);
//   }
//
//   error(message:string, title?:string) {
//     toastr.error(message, title);
//   }
// }


import {OpaqueToken} from '@angular/core';

export let TOASTR_TOKEN = new OpaqueToken('toastr');

export interface Toastr {
  success (msg: string, title?: string): void;
  info (msg: string, title?: string): void;
  warning (msg: string, title?: string): void;
  error (msg: string, title?: string): void;
}
