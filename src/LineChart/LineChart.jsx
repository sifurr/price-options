import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];

const LineChart = () => {
  const studentsMarksData = [
    { id: 1, name: "Student 1", math: 85, physics: 78, chemistry: 92 },
    { id: 2, name: "Student 2", math: 92, physics: 88, chemistry: 76 },
    { id: 3, name: "Student 3", math: 78, physics: 89, chemistry: 85 },
    { id: 4, name: "Student 4", math: 88, physics: 82, chemistry: 91 },
    { id: 5, name: "Student 5", math: 95, physics: 94, chemistry: 87 },
    { id: 6, name: "Student 6", math: 72, physics: 65, chemistry: 78 },
    { id: 7, name: "Student 7", math: 89, physics: 92, chemistry: 84 },
    { id: 8, name: "Student 8", math: 90, physics: 86, chemistry: 92 },
    { id: 9, name: "Student 9", math: 84, physics: 77, chemistry: 89 },
    { id: 10, name: "Student 10", math: 91, physics: 88, chemistry: 94 },
  ];


  return (
    <div className="mx-auto">
      <LChart width={1100} height={400} data={studentsMarksData}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="orange"></Line>
        <Line dataKey="physics" stroke="blue"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
