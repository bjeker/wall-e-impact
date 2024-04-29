const Copy = (globalConfig) => {
  const metadata = {
    kind: 'execute',
  };

  const execute = async (inputs, config) => {
    //console.log(inputs);
    //console.log("Energy used was :", inputs[3])
    if (inputs[5]["engine"] === "Unity") {
      console.log("Unity has 16% less power usage and 22% less gpu usage")
    }
    else if (inputs[5]["engine"] === "Unreal Engine")
      {
        console.log("Unreal engine has 16% more power usage and 22% more gpu usage")
      }
  };
 
  return {
    metadata,
    execute,
  };
};

exports.Copy = Copy;