// fechAPI.js
import createError from "http-errors";

export const fetchAPI = async (query, auth_token) => {
  try {
    // console.log(query);
    const result = await fetch(
      "https://apicollections.parismusees.paris.fr/graphql",
      {
        method: "POST",
        headers: {
          "auth-token": "f29c9ac5-cc3a-45b8-a02b-4c177c3b0603",
        },
        body: JSON.stringify({
          query,
        }),
      }
    );
    console.log(result);

    if (result.status == 403) throw createError(403);

    const data = await result.json();
    console.log(data);

    return data.data.nodeQuery.entities;
  } catch (error) {
    console.log(error);
    if (error.status == 403) throw createError(403, "Unauthorized");

    throw createError(
      500,
      "An error occured while fetching data from apicollections.parismusees.paris.fr"
    );
  }
};
