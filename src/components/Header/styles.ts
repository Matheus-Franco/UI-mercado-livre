import styled from "styled-components";
import { HiOutlineLightningBolt, HiOutlineSearch, HiOutlineShoppingCart, HiOutlineLocationMarker } from 'react-icons/hi';
import { GiBiceps } from 'react-icons/gi'

export const Container = styled.div`
  width: 100%;
  height: 100px;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  padding: 8px 200px;
`;

export const Row = styled.div`
  &:nth-child(1) {
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  &:nth-child(2) {
    margin-top: 10px;
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const MercadoLivre = styled.div`
  display: flex;
  align-items: center;

  margin-right: 68px;
`;

export const BicepsIcon = styled(GiBiceps)`
  height: 36px;
  width: 36px;
  margin-right: 8px;
`;

export const Input = styled.div`
  margin-right: 42px;
  background: var(--color-white);
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: var(--panel-shadow);
  border-radius: 2px;
  padding: 4px 8px;

  width: 602px;

  input {
    height: 95%;
    width: 100%;
    outline: none;
    font-size: 16px;
    opacity: 0.6;

    border-right: 1px solid var(--color-gray);
  }
`;

export const SearchIcon = styled(HiOutlineSearch)`
  margin-left: 8px;
  color: var(--color-gray);
  cursor: pointer;
`;

export const EnjoyLightning = styled.div`
  display: flex;
  align-items: center;
`;

export const LightningIcon = styled(HiOutlineLightningBolt)`
  height: 30px;
  width: 30px;
  margin-right: 6px;
`;

export const ZipLocation = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;

  p {
    font-size: 12px;
    color: var(--color-gray);
  }
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  height: 25px;
  width: 25px;
  margin-right: 8px;
`;

export const MenuOptions = styled.div`
    margin-right: 144px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      margin-right: 12px;
      color: var(--color-gray);
      cursor: pointer;
    }
`;

export const UserOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    button {
      margin-right: 12px;
      color: var(--color-gray);
      cursor: pointer;
    }
`;

export const CartIcon = styled(HiOutlineShoppingCart)`

`;

