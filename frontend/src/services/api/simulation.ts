import { apiPost } from "./http";

export function startSimulation(payload: any) {
  return apiPost("/simulation/start", payload);
}

export function pauseSimulation(runId: string) {
  return apiPost("/simulation/pause", { run_id: runId });
}

export function resumeSimulation(runId: string) {
  return apiPost("/simulation/resume", { run_id: runId });
}

export function stepSimulation(runId: string) {
  return apiPost("/simulation/step", { run_id: runId });
}
