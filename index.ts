const Copy = (globalConfig) => {
  const metadata = {
    kind: 'execute',
  };

  const execute = async (inputs, config) => {
    let hours: number = inputs[1]["duration"] / 3600;
    const outputParameter = globalConfig['output-parameter'];

    //Game Engine Calculations
    if (inputs[4]["engine"] === "Unity") {
      console.log("Unity has 16% less power usage and 22% less gpu usage")
    }
    else if (inputs[4]["engine"] === "Unreal Engine")
      {
        console.log("Unreal engine has 16% more power usage and 22% more gpu usage");
      }

    //GPU Energy calculation kWh
    let gpuEnergy: number = hours * inputs[3]["gpu/energy"];
    console.log("GPU energy in kWh: ", gpuEnergy);
    //CPU Energy calculation kWh
    let cpuEnergy: number = hours * inputs[2]["cpu/energy"];
    console.log("CPU energy in kWh: ", cpuEnergy);

    //Predicted Energy Usage for the future
    console.log("If continued to run for 10 hours the predicted energy usage for gpu/energy: ", inputs[3]["gpu/energy"] * 10);
    console.log("If continued to run for 10 hours the predicted energy usage for cpu/energy: ", inputs[2]["cpu/energy"] * 10);

    return {
      ["cpu/energy/kWh"]: cpuEnergy,
      ["gpu/energy/kWh"]: gpuEnergy,
    };
  };
 
  return {
    metadata,
    execute,
  };
};

exports.Copy = Copy;
