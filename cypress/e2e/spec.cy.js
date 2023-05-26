/* eslint-disable no-undef */
describe('get weather by coordinates', () => {
  beforeEach('visit site', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', 'localhost:3000')
  })
  it('init', () => {
    expect(true).to.equal(true)
  })
  it('check title after language change', () => {
    cy.contains("ES").click()
    cy.contains('Tu clima').should('be.visible')
    cy.get('.head__title > span').should('have.text', 'Tu clima ')
    cy.contains("EN").click()
    cy.get('.head__title > span').should('have.text', 'Your weather ')
    cy.contains("PL").click()
    cy.get('.head__title > span').should('have.text', 'Twoja pogoda ')
  })
  it('check elements after language change to PL', () => {
    cy.contains("PL").click()
    cy.get('.daily__general_desc').should('have.text', 'Aktualna pogoda')
    cy.get('.daily__details_elem_left > :nth-child(4)').should("have.text", "Wiatr: ")
  })
  it('check elements value', () => {
    cy.get('.daily__details_elem_right > :nth-child(5) > :nth-child(1)').should('not.have.text', "")
    cy.get('.daily__general_temp > :nth-child(1)').invoke('text').should('match', /^[0-9]\d*(\.\d+)?$/)
  })
  it('other tab opened', () => {
    cy.get(':nth-child(3) > .day__day_details > span').click()
    cy.get('.day__day_details_opened > .day__carets').invoke('attr', 'alt').should('eq', 'caret up')
    cy.get('.day__day_details_opened').click()
  })
})