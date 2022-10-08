import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        //sx = styling
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        p1: 2, //padding-left
        boxShadow: "none",
        mr: { sm: 5 }, //margin-right only in small devices
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          color: "red",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
