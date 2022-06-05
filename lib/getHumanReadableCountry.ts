const getHumanReadableCountry = (codeCountry: string) => {
  const regionNames = new Intl.DisplayNames(['es'], { type: 'region' })

  return regionNames.of(codeCountry)
}

export default getHumanReadableCountry
