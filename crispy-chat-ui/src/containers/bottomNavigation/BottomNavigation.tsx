import React, { FC, useCallback, useState } from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import BottomNavigationMU from "@material-ui/core/BottomNavigation";
import { navigate } from "@reach/router";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useTypedSelector } from "../../store/store";
import { GlobalActions } from "../../actions/GlobalActions";
import { useDispatch } from "react-redux";
import { Divider } from "@material-ui/core";

export const BottomNavigation: FC = () => {
  const [value, setValue] = useState("/chat");
  const auth = useTypedSelector(store => store.global.auth);
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(GlobalActions.logout()), [dispatch]);


  return (
    <>
      <Divider/>
      <BottomNavigationMU
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction
          onClick={() => navigate("/chat")}
          label="Chat"
          icon={<FavoriteIcon/>}
        />
        {auth && (
          <BottomNavigationAction
            onClick={onLogout}
            label="Logout"
            icon={<ExitToAppIcon/>}
          />
        )}
      </BottomNavigationMU>
    </>
  );
};