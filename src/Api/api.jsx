export const API_URL = "http://localhost:1337/api/recipes?populate=*";

export function TOKEN_POST(body) {
  return {
    url: "http://localhost:1337/api/auth/local",
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
    url: `${API_URL}`,
    options: {
      method: "GET",
      cache: 'no-store',
    },
  };
}