export const API_URL = "http://localhost:1337/api/recipes";

export function RECIPE_GET() {
  return {
    url: `${API_URL}`,
    options: {
      method: "GET",
      cache: 'no-store',
    },
  };
}