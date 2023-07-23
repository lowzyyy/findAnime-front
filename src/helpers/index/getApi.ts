export const getApi = async () => {
  const ngrokRes = await fetch("https://api.ngrok.com/tunnels", {
    headers: {
      Authorization: `Bearer ${import.meta.env.ngrok_api_key}`,
      "ngrok-version": "2",
    },
  });
  if (!ngrokRes.ok) console.log(`ERROR NGROK API: ${ngrokRes.status}`);

  const { tunnels } = await ngrokRes.json();
  console.log(tunnels);

  const url: string = tunnels.find(
    (t: any) => t.public_url.startsWith("https") && t.metadata === "find-anime"
  ).public_url;

  return url;
};
