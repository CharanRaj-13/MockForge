import app from "./server/server.js";
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 MockForge running on port ${PORT}`);
});