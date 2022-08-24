module.exports = {
    module: {
      rules: [
        
          {
            test: /\.html$/i,
            use: ["file-loader?name=[name].[ext]", "extract-loader", "html-loader"]
          }
        ,
        {
          test: /\.css$/,
          use: [
              "style-loader", // 3. Inject styles into DOM
              "css-loader", // 2. Turns css into commonjs
          ],
      }
      ],
    },
  };