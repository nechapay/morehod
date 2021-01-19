const app = new Vue({
  el: '#app',
  data() {
    return {
      mainTitle: { text: ''},
      subTitle: { text: '' },
      typeFinished: false,
      main: 'Образовательная игра «МОРЕХОД»',
      sub: 'Игра предназначена для детей 10-15 лет и направлена на развитие ' +
        'познавательных способностей по теме «Российскому флоту быть!»',
      classes: {
        startPage: {
          'hide': false
        }
      }
    }
  },
  watch: {
    typeFinished: function(val, oldVal) {
      if(val && val !== oldVal) {
        this.type(this, this.sub, 1, this.subTitle)
      }
    }
  },
  mounted() {
    this.start()
  },
  methods: {
    start() {
      this.mainTitle.text = ''
      this.subTitle.text = ''
      this.type(this, this.main, 1, this.mainTitle)
    },
    type(ctx, text, i, target) {
      target.text = text.substr(0, i++)
      if (i <= text.length) {
        setTimeout(() => { ctx.type(ctx, text, i, target) }, 50)
      } else {
        ctx.typeFinished = true
      }
    }
  }
})
