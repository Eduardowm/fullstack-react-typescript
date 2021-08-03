import React from "react";
import { MainContainer } from "./styled";
import { SearchInput } from "../../components/Home/SearchInput";
import { Title } from "../../components/Home/Title";
import { BookList } from "../../components/Home/BookList";
import { BottomNavigation } from "../../components/Common/BottomNavigation";

export function Home() {
  return (
    <MainContainer>
      <SearchInput/>
      <Title user="Mehmed AI Fatih"/>
      <BookList/>
      <BottomNavigation/>
    </MainContainer>
  );
}
