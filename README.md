# Jumbo test playwright
 test project
 
## How to run

Install node js first
https://nodejs.org/en/download/current

then go to the folder 



## To run the playwright tests

I use vscode to run the playwright you can get it from the link below
https://code.visualstudio.com/download

after installing vscode get the extension for playwright link below
https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

or from the extensions in vscode


open the folder containing the repo and open a terminal
```npm install playwright```

make sure youre in the folder

```npx playwright test```

Make sure to have chrome installed if you didn't you can change the running browser to whatever you have installed in playwright.config.ts

IF you didn't want to use the vscode follow the playwright instal guide here
https://playwright.dev/docs/intro

## Things to improve on

* Add logging
* Add more comments
* spread the test categories a bit
* Make functions more dynamic allow adding parameters for better reusability
* Add more focus on API/GRAPHQL testing