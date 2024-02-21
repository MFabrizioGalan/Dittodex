import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { allPokemons } from '../../../../Services/Pokemons/allPokemons';

export default function PaginationContainer({ onPageChange }) {
  const pokemons = useSelector((state) => state.pokemon.allPokemons);
  const allPage = useSelector((state) => state.pokemon.allPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allPokemons());
  },[dispatch])
  return (
    <Stack spacing={1} className="flex flex-wrap justify-center bg-purple-200 pb-4">
      <Pagination
        count={allPage}
        showFirstButton
        showLastButton
        onChange={onPageChange}
        sx={{
          '& .MuiPaginationItem-page': {
            color: 'purple',
          },
        }}
        className="flex items-center justify-center"
      />
    </Stack>
  );
}
