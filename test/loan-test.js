const loan = require('../source/client/application.tag')

describe('loan', () => {
  it('should exist', () => {
    expect(loan).to.be.defined()
  })

  describe('mount', () => {
    beforeEach(() => {
      const html = document.createElement('loan')

      document.body.appendChild(html)
      riot.mount('loan')
    })

    it('should work', () => {
      expect(document.querySelector('loan')).to.not.equal(null)
    })

    it('should render', () => {
      expect(document.querySelector('loan').textContent).to.contain('Loan')
    })
  })
})
