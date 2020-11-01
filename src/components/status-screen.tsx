import React from 'react';
import styled from 'styled-components';

import { DeviceStatus } from './device-status';
import { CenteredTitle } from './shared/title';

import Button from './shared/button';

interface IStatusScreenProps {
  data: any[];
  drillOnDevice: (deviceId: string) => void;
  showOverview: () => void;
}

export const StatusScreen = (props: IStatusScreenProps) => (
  <Container>
    <CenteredTitle> My Devices </CenteredTitle>
    <Button onClick={props.showOverview}> Plant Overview </Button>
    <DevicesWrapper>
      {props.data.map((data) => (
        <DeviceStatus
          key={data.id}
          id={data.id}
          showDetails={() => props.drillOnDevice(data.id)}
          state={data.data[data.data.length - 1].status}
          type={data.data[data.data.length - 1].device_type}
        />
      ))}
    </DevicesWrapper>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 350px;
`;

const DevicesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
