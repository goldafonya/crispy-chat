import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { STYLE_COLOR } from "../../constants/STYLE_COLOR";
import { STYLE_SIZE } from "../../constants/STYLE_SIZE";
import { IStore } from "../../model/store/IStore";

const MainWrapperDiv = styled.main`
    flex-grow: 1;
    width: 100%;
    max-width: ${STYLE_SIZE.MAX_CONTENT_WIDTH};
    background-color: ${STYLE_COLOR.DEFAULT_COLOR};
`;

export const Main: FC<{}> = () => {
  const count = useSelector((store: IStore) => store.profile.count);
  const dispatch = useDispatch();

  const inc = () => dispatch({ type: "INCREMENT" });
  const dec = () => dispatch({ type: "DECREMENT" });

  return (
    <MainWrapperDiv>
      Main
      <div>{count}</div>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
    </MainWrapperDiv>
  );
};