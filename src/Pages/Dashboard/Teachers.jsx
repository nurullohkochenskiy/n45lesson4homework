import React from "react";
import Dashboard from "../../components/Dashboard";
import { Button, Stack } from "@mui/material";
import Filter from "../../components/Filter";
import Searchuser from "../../components/Searchuser";
const Teachers = () => {
  return (
    <Dashboard>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Searchuser />
        <Button variant="contained">Add a teacher</Button>
        <Filter />
      </Stack>
    </Dashboard>
  );
};

export default Teachers;
