describe('loans', () => {
  let loans

  beforeEach(() => {
    loans = require('../source/client/application.tag')
  })

  it('should exist', () => {
    expect(loans).to.be.defined
  })

  describe('mount', () => {
    beforeEach(() => {
      let html = document.createElement('loans')
      document.body.appendChild(html)
      riot.mount('loans')
    })

    it('should work', () => {
      expect(document.querySelector('loans')).to.not.equal(null)
    })

    it('should render', () => {
      expect(document.querySelector('loans').textContent).to.contain('Loans')
    })
  })
})
