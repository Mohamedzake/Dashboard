import Box from "@mui/material/Box";

import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart() {
  const seriesNb = 1;
  const itemNb = 13;

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart
        height={300}
        width={380}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
      />
    </Box>
  );
}

const highlightScope = {
  highlight: "series",
  fade: "global",
} as const;

const series = [
  {
    label: "series 2",
    data: [
      2362, 2254, 1962, 1336, 886, 1069, 2194, 1629, 2173, 2031, 1757, 862,
      2446, 910, 2430, 2300, 805, 1835, 1684, 2197,
    ],
  },
].map((s) => ({ ...s, highlightScope }));
