export const API_URL = "http://localhost:1337/api/";


export function REGISTER_POST(body) {
  return {
    url: `${API_URL}auth/local/register`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function LOGIN_POST(body) {
  return {
    url: `${API_URL}auth/local`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function RECIPE_GET() {
  return {
    url: `${API_URL}recipes?populate=*`,
    options: {
      method: "GET",
      cache: 'no-store',
    },
  };
}

export function COMMENT_GET(id) {
  return {
    url: `${API_URL}recipes/${id}?populate=comments`,
    options: {
      method: "GET",
      cache: 'no-store',
    },
  };
}

export function COMMENT_POST(body, jwt) {
  return {
    url: `${API_URL}comments`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(body),
    },
  };
}