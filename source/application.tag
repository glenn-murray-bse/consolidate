<loan>
  <h3>Loan { name }</h3>
  <input type="text" placeholder="Name" value={ loan.title } onchange={ refresh } />
  <input type="number" value={ loan.amount } onchange={ refresh } />
  <script>
    this.loan = this.opts.loan

    this.refresh = () => {
      this.update()
    }
  </script>
</loan>

<loans>
  <h2>{ title }</h2>
  <button onclick={ add }>Add</button>
  <loan each={ loan in loans } loan={ loan }></loan>
  <script>
    this.add = () => {
      this.loans.unshift({})
    }
    this.loans = []
    this.title = 'Loans'
  </script>
</loans>

<application>
  <h1>{ title }</h1>
  <loans></loans>
  <script>
    this.title = 'Consolidate'; FOO; BARASASD
  </script>
  <h1>{ foo() }</h1>
  <script>
    this.foo = () => {
      return 'bar'
    }
  </script>
</application>