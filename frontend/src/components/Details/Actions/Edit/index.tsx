import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as EditIcon } from "../../../../assets/pen.svg";
import { EditContainer } from "./styled";
import React from "react";

export function Edit() {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <EditContainer onClick={() => history.push(`${pathname}/update`)}>
      <EditIcon/>
    </EditContainer>
  );
}
