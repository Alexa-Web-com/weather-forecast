import Head from '../../src/components/Head/Head'
import { Provider } from 'react-redux'

import configureStore from 'redux-mock-store'

const mockStore = configureStore([])
const store = mockStore({
  language: {
    currentLanguage: 'pl'
  },
  location: {
    currentLocation: {
      city: '',
      latitude: '54.52',
      longitude: '18.53',
      countryCode: '',
    },
  },
})

/* eslint-disable no-undef */
describe('Head.cy.jsx', () => {
  it('renders', () => {
    cy.mount(
      <Provider store={store}>
        <Head />
      </Provider>
    )
    cy.get('.head__title > span').should('be.visible')
    cy.get('.css-qbdosj-Input').type('Gdynia, PL')
    cy.get('#react-select-2-input').should('be.visible')
    cy.get('#react-select-2-input').should('have.length', 1)
    cy.get(':nth-child(2) > .head__choosen_geolocation_coordinates_value').should('have.text', '54.52')
    cy.get(':nth-child(3) > .head__choosen_geolocation_coordinates_value').should('have.not.text', '')
    cy.get('.byGeolocation__find_city_location_btn').click()
  })
})