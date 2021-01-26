// import draggable from '../js/vuedraggable.umd.min.js'

const app = new Vue({
  el: '#app',
  // components: {
  //   draggable
  // },
  data() {
    return {
      mainTitle: { text: ''},
      subTitle: { text: '' },
      typeFinished: false,
      startButtonVisible: true,
      main: 'Образовательная игра «МореХод»',
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
        },
        showDraggableAnswer: {
          'hide': true
        }
      },
      muted: false,
      bgmAudio: 'audioBgm',
      questions: [
        // 1st stage
        {
          type: 'stage',
          index: 1,
          sos: false,
          text: `<span class="stage">I ЭТАП «Поднять якорь!»<br>7 - вопросов</span><img src="img/000v2.jpg">`,
          answers: []
        },
        // 1st question
        {
          type: 'oneOutFour',
          index: 2,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-70">Слово «матро́с» заимствовано 
          из голландского языка, где matroos восходит к французскому matelot — «матрос», 
          которое снова возвращает нас к голландскому matten-noot («товарищ по «…»). 
          Что буквально означает это слово?</div><div class="image-container w-30"><img src="img/001.jpg"></div></div>`,
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
          index: 3,
          sos: false,
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
          index: 4,
          sos: false,
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
          index: 5,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-60">Выбери 
                верное написание слова: «Вахтенный матрос на баке, наблюдающий за всем происходящим в море впереди 
                по курсу судна»:</div>
                <div class="image-container w-40"><img src="img/004.jpg"></div></div>`,
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
          index: 6,
          sos: false,
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
          index: 7,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-70">6. Слово «юнга» переводится с 
                немецкого языка (Junge) как:</div>
                <div class="image-container w-30"><img src="img/006.gif"></div></div>`,
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
          index: 8,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-70">7. Подберите к 
                слову «шкипер» синоним:</div><div class="image-container w-30"><img src="img/007.jpg"></div></div>`,
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
          index: 9,
          sos: false,
          text: `<span class="stage">II ЭТАП «Полный вперёд!» <br> 10 - вопросов</span><img src="img/000v2.jpg">`,
          answers: []
        },
        // 8 question
        {
          type: 'oneOutFour',
          index: 10,
          sos: false,
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
          index: 11,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-70">Каким флот был изначально:</div></div>`,
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
        },
        // 10 question
        {
          type: 'dragDrop',
          index: 12,
          sos: false,
          text: `<div class="question-container--drag">
                    <div class="drag-text-container">Найдите соответствие:</div>
                    <div class="drag-question-grid">
                       <div class="drag-question-grid__label"><span>A</span></div>
                       <div class="drag-question-grid__label"><span>Б</span></div>
                       <div class="drag-question-grid__label"><span>В</span></div>
                       <div class="drag-question-grid__label"><span>Г</span></div>
                       <div class="drag-question-grid__image"><img src="img/svg/Russia-Navy-OF-6-2010.svg"></div>
                       <div class="drag-question-grid__image"><img src="img/svg/Russia-Navy-OF-7-2010.svg"></div>
                       <div class="drag-question-grid__image"><img src="img/svg/Russia-Navy-OF-8-2010.svg"></div>
                       <div class="drag-question-grid__image"><img src="img/svg/Russia-Navy-OF-9-2013.svg"></div>
                    </div>
                 </div>`,
          correct: [
            {
              id: 2,
              text: 'контр-адмирал',
              classes: {
                correct: true,
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'вице-адмирал',
              classes: {
                correct: true,
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'адмирал',
              classes: {
                correct: true,
                incorrect: false
              }
            },
            {
              id: 1,
              text: 'адмирал флота',
              classes: {
                correct: true,
                incorrect: false
              }
            }
          ],
          answers: [
            {
              index: 1,
              labels: ['А', 'Б', 'В', 'Г'],
              items: [
                {
                  id: 1,
                  text: 'адмирал флота',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: 'контр-адмирал',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: 'адмирал',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: 'вице-адмирал',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                }
              ]
            }
          ]
        },
        // 11 question
        {
          type: 'dragDrop',
          index: 13,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-60">Расположите 
                воинские звания по старшинству:</div><div class="image-container w-40"><img src="img/104.jpg"></div></div>`,
          correct: [
            {
              id: 2,
              text: 'мичман',
              classes: {
                correct: true,
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'капитан третьего ранга',
              classes: {
                correct: true,
                incorrect: false
              }
            },
            {
              id: 1,
              text: 'капитан первого ранга',
              classes: {
                correct: true,
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'адмирал',
              classes: {
                correct: true,
                incorrect: false
              }
            }
          ],
          answers: [
            {
              index: 1,
              labels: ['А', 'Б', 'В', 'Г'],
              items: [
                {
                  id: 1,
                  text: 'капитан первого ранга',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 2,
                  text: 'мичман',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 3,
                  text: 'капитан третьего ранга',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                },
                {
                  id: 4,
                  text: 'адмирал',
                  classes: {
                    correct: false,
                    incorrect: false
                  }
                }
              ]
            }
          ]
        },
        // 12 question
        {
          type: 'oneOutFour',
          index: 14,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-70">Представленный погон указывает на воинское звание:</div>
                 <div class="image-container w-30"><img src="img/svg/Russia-Navy-OF-4-2010.svg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'подполковник',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'капитан-лейтенант',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'капитан 2 ранга',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: 'мичман',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 13 question
        {
          type: 'oneOutFour',
          index: 15,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-70">Воинскому званию «матрос» на флоте соответствует воинское звание в армии?</div>
                 </div>`,
          answers: [
            {
              id: 1,
              text: 'ефрейтор',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'сержант',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'прапорщик',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'рядовой',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 14 question
        {
          type: 'oneOutFour',
          index: 16,
          sos: true,
          sosText: '«Кроме того, что адмирал Колчак был вождем Белого движения и Верховным ' +
            'правителем России, он был еще и выдающимся ученым-океанографом, одним из крупнейших ' +
            'полярных исследователей, участником трех полярных экспедиций, а также автором монографии ' +
            '«Какой нужен России флот». Адмирал разработал теоретические основы подготовки и проведения ' +
            'совместных армейских операций на суше и в море. В 1908 году он читал лекции в Морской академии. ' +
            'Участвовал в русско-японской войне, в том числе в самом продолжительном ее сражении – обороне ' +
            'Порт-Артура. В Первую мировую войну командовал дивизией миноносных кораблей Балтийского флота, ' +
            'а с 16-17-х годов – Черноморским флотом».',
          text: `<div class="question-container--drag"><div class="drag-text-container">7. Кто из представленных адмиралов 
                был еще и выдающимся ученым-океанографом, одним из крупнейших полярных исследователей, 
                участником трех полярных экспедиций, а также автором монографии «Какой нужен России флот»?<br>
                Отвечая на данный вопрос, вы можете воспользоваться подсказкой, нажав кнопку <b>SOS</b>, после чего 
                перейдёте к следующему вопросу, не набрав очки за это задание.</div>
                <div class="drag-question-grid">
                       <div class="drag-question-grid__label"><span>1</span></div>
                       <div class="drag-question-grid__label"><span>2</span></div>
                       <div class="drag-question-grid__label"><span>3</span></div>
                       <div class="drag-question-grid__label"><span>4</span></div>
                       <div class="drag-question-grid__image"><img src="img/107-1.jpg"></div>
                       <div class="drag-question-grid__image"><img src="img/107-2.jpg"></div>
                       <div class="drag-question-grid__image"><img src="img/107-3.jpg"></div>
                       <div class="drag-question-grid__image"><img src="img/107-4.jpg"></div>
                    </div></div>`,
          answers: [
            {
              id: 1,
              text: 'Павел Нахимов',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'Фёдор Колчак',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'Фёдор Ушаков',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'Владимир Шмидт',
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
      preventAnswers: false,
      showDraggableAnswer: false
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
    },
    isShowDraggableAnswer() {
      return this.showDraggableAnswer
    }
  },
  watch: {
    typeFinished: function(val, oldVal) {
      if(val && val !== oldVal) {
        this.type(this, this.sub, 1, this.subTitle, 20)
      } else {
        this.startButtonVisible = true
      }
    },
    currentQuestion: function (val, oldVal) {
      if(val === 0) {
        this.prevVisible = false
      }
      if(val === this.questions.length - 1) {
        this.nextVisible = false
      }
      if(!_.isNil(this.answers[this.currentQuestion])) {
        this.preventAnswers = true
      }
    },
    nextVisible: function (val, oldVal) {
      if(this.currentQuestion === this.questions.length - 1) {
        this.nextVisible = false
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
    dragAnswerHandle() {
      if(!this.preventAnswers) {
        let answer = this.questions[this.currentQuestion].answers[0].items.map((item) => {
          return item.text
        })

        let correct = this.questions[this.currentQuestion].correct.map((item) => {
          return item.text
        })

        this.answers.push(answer.join(',') === correct.join(','))
        if(answer.join(',') === correct.join(',')) {
          this.totalScore++
          playAudio('audioSuccess')
          this.questions[this.currentQuestion].answers[0].items.forEach(function (item) {
            item.classes.correct = true
          })
        } else {
          playAudio('audioFail')
          this.classes.showDraggableAnswer['hide'] = false
          for(let i = 0; i < answer.length; i++) {
            if(answer[i] === this.questions[this.currentQuestion].correct[i].text) {
              this.questions[this.currentQuestion].answers[0].items[i].classes.correct = true
            } else {
              this.questions[this.currentQuestion].answers[0].items[i].classes.incorrect = true
            }
          }
        }
      }
      this.nextVisible = true
      this.preventAnswers = true
    },
    prevHandle() {
      if(this.currentQuestion > 0) {
        this.currentQuestion--
      } else {
        this.prevVisible = false
      }
      this.nextVisible = true
      this.preventAnswers = true
      this.stopSounds()
    },
    nextHandle() {
      if(this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
        this.nextVisible = this.questions[this.currentQuestion].type === 'stage'
      } else {
        this.nextVisible = false
      }
      this.prevVisible = true
      this.stopSounds()
      this.preventAnswers = false
    },
    stopSounds() {
      stopAudio('audioSuccess')
      stopAudio('audioFail')
    },
    sosButtonClickHandle() {
      console.log(this.questions[this.currentQuestion].sosText)
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
