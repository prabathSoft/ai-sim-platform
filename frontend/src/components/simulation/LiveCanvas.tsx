import DecisionBoundaryCanvas from "./DecisionBoundaryCanvas";
import FeatureMapViewer from "./FeatureMapViewer";
import { useAlgorithmStore } from "../../stores/algorithmStore";

export default function LiveCanvas() {
  const algorithm = useAlgorithmStore((s) => s.selected);

  if (!algorithm) {
    return <div>Select an algorithm to begin simulation.</div>;
  }

  // Classical ML → decision boundary
  if (["logistic_regression", "svm", "knn", "mlp"].includes(algorithm)) {
    return <DecisionBoundaryCanvas />;
  }

  // CNN → feature maps
  if (["cnn_binary", "cnn_multiclass"].includes(algorithm)) {
    return <FeatureMapViewer />;
  }

  return <div>No visualization available for this algorithm.</div>;
}
