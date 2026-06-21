import Slider from "../ui/Slider";
import Dropdown from "../ui/Dropdown";
import { useConfigStore } from "../../stores/configStore";

export default function HyperparameterConfig() {
  const {
    learningRate,
    epochs,
    batchSize,
    activation,
    setLearningRate,
    setEpochs,
    setBatchSize,
    setActivation
  } = useConfigStore();

  return (
    <div>
      <h2>Model Configuration</h2>

      <Slider
        label="Learning Rate"
        min={0.001}
        max={1}
        step={0.001}
        value={learningRate}
        onChange={setLearningRate}
      />

      <Slider
        label="Epochs"
        min={1}
        max={100}
        value={epochs}
        onChange={setEpochs}
      />

      <Slider
        label="Batch Size"
        min={1}
        max={64}
        value={batchSize}
        onChange={setBatchSize}
      />

      <Dropdown
        label="Activation Function"
        value={activation}
        options={["relu", "tanh", "sigmoid", "linear"]}
        onChange={setActivation}
      />
    </div>
  );
}
