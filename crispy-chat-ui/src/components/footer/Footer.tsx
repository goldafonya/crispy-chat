import React, { FC } from "react";
import styled from "styled-components";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import Typography from "@material-ui/core/Typography/Typography";

const FooterWrapperDiv = styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    background-color: ${STYLE_COLOR.PRIMARY_COLOR};
`;

const FooterDiv = styled.div`
    max-width: ${STYLE_SIZE.MAX_CONTENT_WIDTH};
`;

export const Footer: FC<{}> = () => {

  return (
    <FooterWrapperDiv>
      <FooterDiv>
        <Typography
          variant="h4"
          component="h4"
          style={{ color: "white" }}
        >
          Footer
        </Typography>
      </FooterDiv>
    </FooterWrapperDiv>
  );
};