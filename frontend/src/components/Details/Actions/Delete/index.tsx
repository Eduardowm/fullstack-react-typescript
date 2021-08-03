import { useMutation } from "@apollo/client";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../../../../assets/trash.svg";
import { DELETE_BOOK, DeleteArgs, DeleteData, } from "../../../../graphql/mutations/deleteBook";
import { DeleteContainer } from "./styled";
import React from "react";

export function Delete() {
  const [ deleteBook ] = useMutation<DeleteData, DeleteArgs>(DELETE_BOOK);
  const { _id } = useParams<{ _id: string }>();
  const history = useHistory();
  const handleDelete = () => {
    if (window.confirm("You really wanna do this? with a book 😱? omg...")) {
      deleteBook({
        variables: {
          _id,
        },
      }).then(() => {
        history.push("/book");
      });
    }
  };

  return (
    <DeleteContainer onClick={handleDelete}>
      <DeleteIcon/>
    </DeleteContainer>
  );
}
