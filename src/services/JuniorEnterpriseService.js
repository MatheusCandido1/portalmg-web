import { Http } from './utils/HttpClient';

class JuniorEnterpriseService {
  async getJuniorEnterprises() {
    try {
      const response = await Http.get('juniorenterprises');
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
}

export default new JuniorEnterpriseService();
