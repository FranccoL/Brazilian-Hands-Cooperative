import { PieChart } from "../graphics/pieChart/PieChart";
import { ProfitPerAreaPerMonth } from "../graphics/profitPreAreaPerMonth/ProfitPerAreaPerMonth";
import { ListDayWorks } from "../listsDayWorks/ListDayWorks";
import "./Dashboard.css";

function Dashboard() {
  return (
    <section className="dashboardContainer">
      <div className="chartsContent">
        <ProfitPerAreaPerMonth />
        <PieChart />
      </div>
      <ListDayWorks />
    </section>
  );
}

export default Dashboard;
