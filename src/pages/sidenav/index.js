import React from "react";
import {
  SideNavContainer,
  AddButton,
  IconNavMenu,
  IconNavMenuItem,
} from "./style";
function Sidenav() {
  return (
    <SideNavContainer>
      <AddButton type="file">
        <i className="fa fa-plus"></i>
        <span>New</span>
      </AddButton>
      <IconNavMenu>
        <IconNavMenuItem>
          <i className="fa fa-file"></i>
          <span>My Drive</span>
        </IconNavMenuItem>
        <IconNavMenuItem>
          <i className="fa fa-desktop"></i>
          <span>Computers</span>
        </IconNavMenuItem>
        <IconNavMenuItem>
          <i className="pi pi-users"></i>
          <span>Share with me</span>
        </IconNavMenuItem>
        <IconNavMenuItem>
          <i className="fa fa-clock-o"></i>
          <span>Recent</span>
        </IconNavMenuItem>
        <IconNavMenuItem>
          <i className="fa fa-star-o"></i>
          <span>Starred</span>
        </IconNavMenuItem>
        <IconNavMenuItem>
          <i className="fa fa-trash-o"></i>
          <span>Bin</span>
        </IconNavMenuItem>
      </IconNavMenu>
    </SideNavContainer>
  );
}

export default Sidenav;
