import React from 'react';

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More
} from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>
            Localização
          </p>

          <strong>Espirito Santo, Vila Velha</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>vendas nos últimos 6 meses</span>
          </div>

          <div>
            <strong><SupportIcon /></strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong><ClockIcon /></strong>
            <span>vendas nos últimos 6 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">
        Ver mais informações do vendedor
      </More>
    </Container>
  )
}

export default SellerInfo;
