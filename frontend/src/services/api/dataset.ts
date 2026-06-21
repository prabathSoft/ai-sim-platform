import { apiPost } from "./http";

export function generateDataset(options: any) {
  return apiPost("/dataset/generate", options);
}

export function uploadDataset(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  return fetch("http://localhost:8000/api/v1/dataset/upload", {
    method: "POST",
    body: formData
  }).then((res) => res.json());
}
