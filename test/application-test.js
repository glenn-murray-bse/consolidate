describe('application', () => {
  let application

  beforeEach(() => {
    application = require('../source/client/application.tag')
  })

  it('should exist', () => {
    expect(application).to.be.defined
  })

  it('should mount', () => {
    var html = document.createElement('application')
    document.body.appendChild(html)
    riot.mount('application')
    expect(document.querySelector('application')).to.not.equal(null)
    // expect(document.querySelector('hello > h1').textContent)
    //   .to.be('Hello!')
  })
})
