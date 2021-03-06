import React from "react";
import Skeleton from "react-loading-skeleton";
import { useGetOneBook } from "../../../contexts/useGetOneBook";
import { CoverContainer, ImageContainer } from "./styled";

export function CoverBook() {
  const { book } = useGetOneBook();

  return (
    <>
      <CoverContainer>
        <div className="wrapper"/>
      </CoverContainer>
      <ImageContainer>
        {book !== undefined ? (
          <img className="cover" src={book.imageUri} alt="Book Cover"/>
        ) : (
          <Skeleton className="cover" width={150} height={200}/>
        )}
        <div className="shadow"/>
      </ImageContainer>
    </>
  );
}
