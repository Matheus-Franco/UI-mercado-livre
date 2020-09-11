import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import goproImage from '../../assets/gopro.jpeg';
import iphoneImage from '../../assets/iphone.jpeg';

import {
  ImageContainer,
  Image,
  Informations,
  Price,
  Parcel,
  LittleDescription,
} from './styles';

export const FirstProducts = () => (
  <>
  <ImageContainer>
    <Image>
      <img src={goproImage} alt="Imagem"/>
    </Image>

    <Informations>
      <Price>
        <p>R$ 49</p>
      </Price>

      <Parcel>
        <p>10x de R$ 4,99</p>
        <br />
        <p>Fretes Grátis</p>
      </Parcel>

      <LittleDescription>
        <p>Lorem ipsum dolor asit amet</p>
        <p>Lorem ipsum dolor asit amet</p>
      </LittleDescription>
    </Informations>
  </ImageContainer>

  <ImageContainer>
    <Image>
      <img src={tshirtImage} alt="Imagem"/>
    </Image>

    <Informations>
      <Price>
        <p>R$ 49</p>
      </Price>

      <Parcel>
        <p>10x de R$ 4,99</p>
        <br />
        <p>Fretes Grátis</p>
      </Parcel>

      <LittleDescription>
        <p>Lorem ipsum dolor asit amet</p>
        <p>Lorem ipsum dolor asit amet</p>
      </LittleDescription>
    </Informations>
  </ImageContainer>

  <ImageContainer>
    <Image>
      <img src={iphoneImage} alt="Imagem"/>
    </Image>

    <Informations>
      <Price>
      <p>R$ 4999</p>
      </Price>

      <Parcel>
      <p>10x de R$ 499,99</p>
      </Parcel>

      <LittleDescription>
        <p>Lorem ipsum dolor asit amet</p>
        <p>Lorem ipsum dolor asit amet</p>
      </LittleDescription>
    </Informations>
  </ImageContainer>
  </>
)

export const SecondProducts = () => (
  <>
  <ImageContainer>
    <Image>
      <img src={iphoneImage} alt="Imagem"/>
    </Image>

    <Informations>
      <Price>
        <p>R$ 4999</p>
      </Price>

      <Parcel>
        <p>10x de R$ 499,99</p>
      </Parcel>

      <LittleDescription>
        <p>Lorem ipsum dolor asit amet</p>
        <p>Lorem ipsum dolor asit amet</p>
      </LittleDescription>
    </Informations>
  </ImageContainer>

  <ImageContainer>
    <Image>
      <img src={tshirtImage} alt="Imagem"/>
    </Image>

    <Informations>
      <Price>
        <p>R$ 49</p>
      </Price>

      <Parcel>
        <p>10x de R$ 4,99</p>
      </Parcel>

      <LittleDescription>
        <p>Lorem ipsum dolor asit amet</p>
        <p>Lorem ipsum dolor asit amet</p>
      </LittleDescription>
    </Informations>
  </ImageContainer>

  <ImageContainer>
    <Image>
      <img src={goproImage} alt="Imagem"/>
    </Image>

    <Informations>
      <Price>
        <p>R$ 49</p>
      </Price>

      <Parcel>
        <p>10x de R$ 4,99</p>
        <br />
        <p>Fretes Grátis</p>
      </Parcel>

      <LittleDescription>
        <p>Lorem ipsum dolor asit amet</p>
        <p>Lorem ipsum dolor asit amet</p>
      </LittleDescription>
    </Informations>
  </ImageContainer>
  </>
)
