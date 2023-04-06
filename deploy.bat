call npm i angular-cli-ghpages --save-dev

call ng build --configuration production --base-href "https://heinermo.github.io/portfolio/"

call npx angular-cli-ghpages --dir=dist/portfolio
