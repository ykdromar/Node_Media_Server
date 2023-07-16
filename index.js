const NodeMediaServer = require("node-media-server");

const configNodeMediaServer = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8001,
    allow_origin: "*",
  },
};

var nms = new NodeMediaServer(configNodeMediaServer);
console.log("Starting nms");
nms.run();
