import React, { useCallback, useState } from 'react';

import { FirstProducts, SecondProducts } from '../ProductsPaginate';

import {
  Container,
  Title,
  ImageArea,
  Paginate,
  ButtonChangePage
} from './styles';

const products = [<FirstProducts />, <SecondProducts />]

const RecommendedProducts: React.FC = () => {
  const [product, setProducts] = useState<number>(0);

  const handleChangePage = useCallback(() => {
    if (product === 1) {
      setProducts(0)
    } else {
      setProducts(product + 1)
    }
  }, [product])

  return (
    <Container>
      <Title>Quem viu este produto também comprou</Title>

      <ImageArea>
          {products[product]}
      </ImageArea>

      <Paginate>
          <ButtonChangePage onClick={handleChangePage}>
            Mais
          </ButtonChangePage>
      </Paginate>

    </Container>
  )
}

export default RecommendedProducts;
