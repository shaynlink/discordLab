import {WebSocketServer} from 'ws';
import {unpack} from 'erlpack';
import {createHash} from 'node:crypto';
import {Payload, SocketSetup} from '../interfaces/WebSocketInterface';
import {MasterOption} from '../interfaces/MasterInterface';

/**
 * Master class. :)
 */
export default class Master {
  public options?: MasterOption;
  private wss: WebSocketServer;
  private websockets: Set<SocketSetup>;
  public timeoutInterval: number;
  private sha256: string;
  private token: string;

  /**
   * @param {string} token - Discord token
   * @param {}
   */
  public constructor(token: string, options?: MasterOption) {
    this.options = options;
    this.wss = new WebSocketServer({
      port: 8100,
      perMessageDeflate: {
        zlibDeflateOptions: {
          // See zlib defaults.
          chunkSize: 1024,
          memLevel: 7,
          level: 3
        },
        zlibInflateOptions: {
          chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024
      },
      ...options?.websocketOptions
    });

    this.token = token;
    this.sha256 = createHash('sha256')
        .update(this.token)
        .digest('hex');

    this.timeoutInterval = 45000;

    this.websockets = new Set();

    setInterval(() => {
      for (const ws of this.websockets.values()) {
        if (ws._heartbeatInterval < Date.now()) {
          this.closeSocket(ws, 3002, 'MISSING ACK');
        }
      }
    }, 1000);

    this.wss.on('connection', (ws: SocketSetup) => {
      this.setupSocket(ws);
      this.websockets.add(ws);

      ws.timeoutBeforeLogin(10000);

      // ws.send(pack({op: 1, d: {heartbeat_interval: message.d.heartbeat_interval}}));

      ws.on('message', (data: Buffer) => {
        const message: Payload = unpack(data);

        switch (message.op) {
          // authentication
          case 0:
            if (message.d.salt != this.sha256) {
              this.closeSocket(ws, 3001, 'WRONG AUTHENTICATION');
            }
            clearTimeout(ws._timeoutBeforeLogin);
            break;
          // heartbeat
          case 1:
            ws.
        }
      });

      ws.on('close', ())
    });
  }

  /**
   * @param {WebSocket} ws - WebSocket
   */
  private setupSocket(ws: SocketSetup) {
    ws._heartbeatInterval = Date.now() + this.timeoutInterval;
    ws.timeoutBeforeLogin = (time: number): void => {
      ws._timeoutBeforeLogin = setTimeout(() => {
        this.closeSocket(ws, 3000, 'NO AUTHENTICATION');
      }, time);
    };

    ws.timeoutBeforeLogin.bind(this);
  }

  /**
   * @param {SocketSetup} ws
   * @param {code} code
   * @param {reason} reason
   */
  private closeSocket(ws: SocketSetup, code: number = 1000, reason: string = '') {
    ws.close(code, reason);
    this.websockets.delete(ws);
  }
}
