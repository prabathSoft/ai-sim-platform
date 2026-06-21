export type SimulationSocketHandlers = {
  onMetrics?: (data: any) => void;
  onBoundary?: (grid: number[][]) => void;
  onFeatureMaps?: (maps: number[][][]) => void;
  onLog?: (msg: string) => void;
  onOpen?: () => void;
  onClose?: () => void;
};

export function createSimulationSocket(
  runId: string,
  handlers: SimulationSocketHandlers
) {
  const socket = new WebSocket(`ws://localhost:8000/ws/simulation/${runId}`);

  socket.onopen = () => {
    console.log("Simulation WebSocket connected");
    handlers.onOpen?.();
  };

  socket.onclose = () => {
    console.log("Simulation WebSocket disconnected");
    handlers.onClose?.();
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case "metrics":
        handlers.onMetrics?.(data);
        break;

      case "boundary":
        handlers.onBoundary?.(data.grid);
        break;

      case "feature_maps":
        handlers.onFeatureMaps?.(data.maps);
        break;

      case "log":
        handlers.onLog?.(data.message);
        break;

      default:
        console.warn("Unknown WebSocket message:", data);
    }
  };

  return {
    socket,
    close: () => socket.close()
  };
}
