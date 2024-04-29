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
    - yml
    - csv
  plugins:
    wall-e-impact:
      path: 'wall-e-impact\index.ts'
      method: Copy
      global-config:
        keep-existing: true
tree:
  children:
    child:
      pipeline:
        - wall-e-impact
      config:
        - unity
      defaults:
      inputs:
        - timestamp: 2023-08-06T00:00
        - duration: 3600
        - cpu/energy: 0.001
        - gpu/energy: 0.005
        - network/energy: 0.001
        - engine: Unity
...
```

This is in active development and more features will be implemented.