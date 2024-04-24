# wall-e-impact

`wall-e-impact` is a gaming environmental impact calculator plugin which uses the ImpactFramework [IEF](https://github.com/Green-Software-Foundation/ief) to retrieve energy and embodied carbon estimates while playing games on pc.

## Usage

This is an example yaml to use for the plugin

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
      method: MyCustomPlugin
      path: wall-e-impact
tree:
  children:
    child:
      pipeline:
        - wall-e-impact
      config:
      defaults:
      inputs:
        - timestamp: 2023-07-06T00:00
        - duration: 3600
        - cpu-util: 45
...
```
