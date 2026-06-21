import { create } from "zustand";

type SimulationState = {
  runId: string | null;

  // Live metrics
  epoch: number;
  loss: number[];
  accuracy: number[];

  // Visual data
  boundary: number[][] | null;      // 2D grid for decision boundary
  featureMaps: number[][][];        // CNN feature maps

  // WebSocket
  socket: WebSocket | null;

  // Actions
  setRunId: (id: string) => void;
  connectSocket: (runId: string) => void;
  disconnectSocket: () => void;
};

export const useSimulationStore = create<SimulationState>((set, get) => ({
  runId: null,

  epoch: 0,
  loss: [],
  accuracy: [],

  boundary: null,
  featureMaps: [],

  socket: null,

  setRunId: (id) => set({ runId: id }),

  connectSocket: (runId: string) => {
    const socket = new WebSocket(`ws://localhost:8000/ws/simulation/${runId}`);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // Metrics update
      if (data.type === "metrics") {
        set((state) => ({
          epoch: data.epoch,
          loss: [...state.loss, data.loss],
          accuracy: [...state.accuracy, data.accuracy]
        }));
      }

      // Decision boundary update
      if (data.type === "boundary") {
        set({ boundary: data.grid });
      }

      // CNN feature maps
      if (data.type === "feature_maps") {
        set({ featureMaps: data.maps });
      }

      // Logs (optional)
      if (data.type === "log") {
        console.log("TRAINING LOG:", data.message);
      }
    };

    socket.onopen = () => {
      console.log("WebSocket connected:", runId);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
      set({ socket: null });
    };

    set({ socket });
  },

  disconnectSocket: () => {
    const socket = get().socket;
    if (socket) socket.close();
    set({ socket: null });
  }
}));
