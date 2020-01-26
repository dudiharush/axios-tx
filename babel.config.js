module.exports = {
  
  presets: [
    ["@babel/env", 
    { 
      targets: 'maintained node versions',
      useBuiltIns: "usage", // import core-js polyfills for the features that we only use.
      modules: false, // will not transform es modules to other type, rollup handles this.
    }],
    
    "@babel/preset-typescript"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};
