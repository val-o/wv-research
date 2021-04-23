export interface RemoteError {
  _tag: "RemoteError";
  rawResponse?: Response;
}

export interface UnknownError {
  _tag: "UnknownError";
  description?: string;
}
