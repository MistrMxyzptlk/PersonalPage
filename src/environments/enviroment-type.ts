import {FirebaseOptions} from '@firebase/app';

export interface Environment {
  production: boolean,
  baseUrl: string,
  firebase: FirebaseOptions
}
