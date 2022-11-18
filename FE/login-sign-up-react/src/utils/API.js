import { getAccessToken } from "./local-storage";

const baseUrl = 'disini base URL API nyah';

class FetchAPI {
    static async fetchWithToken(url, options = {}) {
        return fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
          },
        });
    } 

    static async login({ email, password }) {
        const response = await fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        const responseJson = await response.json();
    
        if (responseJson.status !== 'success') {
          return { error: responseJson.message, data: null };
        }
    
        return { error: null, data: responseJson.data };
    }

    static async register({ name, username, email, password, role }) {
        const response = await fetch(`${baseUrl}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, name, email, password, role }),
        });
        const { status, message } = await response.json();
    
        return { status, message };
    }
}

export default FetchAPI;