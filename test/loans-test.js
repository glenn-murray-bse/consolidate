const loans = require('../source/client/application.tag')

describe('loans', () => {
  it('should exist', () => {
    expect(loans).to.be.defined()
  })

  describe('mount', () => {
    beforeEach(() => {
      const html = document.createElement('loans')

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
