import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 100vw;
  height: 60px;
`;

export const HeaderLogoContainer = styled.div`
  padding: 12px;
`;

export const HeaderLogo = styled.div`
  display: flex;

  justify-content: flex-start;

  & > svg {
    width: 40px;
    height: 100%;
    object-fit: contain;
    margin-top: 5px;
  }
`;
export const HeaderTitle = styled.span`
  font-size: 1em;
  font-weight: 600;
  color: grey;
  margin: 1em 1em;
`;

//search bar
export const SearchBarContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  padding: 0 8px;

  & > div {
    display: flex;
    width: 45%;
    height: 120%;
    border-radius: 6px;
    background: rgb(237, 237, 237);
    align-items: center;
    justify-content: flex-start;
    padding: 0 8px;
  }
`;
export const SearchInput = styled.input`
  flex: 1;
  padding: 6px 0;
  border: none;
  color: lightgrey;
  background: none;
  margin-left: 1em;
  font-size: 15px;

  &:focus {
    outline: none;
    color: #000;
  }
`;

export const SearchIcon = styled.i``;

export const ExpandIcon = styled.i``;

export const HeaderIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const HeaderIconList = styled.span`
  margin: 0 1em;
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const HeaderIcon = styled.i`
  margin: 0 0.3em;
  font-size: 1.3em;
`;

export const UserImageContainer = styled.div``;
export const UserImages = styled.img``;
