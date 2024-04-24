import { cpuUsage } from "process";

export type PluginInterface = {
    execute: (
      inputs: PluginParams[],
      config?: Record<string, any>
      outputs: PluginParams[]
    ) => PluginParams[];
    metadata: {
      kind: string;
    };
    [key: string]: any;
  };

  // Here's the function definition - notice that global config is passed in here!
export const Plugin = (globalConfig: YourConfig): PluginInterface => {

    // in here you have access to globalConfig[your-params]
    
    }

async function runModel() {
    const newModel = await new Model().configure(params);
    const usage = await newModel.calculate([
        {
        timestamp: '2021-01-01T00:00:00Z',
        duration: '15s',
        'cpu-util': 34,
        },
        {
        timestamp: '2021-01-01T00:00:15Z',
        duration: '15s',
        'cpu-util': 12,
        },
    ]);
    
    console.log(usage);
    }
    
    runModel();