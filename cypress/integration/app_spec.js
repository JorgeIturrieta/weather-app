describe('End to end Test App', () => {
  it('should navigate to the / page and get geolocation permission', () => {
    const latitudeMock = 51.507351
    const longitudeMock = -0.127758

    cy.visit('/')
    cy.get('h1').contains('Ultimate weather App')
    cy.window().then(win => {
      cy.visitWithCustomGeoLoc(win, 'http://localhost:3000', latitudeMock, longitudeMock)
    })
  })
})
