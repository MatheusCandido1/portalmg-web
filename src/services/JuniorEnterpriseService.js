import { Http } from './utils/HttpClient';

class JuniorEnterpriseService {
  async getJuniorEnterprises(orderBy) {
    try {
      const response = await Http.get(`juniorenterprises?orderBy=${orderBy}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
}

export default new JuniorEnterpriseService();
