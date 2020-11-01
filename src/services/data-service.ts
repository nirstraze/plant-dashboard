import { data } from "../resource/data";
import { parseCsv } from "../utils/csv-parser";

class DataService {

  /**
   * Fetching data from csv file and create mapping of device id to it's data.
   */
  public fetchData = () => {
    const json = parseCsv(data);
    const dataByDevice: { [id: string]: any } = {};

    json.forEach((row) => {
      const deviceId = row['device_id'];
      if (!dataByDevice[deviceId]) {
        dataByDevice[deviceId] = [];
      }
      dataByDevice[deviceId].push(row);
    });

    return dataByDevice;
  };

  /**
   * Aggregate values of temprature, pressure and volume
   * @param dataArr 
   */
  aggregateData = (dataArr: any[]): any[] => {
    const res: any[] = [];
  
    dataArr.forEach((deviceData) => {
      deviceData.data?.forEach((row: any, i: number) => {
        if (!res[i]) {
          res[i] = {};
          res[i]['temp'] = 0;
          res[i]['pressure'] = 0;
          res[i]['volume'] = 0;
        }
        res[i]['timestamp'] = row['timestamp'];
        res[i]['temp'] += parseFloat(row['temp']);
        res[i]['pressure'] += parseFloat(row['pressure']);
        res[i]['volume'] += parseFloat(row['volume']);
      });
    });
  
    return res;
  };
}

const instance = new DataService();
export default instance;
