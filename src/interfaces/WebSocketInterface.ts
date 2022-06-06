import WebSocket from 'ws';

export interface SocketSetup extends WebSocket {
  timeoutBeforeLogin: (ms: number) => void;
  _timeoutBeforeLogin: NodeJS.Timeout;
  heartbeatInterval: () => void;
  _heartbeatInterval: number;
}

export interface Payload {
  op: number;
  d?: any;
}
