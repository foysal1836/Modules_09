const express = require('express');
const app = express();
const port = process.env.RUNNING_PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
