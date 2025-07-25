const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Render proveerá la variable PORT

app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});
