describe('name', () => {
  let name

  beforeEach(() => {
    name = require('../source/client/name.tag')
  })

  it('should exist', () => {
    expect(name).to.be.defined
  })

  describe('mount', () => {
    beforeEach(() => {
      let html = document.createElement('name')
      document.body.appendChild(html)
      riot.mount('name')
    })

    it('should work', () => {
      expect(document.querySelector('name')).to.not.equal(null)
    })

    it('should render', () => {
      expect(document.querySelector('name').textContent).to.contain('Name')
    })
  })
})
