export function NetworkError(message: string) {
  return { type: "NetworkError", message };
}

export function DataError(message: string) {
  return { type: "DataError", message };
}

