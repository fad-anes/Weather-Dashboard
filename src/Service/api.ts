import axios from 'axios';

const OPEN_WEATHER_MAP_API_KEY = '66754b981e8fb586437641ngbac20f9';

 const api = {
  async weatherRes(lat: number, lon: number, unit: string, days: number): Promise<any> {
    try {
      const response: any = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&temperature_unit=${unit === 'C' ? 'celsius' : 'fahrenheit'}&forecast_days=${days}`
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  },
  async geoRes(city: string): Promise<any> {
    try {
      const response: any = await axios.get(
        `https://geocode.maps.co/search?q=${city}&api_key=${OPEN_WEATHER_MAP_API_KEY}`
      );
      if (response.data.length === 0) {
        throw new Error('City not found');
      }
      return response.data[0];
    } catch (error: any) {
      throw new Error(error.response?.data?.message || error.message);
    }
  }
};
export default api;