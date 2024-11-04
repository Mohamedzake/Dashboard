import { LineChart } from "@mui/x-charts/LineChart";

export default function Linechart() {
  const dataset = [
    { x: 1, y: 2, y2: 3 },
    { x: 2, y: 5.5, y2: 6.5 },
    { x: 3, y: 2, y2: 4 },
    { x: 5, y: 8.5, y2: 7 },
    { x: 8, y: 1.5, y2: 5.5 },
    { x: 10, y: 5, y2: 8 },
  ];

  return (
    <>
      <LineChart
        dataset={dataset}
        xAxis={[{ dataKey: "x" }]}
        series={[
          { dataKey: "y", label: "Series 1", color: "blue" },
          { dataKey: "y2", label: "Series 2", color: "green" },
        ]}
        height={370}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </>
  );
}
