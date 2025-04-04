import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message}`);
      } else {
        const errorText = await response.text();
        throw new Error(`Error: ${errorText}`);
    }
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log('Error with user login:', error);
    return Promise.reject('Could not login');
  }
}


export { login };
