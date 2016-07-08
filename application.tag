<loan>
  <h3>{ title }</h3>
  <script>
    this.title = 'Loan ' + this.opts.loan
  </script>
</loan>

<loans>
  <h2>{ title }</h2>
  <loan each={loan in loans} loan={ loan }></loan>
  <script>
    this.loans = [1,2,3,4,5]
    this.title = 'Loans'
  </script>
</loans>

<application>
  <h1>{ title }</h1>
  <loans></loans>
  <script>
    this.title = 'Consolidate'
  </script>
</application>