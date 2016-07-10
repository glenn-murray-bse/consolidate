describe('application', () => {
  let application

  beforeEach(() => {
    application = require('../source/client/application.tag')
  })

  it('should exist', () => {
    expect(application).to.be.defined
  })

  describe('mount', () => {
    beforeEach(() => {
      let html = document.createElement('application')
      document.body.appendChild(html)
      riot.mount('application')
    })

    it('should work', () => {
      expect(document.querySelector('application')).to.not.equal(null)
    })

    it('should render', () => {
      expect(document.querySelector('application').textContent).to.contain('Consolidate Loans')
    })
  })
})
