## npm setting

### create package.json

npm init -y

### webpack install

npm install --save-dev webpack webpack-cli
npm install --save-dev babel-loader
npm install --save-dev webpack webpack-cli css-loader sass sass-loader mini-css-extract-plugin
npm install --save-dev html-webpack-plugin

### babel install

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save core-js@3

### package.json

"scripts": {
"build": "webpack -w"
},

### run

npm run build
