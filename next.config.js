const withImages = require("next-images");
module.exports = withImages({
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
});
