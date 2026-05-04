const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
  <!DOCTYPE html>
  <html>
  <head>
    <title>Healthcare DevSecOps Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
      * { margin:0; padding:0; box-sizing:border-box; font-family:Arial,sans-serif; }
      body { background:#f8fafc; color:#0f172a; }
      .navbar {
        background:#0f172a; color:white; padding:20px 40px;
        display:flex; justify-content:space-between; align-items:center;
      }
      .hero {
        padding:50px; background:linear-gradient(135deg,#0ea5e9,#2563eb);
        color:white; text-align:center;
      }
      .container { padding:30px; }
      .cards {
        display:grid; grid-template-columns:repeat(4,1fr);
        gap:20px; margin-bottom:30px;
      }
      .card {
        background:white; padding:20px; border-radius:16px;
        box-shadow:0 10px 20px rgba(0,0,0,0.08);
      }
      .chart-box {
        background:white; padding:20px; border-radius:16px;
        box-shadow:0 10px 20px rgba(0,0,0,0.08);
        margin-bottom:30px;
      }
      .footer {
        text-align:center; padding:20px; color:#64748b;
      }
    </style>
  </head>
  <body>
    <div class="navbar">
      <h2>🏥 HealthCare SecureOps</h2>
      <p>Live Monitoring Dashboard</p>
    </div>

    <div class="hero">
      <h1>Healthcare Monitoring System</h1>
      <p>Secure DevOps Pipeline with Jenkins • Docker • Kubernetes</p>
    </div>

    <div class="container">
      <div class="cards">
        <div class="card"><h3>Patients</h3><p>1,240 Active</p></div>
        <div class="card"><h3>Doctors</h3><p>86 Online</p></div>
        <div class="card"><h3>Reports</h3><p>340 Generated</p></div>
        <div class="card"><h3>System Status</h3><p>99.9% Uptime</p></div>
      </div>

      <div class="chart-box">
        <h3>Patient Visits</h3>
        <canvas id="visitsChart"></canvas>
      </div>

      <div class="chart-box">
        <h3>Security Alerts</h3>
        <canvas id="securityChart"></canvas>
      </div>
    </div>

    <div class="footer">
      Healthcare DevSecOps Dashboard • Secure • Automated • Scalable
    </div>

    <script>
      new Chart(document.getElementById('visitsChart'), {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            label: 'Visits',
            data: [120,190,300,250,400,320,500],
            borderWidth: 2
          }]
        }
      });

      new Chart(document.getElementById('securityChart'), {
        type: 'bar',
        data: {
          labels: ['Low','Medium','High'],
          datasets: [{
            label: 'Threats',
            data: [15,8,3],
            borderWidth: 2
          }]
        }
      });
    </script>
  </body>
  </html>
  `);
});

server.listen(3000, () => {
  console.log('Healthcare dashboard running on port 3000');
});
