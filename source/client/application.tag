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
    this.title = 'Consolidate'
  </script>
  <h1>{ foo() }</h1>
  <script>
    this.foo = () => {
      return 'bar'
    }
  </script>
</application>

<debt-list>
  <style>
    :host {
      display: block;
      padding: 16px;
    }
  </style>
  <h1>Debts</h1>
  <div each={ debt in debts}>
    <card heading={ debt.name }>
      <h3>Amount: ${ debt.remaining }</h3>
      <input onkeyup={ updateName.bind(debt) } value={ debt.name } placeholder="Name" type="text">
      </input>
      <input onkeyup={ updateOutsanding.bind(debt) } value={ debt.remaining } placeholder="outstanding debt (in dollars)" type="number" step="0.01" min="0.01">
        <div prefix>$&nbsp;</div>
      </input>
      <div>Use repayments? { debt.useRepayments }</div>
      <input type="checkbox" onchange={ toggleRepayments.bind(null, debt) }>Use Repayments</input>
      <listbox>
        <div each={ repayment in debt.repayments }>
          <item>{ repayment }</item>
        </div>
      </listbox>
      <button onclick={ addRepayment }>Add Repayment</button>
      <button onclick={ remove }>Remove Debt</button>
    </card>
  </template>
  <div>
    <button onclick={ add }>Add New Debt</button>
  </div>

  <script>
    //TODO: use flux (riot-control/flux) instead
    this.updateOutsanding = e => {
      this.remaining = parseFloat(e.target.value)
      this.update()
    }
    this.updateName = e => {
      this.name = e.target.value
      this.update()
    }

    let initialDebt = 0
    let initialTotalDebt = 0

    this.total = initialTotalDebt
    this.debts = [{
      name: 'Fake Debt',
      remaining: initialDebt,
      useRepayments: true,
      repayments: []
    }]

    // observers: [
    //   'debtsChanged(debts.*)'
    // ],

    this.toggleRepayments = debt => {
      debt.useRepayments = !debt.useRepayments
      this.update()
    }

    // addRepayment: function(e) {
    //   //TODO: add repayment
    // },

    this.add = () => {
      //TODO: refactor to 'flux' model
      //  * debts get passed to component via opts
      //  * component communicates desire to update model by firing events to an observer
      //  * observer updates the root state which is used as opts and triggers updates where necessary
      //  * no further events can be triggered in an 'update' cycle
      this.debts.push({
        name: 'Debt',
        remaining: 0.00,
        repayments: ['foo', 'bar', 'baz'],
        useRepayments: true,
        remaining: initialDebt
      })
      this.update()
    }

    this.remove = e => {
      this.debts.splice(e.model.index, 1)
      this.update()
    }

    this.on('update', () => {
      //TODO: this could be optimised furrther but JS is fairly fast at math (relative to DOM manipulation)
      //see https://www.polymer-project.org/1.0/docs/devguide/properties#array-observation for stupid efficient (horribly unreadable) version
      this.total = this.debts.reduce(function(total, current) {
        return total + (parseInt(current.remaining, 10) || initialDebt)
      }, initialTotalDebt)
    })
  </script>
</debt-list>