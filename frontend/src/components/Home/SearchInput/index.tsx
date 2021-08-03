import { useDebouncedCallback } from "use-debounce/lib";
import { ReactComponent as SearchIcon } from "../../../assets/searchIcon.svg";
import { Container, Input } from "./styled";
import { useSearchBooks } from "../../../contexts/useSearchBooks";
import React from "react";

export function SearchInput() {
  const { handleSetTerm } = useSearchBooks();

  const handleDebounceInput = useDebouncedCallback(
    (value: string) => handleSetTerm(value),
    500
  );
  return (
    <Container>
      <SearchIcon/>
      <Input
        type="search"
        id="search"
        placeholder="Search book"
        onChange={(e) => handleDebounceInput(e.target.value)}
      />
    </Container>
  );
}
