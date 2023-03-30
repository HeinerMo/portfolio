#!/bin/bash

npm i angular-cli-ghpages --save-dev

ng build --configuration production --base-href "https://heinermo.github.io/portfolio/"

npx angular-cli-ghpages --dir=dist/portfolio
