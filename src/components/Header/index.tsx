import React from "react";

import {
  Container,
  Row,
  MercadoLivre,
  BicepsIcon,
  Input,
  SearchIcon,
  EnjoyLightning,
  LightningIcon,
  ZipLocation,
  LocationIcon,
  MenuOptions,
  UserOptions,
  CartIcon
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Row>
        <MercadoLivre>
          <BicepsIcon />
          <h3>Mercado
          <br/> Livre</h3>
        </MercadoLivre>

        <Input>
          <input type="text" placeholder="Buscar produtos, marcas e muito mais..."/>
          <SearchIcon />
        </Input>

        <EnjoyLightning>
          <LightningIcon />
          <p>Aproveite preços incríveis todos os dias</p>
        </EnjoyLightning>
      </Row>

      <Row>
        <ZipLocation>
          <LocationIcon />
            <p>Informe seu <br /> CEP</p>
        </ZipLocation>

        <MenuOptions>
          <button type="button">Categorias</button>
          <button type="button">Ofertas do dia</button>
          <button type="button">Histórico</button>
          <button type="button">Supermercado</button>
          <button type="button">Lojas oficiais</button>
          <button type="button">Vender</button>
          <button type="button">Contato</button>
        </MenuOptions>

        <UserOptions>
          <button>Crie sua conta</button>
          <button>Entre</button>
          <button>Compras</button>
          <CartIcon />
        </UserOptions>

      </Row>
    </Container>
  )
};

export default Header;
