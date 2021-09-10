const API_URL = 'https://api.github.com';

export default async function api({url, ...otherProps}) {
    const res = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/vnd.github.v3+json',
      },
      mode:"cors",
      ...otherProps
    })
  
    const json = await res.json()
    if (!json) {
      console.error(json.errors)
      throw new Error('Failed to fetch API')
    }
  
    return json
  }