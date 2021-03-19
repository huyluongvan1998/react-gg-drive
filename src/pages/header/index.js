import React from "react";
import "primeicons/primeicons.css";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLogo,
  HeaderTitle,
  SearchBarContainer,
  SearchIcon,
  SearchInput,
  ExpandIcon,
  HeaderIconContainer,
  HeaderIconList,
  HeaderIcon,
  UserImages,
  UserImageContainer,
} from "./style";
import { ReactComponent as Icon } from "assets/images/gg-drive-icon.svg";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <HeaderLogo>
          <Icon />
          <HeaderTitle>Drive</HeaderTitle>
        </HeaderLogo>
      </HeaderLogoContainer>

      <SearchBarContainer>
        <div>
          <SearchIcon className="pi pi-search" />
          <SearchInput placeholder="Search..." />
          <ExpandIcon className="pi pi-angle-down" />
        </div>
      </SearchBarContainer>
      <HeaderIconContainer>
        <HeaderIconList>
          <HeaderIcon className="pi pi-question-circle" />
          <HeaderIcon className="fa fa-cog" />
        </HeaderIconList>
        <HeaderIcon className="pi pi-list" />
        <UserImageContainer>
          UserImages
          <UserImages></UserImages>
        </UserImageContainer>
      </HeaderIconContainer>
    </HeaderContainer>
  );
};

export default Header;
