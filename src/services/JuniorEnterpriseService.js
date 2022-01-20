import { Http } from './utils/HttpClient';

class JuniorEnterpriseService {
  async getJuniorEnterprises(orderBy, page) {
    try {
      const response = await Http.get('juniorenterprises', {
        params: {
          page,
          orderBy,
        },
      });
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
}

export default new JuniorEnterpriseService();
