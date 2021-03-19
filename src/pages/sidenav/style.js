import styled from "styled-components";

export const SideNavContainer = styled.div`
  display: flex;
  height: 30vh;
  flex-flow: column;
  width: 15%;
  margin: 0 0.4em;
  text-align: left;
  border-right: 1px solid grey;
`;

export const AddButton = styled.input`
  padding: 8px 15px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    padding-right: 1em;
  }
`;

export const IconNavMenu = styled.div``;

export const IconNavMenuItem = styled.div`
  & > span {
    font-weight: 500;
    font-size: 10px;
    color: #5f6368;
  }
`;
