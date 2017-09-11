let pkg = require("../../package.json");

module.exports = {
    app: {
        title: pkg.name + " [Test Mode]"
    },
    ip: process.env.NODE_IP || "0.0.0.0",
    port: process.env.NODE_PORT || 3000,
    hashSecret: "71IIYMzMb0egTaCvvdijhUajAOjsrurzyRX5ziskMk4",
    sessionSecret: "MB9x-hOkx-UdcCbOprxggu-Wv1PetuoqzBny1h8DULA",
    logging: {

        console: {
            level: "debug"
        },
        graylog: {
            enabled: false
            // servers: [ { host: "192.168.0.100", port: 12201 } ]
        },
        file: {
            enabled: false,
            // path: path.join(global.rootPath, "logs"),
            // level: "info",
            // json: false,
            // exceptionsSeparateFile: true
        },
        papertrail: {
            enabled: false,
            host: null,
            port: null,
            level: "debug",
            program: "vem"
        },

        logentries: {
            enabled: false,
            token: null
        },

        loggly: {
            enabled: false,
            token: null,
            subdomain: null
        },

        logsene: {
            enabled: false,
            token: null
        },

        logzio: {
            enabled: false,
            token: null
        }
    },
    db: {
        uri: "mongodb://localhost/" + pkg.config.dbName + "-test",
        options: {
            user: "",
            pass: ""
        }
    }
}