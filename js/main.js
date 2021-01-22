document.featurePolicy.allowsFeature('autoplay');
const app = new Vue({
  el: '#app',
  data() {
    return {
      mainTitle: { text: ''},
      subTitle: { text: '' },
      typeFinished: false,
      startButtonVisible: false,
      main: 'Образовательная игра «МОРЕХОД»',
      sub: 'Игра предназначена для детей 10-15 лет и направлена на развитие ' +
        'познавательных способностей по теме «Российскому флоту быть!»',
      classes: {
        startPage: {
          'hide': false,
          show: true
        },
        answerButton: {
          'hide': false
        },
        splashScreen: {
          'hide': false
        }
      },
      muted: false,
      bgmAudio: 'audioBgm',
      questions: [
        {
          type: 'stage',
          text: `<span class="stage">I ЭТАП «Поднять якорь!»<br>7 - вопросов</span><img src="img/000v2.jpg">`,
          answers: []
        },
        {
          type: 'oneOutFour',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        },
        {
          type: '',
          text: '',
          answers: [
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            },
            {
              text: '',
              correct: false
            }
          ]
        }
      ],
      currentQuestion: 0,
      answers: [],
      totalScore: 0
    }
  },
  computed: {
    isMuted() {
      return this.muted
    },
    isStartButtonVisible() {
      return this.startButtonVisible
    }
  },
  watch: {
    typeFinished: function(val, oldVal) {
      if(val && val !== oldVal) {
        this.type(this, this.sub, 1, this.subTitle, 20)
      } else {
        this.startButtonVisible = true
      }
    }
  },
  mounted() {

  },
  methods: {
    start() {
      this.mainTitle.text = ''
      this.subTitle.text = ''
      this.type(this, this.main, 1, this.mainTitle, 60)
    },
    playHandle(){
      this.start()
      this.classes.splashScreen['hide'] = true
      if(!this.muted) {
        playAudio(this.bgmAudio)
        playAudio('audioMorse')
      }
    },
    type(ctx, text, i, target, speed) {
      target.text = text.substr(0, i++)
      if (i <= text.length) {
        setTimeout(() => { ctx.type(ctx, text, i, target, speed) }, speed)
      } else {
        ctx.typeFinished = !ctx.typeFinished
      }
    },
    soundControlHandle() {
      this.muted = !this.muted
      let a = document.getElementById(this.bgmAudio)
      a.muted = this.muted

      if(!this.muted) {
        playAudio(this.bgmAudio)
        playAudio('audioMorse')
      }
    },
    startHandle() {
      this.classes.startPage['hide'] = true
      stopAudio(this.bgmAudio)
      stopAudio('audioMorse')
    },
    answerClickHandle(val) {
      if(this.currentQuestion < this.answers.length) {
        this.answers[this.currentQuestion].push(val)
      }
      if(val) {
        this.totalScore++
      }
    }
  }
})

function playAudio(audio) {
  if(audio) {
    let a = document.getElementById(audio)

    let onEnded = function (e) {

    }

    a.play()
    a.addEventListener("ended", onEnded)
  }
}

function stopAudio(audio) {
  if(audio) {
    let a = document.getElementById(audio)
    a.pause()
    a.currentTime = 0
  }
}
