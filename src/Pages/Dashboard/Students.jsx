import React from "react";
import Dashboard from "../../components/Dashboard";
import { Button, Stack } from "@mui/material";
import Filter from "../../components/Filter";
import Searchuser from "../../components/Searchuser";
import Studentlist from "../../components/Studentlist";

const Students = () => {
  return (
    <Dashboard>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        mb={5}
      >
        <Searchuser />
        <Button variant="contained">Add a student</Button>
        <Filter />
      </Stack>
      <Studentlist />
    </Dashboard>
  );
};

export default Students;
