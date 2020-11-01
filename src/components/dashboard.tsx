import React, { useEffect, useState } from 'react';

import { DeviceDetails } from './device-details';
import { IDeviceStatusProps } from './device-status';
import { StatusScreen } from './status-screen';
import { Overview } from './overview';

import dataService from '../services/data-service';

type ScreenType = 'status' | 'details' | 'overview';

export const Dashboard = () => {
  const [dataArr, updateData] = useState<IDeviceStatusProps[]>([]);
  const [currentScreen, changeScreen] = useState<{
    screenType: ScreenType;
    selectedDevice: string;
  }>({ screenType: 'status', selectedDevice: '' });

  useEffect(() => {
    const dataByDevice = dataService.fetchData();

    const devicesInfo: IDeviceStatusProps[] = Array.from(
      Object.entries(dataByDevice)
    ).map((entry) => {
      return { id: entry[0], data: entry[1] };
    });

    updateData(devicesInfo);
  }, []);

  return (
    <div>
      {(() => {
        const { screenType, selectedDevice } = currentScreen;
        switch (screenType) {
          case 'overview':
            return (
              <Overview
                id={selectedDevice}
                data={dataService.aggregateData(dataArr)}
                goBack={() =>
                  changeScreen({ screenType: 'status', selectedDevice })
                }
              />
            );
          case 'details':
            return (
              <DeviceDetails
                id={selectedDevice}
                data={
                  dataArr.find((deviceInfo) => deviceInfo.id === selectedDevice)
                    ?.data || []
                }
                goBack={() =>
                  changeScreen({ screenType: 'status', selectedDevice })
                }
              />
            );
          case 'status':
          default:
            return (
              <StatusScreen
                data={dataArr}
                drillOnDevice={(selectedDevice) =>
                  changeScreen({ screenType: 'details', selectedDevice })
                }
                showOverview={() =>
                  changeScreen({ screenType: 'overview', selectedDevice })
                }
              />
            );
        }
      })()}
    </div>
  );
};
