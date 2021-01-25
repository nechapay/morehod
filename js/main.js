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
        // 1st stage
        {
          type: 'stage',
          text: `<span class="stage">I ЭТАП «Поднять якорь!»<br>7 - вопросов</span><img src="img/000v2.jpg">`,
          answers: []
        },
        // 1st question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-80">Слово «матро́с» заимствовано 
          из голландского языка, где matroos восходит к французскому matelot — «матрос», 
          которое снова возвращает нас к голландскому matten-noot («товарищ по «…»). 
          Что буквально означает это слово?</div><div class="image-container w-20"><img src="img/001.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'товарищ  по шлюпке',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'товарищ  по койке',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'товарищ по игре в кости',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'товарищ по кубрику',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 2nd question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-50">Что означает выражение «Бить склянки»?</div>
                <div class="image-container w-50"><img src="img/002.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'бить посуду',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'играть на музыкальном инструменте',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'наносить удар противнику',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'бить в судовой колокол',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 3rd question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-50">«Бригантина» - это…</div>
                <div class="image-container w-50"><img src="img/003.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'имя девушки',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'судно с двумя мачтами',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'лодка',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'судно с тремя мачтами',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 4th question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-50">Выбери 
                верное написание слова: «Вахтенный матрос на баке, наблюдающий за всем происходящим в море впереди 
                по курсу судна»:</div>
                <div class="image-container w-50"><img src="img/004.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'вперет смотрящий',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'вперед-смотрящий',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'впередсмотрящий',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: 'в перед смотрящий',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 5 question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-70">Выбери верное написание слова: 
                «Все снасти на судне, служащие для укрепления рангоута и для управления им и 
                парусами, называются»:</div>
                <div class="image-container w-30"><img src="img/005.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'токелаж',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'такилаж',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'такелаж',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: 'такелаш',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 6 question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-70">6. Слово «юнга» переводится с 
                немецкого языка (Junge) как:</div>
                <div class="image-container w-30"><img src="img/006.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'матрос',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'помощник капитана',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'ребёнок',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'мальчик',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 7 question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-90">7. Подберите к 
                слову «шкипер» синоним:</div></div>`,
          answers: [
            {
              id: 1,
              text: 'шлюпка',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'бескозырка',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'капитан',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: 'пингвин',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 2nd stage
        {
          type: 'stage',
          text: `<span class="stage">II ЭТАП «Полный вперёд!» <br> 10 - вопросов</span><img src="img/000v2.jpg">`,
          answers: []
        },
        // 8 question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-90">Российский военно-морской 
                флот основан в …</div></div>`,
          answers: [
            {
              id: 1,
              text: 'в 1686г.',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 2,
              text: 'в 1796г.',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'в 1856г.',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'в 1926г.',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 9 question
        {
          type: 'oneOutFour',
          text: `<div class="question-container"><div class="text-container w-90">Каким флот был изначально:</div></div>`,
          answers: [
            {
              id: 1,
              text: 'парусно-гребным ',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 2,
              text: 'гребным',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'парусным',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'подводным',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        }
      ],
      currentQuestion: 0,
      answers: [],
      totalScore: 0,
      prevVisible: false,
      nextVisible: true,
      preventAnswers: false
    }
  },
  computed: {
    isMuted() {
      return this.muted
    },
    isStartButtonVisible() {
      return this.startButtonVisible
    },
    isPrevVisible() {
      return this.prevVisible
    },
    isNextVisible() {
      return this.nextVisible
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
    answerClickHandle(val, id) {
      console.log(val)
      if(!this.preventAnswers) {
        this.answers.push(val)
        this.questions[this.currentQuestion].answers.forEach(function (item) {
          for (let key of Object.keys(item.classes)) {
            item.classes[key] = !item.classes[key]
          }
          if(item.id === id) {
            item.classes['selected'] = true
          }
        })
      }
      if(val && !this.preventAnswers) {
        this.totalScore++
        playAudio('audioSuccess')
      } else {
         if (!this.preventAnswers) playAudio('audioFail')
      }
      this.preventAnswers = true
      this.nextVisible = true
    },
    prevHandle() {
      this.currentQuestion--
      this.prevVisible = false
      this.nextVisible = true
      this.preventAnswers = true
      this.stopSounds()
    },
    nextHandle() {
      this.currentQuestion++
      this.prevVisible = true
      this.nextVisible = false
      this.stopSounds()
      this.preventAnswers = false
    },
    stopSounds() {
      stopAudio('audioSuccess')
      stopAudio('audioFail')
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
