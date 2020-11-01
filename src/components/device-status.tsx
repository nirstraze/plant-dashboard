import React from 'react';
import styled from 'styled-components';
import SubTitle from './shared/sub-title';
import TitleInfo from './shared/title-info';

type DeviceState = 'Unload' | 'Load' | 'Off';

export interface IDeviceStatusProps {
  id: string;
  data?: any[];
  showDetails?: () => void;
  state?: DeviceState;
  type?: string;
}

export const DeviceStatus = (props: IDeviceStatusProps) => (
  <Wrapper
    type={props.type}
    onClick={() => {
      if (props.showDetails) {
        props.showDetails();
      }
    }}
  >
    <TitleWrapper>
      <SubTitle>{props.id}</SubTitle>
      <TitleInfo>{`${props.type}`}</TitleInfo>
    </TitleWrapper>
    <StateTitle>{props.state}</StateTitle>
  </Wrapper>
);

const Wrapper = styled.div<Partial<IDeviceStatusProps>>`
  background-color: ${(props) => getColorByType(props.type)};
  height: 90px;
  width: 150px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :hover{
    border: 1px solid orange;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StateTitle = styled(SubTitle)`
  align-self: center;
  font-size: 24px;
  padding: 10px
`;

const getColorByType = (type?: string): string => {
  switch (type) {
    case 'Good':
      return 'rgba(0, 152, 0, 0.2)';
    case 'Bad':
      return 'rgba(152, 0, 0, 0.2)';
    case 'Ugly':
    default:
      return 'rgba(152, 152, 0, 0.2)';
  }
};
