export const Sum = (globalConfig: SumConfig): PluginInterface => {
  const errorBuilder = buildErrorMessage(Sum.name);
  const metadata = {
    kind: 'execute',
  };

  /**
   * Calculate the sum of each input.
   */
  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {

  };

  return {
    metadata,
    execute,
  };

}

  /**
   * Calculate the sum of each input.
   */
  const execute = async (inputs: PluginParams[]): Promise<PluginParams[]> => {
    const inputParameters = globalConfig['input-parameters'];
    const outputParameter = globalConfig['output-parameter'];

    return inputs.map(input => {
      return {
        ...input,
        [outputParameter]: calculateSum(input, inputParameters),
      };
    });

  return {
    metadata,
    execute,
  };
}

  /**
   * Calculates the sum of the energy components.
   */
  const calculateSum = (input: PluginParams, inputParameters: string[]) =>
    inputParameters.reduce(
      (accumulator, metricToSum) => accumulator + input[metricToSum],
      0
    );