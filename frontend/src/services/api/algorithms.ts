import { apiGet } from "./http";

export function fetchAlgorithms() {
  return apiGet("/algorithms");
}
