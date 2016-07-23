const debtList = require('../source/client/application.tag')

describe('debt list', () => {
  it('should exist', () => {
    expect(debtList).to.be.defined()
  })

  describe('mount', () => {
    beforeEach(() => {
      const html = document.createElement('debt-list')

      document.body.appendChild(html)
      riot.mount('debt-list')
    })

    it('should work', () => {
      expect(document.querySelector('debt-list')).to.not.equal(null)
    })

    it('should render', () => {
      const text = document.querySelector('debt-list').textContent

      expect(text).to.contain('Debts')
    })
  })
})
