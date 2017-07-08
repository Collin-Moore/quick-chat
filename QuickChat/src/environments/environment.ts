// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBRtPlwE1pFI6lYq_ytXG4Serx-t11k1rQ",
    authDomain: "moorect-quick-chat.firebaseapp.com",
    databaseURL: "https://moorect-quick-chat.firebaseio.com",
    projectId: "moorect-quick-chat",
    storageBucket: "",
    messagingSenderId: "190995740823"
  }
};
