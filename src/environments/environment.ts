// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyBALWbLzdbifExWFem7JvpzSpci2NwFHgA",
    authDomain: "backlogv1.firebaseapp.com",
    databaseURL: "https://backlogv1.firebaseio.com",
    projectId: "backlogv1",
    storageBucket: "",
    messagingSenderId: "1067879412092",
    appId: "1:1067879412092:web:38f4e0f735631aaf"
  }
};