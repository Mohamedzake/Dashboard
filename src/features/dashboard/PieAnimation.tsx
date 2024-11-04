import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { PieChart } from "@mui/x-charts/PieChart";
// import { mobileAndDesktopOS, valueFormatter } from "./webUsageStats";

export default function PieAnimation() {
  const [radius, setRadius] = React.useState(50);
  const [itemNb, setItemNb] = React.useState(5);
  const [skipAnimation, setSkipAnimation] = React.useState(false);
  const desktopOS = [
    {
      label: "Windows",
      value: 72.72,
    },
    {
      label: "OS X",
      value: 16.38,
    },
    {
      label: "Linux",
      value: 3.83,
    },
    {
      label: "Chrome",
      value: 2.42,
    },
    // {
    //   label: "Other",
    //   value: 4.65,
    // },
  ];

  const mobileOS = [
    {
      label: "Android",
      value: 70.48,
    },
    {
      label: "iOS",
      value: 28.8,
    },
    // {
    //   label: "Other",
    //   value: 0.71,
    // },
  ];

  const platforms = [
    {
      label: "Mobile",
      value: 59.12,
    },
    {
      label: "Desktop",
      value: 40.88,
    },
  ];

  const normalize = (v: number, v2: number) =>
    Number.parseFloat(((v * v2) / 100).toFixed(2));

  const mobileAndDesktopOS = [
    ...mobileOS.map((v) => ({
      ...v,
      label: v.label === "Other" ? "Other (Mobile)" : v.label,
      value: normalize(v.value, platforms[0].value),
    })),
    ...desktopOS.map((v) => ({
      ...v,
      label: v.label === "Other" ? "Other (Desktop)" : v.label,
      value: normalize(v.value, platforms[1].value),
    })),
  ];

  const valueFormatter = (item: { value: number }) => `${item.value}%`;
  const handleItemNbChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };
  const handleRadius = (event: Event, newValue: number | number[]) => {
    if (typeof newValue !== "number") {
      return;
    }
    setRadius(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <PieChart
        height={200}
        series={[
          {
            data: mobileAndDesktopOS.slice(0, itemNb),
            innerRadius: radius,
            // arcLabel: (params) => params.label ?? "",
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
        skipAnimation={skipAnimation}
      />
      <FormControlLabel
        checked={skipAnimation}
        control={
          <Checkbox
            onChange={(event) => setSkipAnimation(event.target.checked)}
          />
        }
        label="skipAnimation"
        labelPlacement="end"
      />
      <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={1}
        max={6}
        aria-labelledby="input-item-number"
      />
      <Typography id="input-radius" gutterBottom>
        Radius
      </Typography>
      <Slider
        value={radius}
        onChange={handleRadius}
        valueLabelDisplay="auto"
        min={15}
        max={100}
        aria-labelledby="input-radius"
      />
    </Box>
  );
}
