import styled from 'styled-components';

export const ImageContainer = styled.div`
  margin: 0 12px;
  height: 300px;
  width: 200px;

  border: 1px solid var(--color-border);
`;

export const Image = styled.div`
  height: 50%;
  width: 100%;
  padding: 12px;

  border-bottom: 1px solid var(--color-border);

  > img {
    height: 100%;
    width: 100%;
  }
`;

export const Informations = styled.div`
  height: 50%;
  width: 100%;
  padding: 12px;
`;

export const Price = styled.div``;

export const Parcel = styled.div`
  margin: 8px 0;
  color: var(--color-green);
  font-size: 12px;
`;

export const LittleDescription = styled.div`
  font-size: 12px;
  color: var(--color-gray);
`;

