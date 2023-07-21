# A minimalistic Frontend App Starter

## Development

### Web Server

To just go and play you can start a web server in the src folder:

```console
$ python3 -m http.server 8001
```

and access http://localhost:8001


## Browsersync

Tired of all the web server restarts when working on the files?

With Browsersync you have a minimalistic web server that watches for files changes and applies them in your Browser automatically.
Just install [browsersync](https://www.browsersync.io/) assuming you have [Node.js](https://nodejs.org/en) already installed.

Install Browsersync via NPM

```console
$ npm install -g browser-sync
```

Start browser-sync for the src folder, the port statement is optional

```console
$ browser-sync start --server 'src' --files 'src' --port 8001
```
