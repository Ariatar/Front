# obu_front

> My fabulous Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build

# start server 
$ forever start -c "npm start" ./
  
# stop server
$ forever stop -c "npm start" ./
$ netstat -plnt | grep ':8000'
# After that command you should see such output in console
# tcp        0      0 0.0.0.0:8000          0.0.0.0:*               LISTEN      2258/node
# to stop server you need to kill already lounched server via kill command ("2258/node" - 2258 is PID of proccess)
$ kill 2258

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
