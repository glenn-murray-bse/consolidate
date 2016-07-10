describe('debt list', () => {
  let debtList

  beforeEach(() => {
    debtList = require('../source/client/application.tag')
  })

  it('should exist', () => {
    expect(debtList).to.be.defined
  })

  describe('mount', () => {
    beforeEach(() => {
      let html = document.createElement('debt-list')
      document.body.appendChild(html)
      riot.mount('debt-list')
    })

    it('should work', () => {
      expect(document.querySelector('debt-list')).to.not.equal(null)
    })

    it('should render', () => {
      expect(document.querySelector('debt-list').textContent).to.contain('Debts')
    })
  })
})
