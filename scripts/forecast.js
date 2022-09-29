const key = 'HyOpA6dFjkqSebZB5nqyFwgIgg8x8F9d';

const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);

  const data = await response.json();

  console.log(data);
};

getCity('manchester')
    .then(data => console.log(data))
    .catch(err => console.log(err));

const getRegion = async () => {
    const base = 'http://dataservice.accuweather.com/locations/v1/regions';
    const query = `?apikey=${key}`;

    const response = await fetch(base + query);

    const data = await response.json();

    console.log(data);
}

getRegion()
    .then(data => console.log(data))
    .catch(err => console.log(err));