# sosconf-2019 
sosconf 2019 Official Website（V2.2）
[sosconf](https://sosconf.org)

![](https://travis-ci.com/sosconf/sosconf-2019-frontend.svg?branch=master)

The mirror of sosconf 2019 official website source code.

## Deploy
```
npm install cnpm yarn -g
cnpm install create-react-app react-scripts -g
yarn install
```

## Start
```
npm start
```

## Build
```
npm run build
```

## Project Structure
    .
    ├── ...
    ├── src
    │   ├── i18n              # Internationalization data
    |   ├── pages             # Router pages
    |   ├── themes            # CSS stylesheets
    |   |   ├── ...
    |   |   ├── common.css    # Common CSS stylesheet
    |   |   ├── animate.css   # CSS stylesheet for animation
    |   |   └── ...
    |   ├── actions           # These 3 folders are temporary Redux solution for internationalization
    |   ├── reducers
    |   ├── stores
    │   └── ...
    ├── build.sh              # Script for everything from downloading node to building
    └── ...
