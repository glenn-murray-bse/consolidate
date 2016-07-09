<name>
  <h1>Name { opts.last }, { opts.first } : { count }</h1>
  <button onclick={ click }>Count</button>
  <script>
    this.count = 0

    this.click = () => {
      this.count++
    }
  </script>
</name>