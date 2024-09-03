
module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
     filename: '../client/client.js'
    //filename: '../../../tools/camunda-modeler/plugins/camunda-modeler-property-info-plugin/client/client.js'
  },
  devtool: 'cheap-module-source-map'
};
