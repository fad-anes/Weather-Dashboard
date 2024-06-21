import axios from 'axios';
const api = {
    async weatherRes(lat: number, lon: number, unit: string, days: number): Promise<any> {
      try {
        const response: any = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&temperature_unit=${unit === 'C' ? 'celsius' : 'fahrenheit'}&days=${days}`
        );
        return response.data;
      } catch (error: any) {
        throw new Error(error.response?.data?.message || error.message);
      }
    },
    async geoRes (city: string): Promise<any> {
        try {
          const response: any = await axios.get(
            `https://geocode.maps.co/search?q=${city}`
          );
          return response.data[0];
        } catch (error: any) {
          throw new Error(error.response?.data?.message || error.message);
        }
      }
  };