import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }
          h1 {
            color: #333;
          }
        </style>
      </head>
      <body>
        <h1>Hello with CSS!</h1>
        <p>This is styled using inline CSS.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
})