import { MainContainer } from "./styled";
import React from "react";
import { RichTextProvider } from "../../contexts/useRichText";
import { FormCreateUpdate } from "../../components/Form/CreateUpdate";
import { BottomNavigation } from "../../components/Common/BottomNavigation";

export function CreateUpdate() {
  return (
    <MainContainer>
      <RichTextProvider>
        <FormCreateUpdate/>
      </RichTextProvider>
      <BottomNavigation center/>
    </MainContainer>
  );
}
