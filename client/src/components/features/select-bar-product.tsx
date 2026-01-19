import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";

// ESTE ES EL NUEVO PUNTO DE ORIGEN
// Tu Slice y tus servicios importarán este tipo de aquí.
import { ProductCategory } from "../../types";
interface SelectBarProductProps {
  value: ProductCategory;
  onChange: (category: ProductCategory) => void;
}

const tabItems: { label: string; value: ProductCategory }[] = [
  { label: "Chair", value: "chair" },
  { label: "Beds", value: "beds" },
  { label: "Sofa", value: "sofa" },
  { label: "Lamp", value: "lamps" },
];

const SelectBarProduct: React.FC<SelectBarProductProps> = ({ value, onChange }) => {
  const handleChange = (_: React.SyntheticEvent, newValue: ProductCategory) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "370px", bgcolor: "#EEEEEE", borderRadius: "100px", padding: "4px", margin: "0 auto" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          minHeight: "45px",
          "& .MuiTabs-indicator": {
            height: "100%",
            borderRadius: "100px",
            backgroundColor: "white",
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
            sx={{
              zIndex: 1,
              textTransform: "none",
              fontWeight: 500,
              color: "#7C7C7C",
              "&.Mui-selected": { color: "#1E1E1E" },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default SelectBarProduct;
