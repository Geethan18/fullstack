import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import "./styles.css";

Chart.register(CategoryScale);
 
export default function App() {
  const [chartData, setChartData] = useState({
    // ...chart data
  });
 
  return (
    <div className="App">
      <PieChart chartData={chartData} />
      <BarChart chartData={chartData} />
    </div>
  );}