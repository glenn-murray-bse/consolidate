<name>
  <h1>Name { name } { opts.last }, { opts.first } : { count }</h1>
  <foo>
  <button onclick={ click }>Count</button>
  <script>
    //NOTE: imports are hoisted to top of file
    //  i.e. 'name' variable is also available in <foo> tag
    import { name } from './module'

    this.name = name

    this.count = 0

    this.click = () => {
      this.count++
    }
  </script>
</name>

<foo>
  <h2>required { name }</h2>
  <script>
    let module = require('./module')

    this.name = module.name
  </script>
</foo>