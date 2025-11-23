import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { type ProductCategory } from "../../constants";
import { type SelectBarProductProps } from "../../types";

const tabItems: { label: string; value: ProductCategory }[] = [
  { label: "Chair", value: "chair" },
  { label: "Beds", value: "beds" },
  { label: "Sofa", value: "sofa" },
  { label: "Lamp", value: "lamp" },
];

const SelectBarProduct = ({ value, onChange }: SelectBarProductProps) => {
  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: ProductCategory
  ) => {
    onChange(newValue);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "370px" },
        maxWidth: "320px",
        bgcolor: "#EEEEEE",
        borderRadius: "100px",
        padding: "2px",
        margin: "0 auto",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          "& .MuiTabs-indicator": {
            height: "100%",
            borderRadius: "100px",
          },
          "& .MuiTab-root": {
            position: "relative",
            zIndex: 1,
            transition: "color 0.3s",
            minWidth: { xs: "80px", sm: "auto" },
            fontSize: { xs: "0.85rem", sm: ".975rem" },
            padding: { xs: "6px 12px", sm: "12px 16px" },
            "&.Mui-selected": {
              color: "#1E1E1E",
            },
          },
        }}
        TabIndicatorProps={{
          sx: {
            backgroundColor: "white",
            height: "100%",
            borderRadius: "100px",
            zIndex: 0,
          },
        }}
      >
        {tabItems.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            value={tab.value}
            disableRipple
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default SelectBarProduct;
