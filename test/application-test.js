const application = require('../source/client/application.tag')

describe('application', () => {
  it('should exist', () => {
    expect(application).to.be.defined()
  })

  describe('mount', () => {
    beforeEach(() => {
      const html = document.createElement('application')

      document.body.appendChild(html)
      riot.mount('application')
    })

    it('should work', () => {
      expect(document.querySelector('application')).to.not.equal(null)
    })

    it('should render', () => {
      const element = document.querySelector('application')

      expect(element.textContent).to.contain('Consolidate Loans')
    })
  })
})
