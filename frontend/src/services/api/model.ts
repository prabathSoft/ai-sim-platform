import { apiPost } from "./http";

export function initializeModel(config: any) {
  return apiPost("/model/initialize", config);
}
