import { useHistory } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../../assets/back.svg";
import { BackButton } from "./styled";
import React from "react";

export function Back() {
  const history = useHistory();
  return (
    <BackButton onClick={() => history.push("/book")}>
      <BackIcon/>
    </BackButton>
  );
}
