import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "./Filter/Filter";
import SearchClose from "@mui/icons-material/Close";
import OutlinedAlerts from "../Alert/Alert";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pokemonsByName } from "../../../../Services/Pokemons/pokemonsByName";
import {
  resetSearch,
  setSearchTerm,
} from "../../../redux/features/pokemonSlice";
import { debounce } from "lodash";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  flex: "0 0 auto",
  padding: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flex: "1 1 auto",
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: `calc(1em + ${theme.spacing(1)})`,
  transition: theme.transitions.create("width"),
  [theme.breakpoints.up("sm")]: {
    width: "20ch",
    "&:focus": {
      width: "25ch",
    },
  },
}));

const CloseWrapper = styled("div")(({ theme }) => ({
  flex: "0 0 auto",
  padding: theme.spacing(0, 1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function SearchBar() {
  const [name, setName] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (name.trim() !== "") {
      dispatch(pokemonsByName(name.trim(), searchPage));
    } else {
      dispatch(resetSearch());
    }
  };

  const handleReset = () => {
    setName("");
    dispatch(resetSearch());
  };

  const searchPokemons = debounce(() => {
    dispatch(setSearchTerm(name));
    handleSubmit();
  }, 1000);

  const handleChange = (value) => {
    setName(value);
    if(value){
      searchPokemons();
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Filter />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={name}
              onChange={(e) => handleChange(e.target.value)}
            />
            {name.length > 0 && (
              <CloseWrapper>
                <SearchClose onClick={handleReset} />
              </CloseWrapper>
            )}
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
