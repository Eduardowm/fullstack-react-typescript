import React from "react";
import { CoverBook } from "../../components/Details/Cover";
import { Description } from "../../components/Details/Description";
import { Back } from "../../components/Details/Actions/Back";
import { Edit } from "../../components/Details/Actions/Edit";
import { Delete } from "../../components/Details/Actions/Delete";

export function BookView() {
  return <>
    <CoverBook/>
    <Description/>
    <Back/>
    <Edit/>
    <Delete/>
  </>;
}
