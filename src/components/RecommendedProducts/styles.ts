import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid var(--color-border);
  padding: 44px 32px;

  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  margin: 0 0 18px 32px;

  font-size: 18px;
`;

export const ImageArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

`;

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

export const Parcel = styled.div``;

export const LittleDescription = styled.div``;

export const Paginate = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 18px;

`;

export const ButtonChangePage  = styled.button`
  background: var(--color-blue);
  color: var(--color-white);
  width: 124px;
  height: 48px;
  margin-right: 30px;

  margin-top: 12px;

  font-size: 15px;
  border-radius: 4px;
  padding: 12px 10px;

  cursor: pointer;
  outline: none;
  border: none;
`;
