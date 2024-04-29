# wall-e-impact

`wall-e-impact` is a gaming environmental impact calculator plugin which uses the ImpactFramework [IEF](https://github.com/Green-Software-Foundation/ief) to retrieve energy and embodied carbon estimates while playing games on pc.

## Usage

This is an example yaml to use for the plugin.
For engines, Unity and Unreal Engine are supported so far, spelled as such.

```yaml
name: Gaming Test
description: test the plugin
tags: 
initialize:
  outputs:
    - yaml
  plugins:
    wall-e-impact:
      path: 'wall-e-impact\index.ts'
      method: Copy
      global-config:
        keep-existing: true
        output-parameter: energy
tree:
  children:
    child:
      pipeline:
        - wall-e-impact
      defaults:
      inputs:
        - timestamp: 2023-08-06T00:00
        - duration: 5200
        - cpu/energy: 0.001
        - gpu/energy: 0.005
        - engine: Unreal Engine
...
```
## Running the plugin
- Download this plugin and open in Visual Studio Code.
- Upload a YAML file with the naming convention "manifest.yml" based on the given template.
- Install node.js and npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- Install the Impact Framework using this terminal command: npm install -g @grnsft/if
- Compute the metrics and data using this terminal command: npx ie --manifest manifest.yml
- The outputs will be in the console and in the output YAML file named "energy.yml".

This is in active development and more features will be implemented.

## Credits
This was done using research on Game Engines and their power consumptions from the following.
https://arxiv.org/pdf/2402.06346v1
