const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Dashboard</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .card {
          background: rgba(255,255,255,0.08);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          width: 500px;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        h1 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        p {
          font-size: 18px;
          color: #cbd5e1;
          margin-bottom: 20px;
        }

        .status {
          display: inline-block;
          padding: 10px 20px;
          background: #22c55e;
          border-radius: 30px;
          font-weight: bold;
        }

        .footer {
          margin-top: 25px;
          font-size: 14px;
          color: #94a3b8;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 DevOps CI/CD Pipeline</h1>
        <p>Application successfully deployed with Jenkins, Docker, and Kubernetes</p>
        <div class="status">LIVE & RUNNING ✅</div>
        <div class="footer">
          GitHub → Jenkins → Docker → Kubernetes
        </div>
      </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
