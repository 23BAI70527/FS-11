function Dashboard() {
  return (
    <>
      <style>
        {`
          .dashboard-card {
            padding: 30px 20px;
            margin: 15px;
            border-radius: 12px;
            color: white;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: pointer;
            text-align: center;
          }

          .dashboard-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          }

          .users {
            background: linear-gradient(135deg, #1e88e5, #42a5f5);
          }

          .sales {
            background: linear-gradient(135deg, #43a047, #66bb6a);
          }

          .revenue {
            background: linear-gradient(135deg, #f9a825, #ffca28);
            color: #333;
          }
        `}
      </style>

      <div className="container mt-5">
        <div className="row text-center justify-content-center">
          <div className="col-md-3 dashboard-card users">
            <h5>Users</h5>
            <p>1,245</p>
          </div>
          <div className="col-md-3 dashboard-card sales">
            <h5>Sales</h5>
            <p>534</p>
          </div>
          <div className="col-md-3 dashboard-card revenue">
            <h5>Revenue</h5>
            <p>$12,480</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
