const buildHumanReadableCity = (city: string) => {
  const citySplite = city.split('/')
  return citySplite[citySplite.length - 1].replaceAll('_', ' ')
}

export default buildHumanReadableCity
