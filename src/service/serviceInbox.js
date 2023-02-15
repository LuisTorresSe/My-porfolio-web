const urlApi = "/api/inbox";

export const postInbox = async (message) => {
  const request = await fetch(urlApi, {
    method: "POST",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify(message),
  });

  const response = await request.json();
  return response;
};
