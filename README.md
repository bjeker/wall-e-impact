# wall-e-impact

`If-model-template` is an environmental impact calculator template which exposes an API for [IEF](https://github.com/Green-Software-Foundation/ief) to retrieve energy and embodied carbon estimates.

## Implementation

Here can be implementation details of the model. For example which API is used, transformations and etc.

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