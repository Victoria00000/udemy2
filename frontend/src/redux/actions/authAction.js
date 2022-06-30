import axios from 'axios';

export const userRegister = (data) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Conntent-Type': 'application/json'
            }
        };
        try {
            const response = await axios.post('api/chat-app/user-register', data, config);
            console.log(response, response.data);
        } catch (error) { console.log(error) };
    };
};