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
        },
        viewer: {
          slide: false
        }
      },
      viewerContent: '',
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
          text: `<div class="question-container"><div class="text-container w-60">Что означает выражение «Бить склянки»?</div>
                <div class="image-container w-40"><img src="img/002.jpg"></div></div>`,
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
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 4,
              text: 'вице-адмирал',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 3,
              text: 'адмирал',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 1,
              text: 'адмирал флота',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
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
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 2,
                  text: 'контр-адмирал',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 3,
                  text: 'адмирал',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 4,
                  text: 'вице-адмирал',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
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
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 3,
              text: 'капитан третьего ранга',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 1,
              text: 'капитан первого ранга',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 4,
              text: 'адмирал',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
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
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 2,
                  text: 'мичман',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 3,
                  text: 'капитан третьего ранга',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 4,
                  text: 'адмирал',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
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
          text: `<div class="question-container--drag"><div class="drag-text-container">Кто из представленных адмиралов 
                был еще и выдающимся ученым-океанографом, одним из крупнейших полярных исследователей, 
                участником трех полярных экспедиций, а также автором монографии «Какой нужен России флот»?<br>
                Отвечая на данный вопрос, вы можете воспользоваться подсказкой, нажав кнопку <b>SOS</b>, после чего 
                перейдёте к следующему вопросу, не набрав очки за это задание.</div>
                <div class="drag-question-grid">
                       <div class="drag-question-grid__label"><span>1</span></div>
                       <div class="drag-question-grid__label"><span>2</span></div>
                       <div class="drag-question-grid__label"><span>3</span></div>
                       <div class="drag-question-grid__label"><span>4</span></div>
                       <div class="drag-question-grid__image"><img class="w-70" src="img/107-1.jpg"></div>
                       <div class="drag-question-grid__image"><img class="w-80" src="img/107-2.jpg"></div>
                       <div class="drag-question-grid__image"><img class="w-70" src="img/107-3.jpg"></div>
                       <div class="drag-question-grid__image"><img class="w-70" src="img/107-4.jpg"></div>
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
        },
        // 15 question
        {
          type: 'oneOutFour',
          index: 17,
          sosText: '«Aдмиpaлтeйcтвo aнглийcкoгo флoтa издaлo пpикaз, дaтиpoвaнный 1776 гoдoм, в кoтopoм ' +
            'пpeдпиcывaлocь в oбязaтeльнoм пopядкe вo вce кaнaты гocyдapcтвeннoй бpитaнcкoй флoтилии ' +
            'вплeтaть ниткy кpacнoгo цвeтa. Taким знaкoм былo peшeнo oтличaть гocyдapcтвeнныe кopaбли oт ' +
            'чacтныx. Из кaнaтa c кpacнoй нитью нeльзя былo выдepнyть нить, нe paзмoтaв пpи этoм вecь кaнaт. ' +
            'Cтoль жe нeвoзмoжным cтaнoвилocь и oтpeзaниe кycкa кaнaтa или oтмaтывaниe яpкoй нитки. Дeлo в тoм, ' +
            'чтo пapycныe cyдa тoгo вpeмeни имeли нeвepoятнo бoльшoe кoличecтвo кaнaтныx cплeтeний, кoтopыe ' +
            '«пpoнизывaли» coбoй бyквaльнo вecь кopaбль. A ecли пpeдcтaвить кpacнyю ниткy пpoxoдящeй чepeз вce ' +
            'мнoгoчиcлeнныe кaнaты кopaбля, тo мoжнo пoнять пepвoнaчaльный eмкий cмыcл этoй фpaзы бpитaнcкиx мopякoв. ' +
            'Ho блaгoдapя нeoжидaнным пoвopoтaм cyдьбы фpaзa пpoчнo oceлa нe в aнглийcкoм языкe, a в нeмeцкoм. ' +
            'Heмeцкий пиcaтeль Иoгaнн Гётe иcпoльзoвaл выpaжeниe aнглийcкoгo флoтa в cвoeм poмaнe «Poдcтвeнныe ' +
            'нaтypы». Oн yпoтpeбил фpaзeoлoгизм в cвязи c мopcким кaнaтoм. И oднoвpeмeннo влoжил в нeгo пepeнocный ' +
            'cмыcл. Пocкoлькy пиcaтeль был пoпyляpeн, a eгo пpoизвeдeния шиpoкo извecтны, тo выpaжeниe пpo кpacнyю ' +
            'нить имeлo нeвepoятный ycпex». ',
          sos: true,
          text: `<div class="question-container"><div class="text-container w-60">
                 Появление выражения <b>«проходит красной нитью»</b> имеет интересную историю. Онo oзнaчaeт 
                 «нeчтo ocнoвнoe, вeдyщee, глaвнoe». Bыpaжeниe <b>«пpoxoдит кpacнoй нитью»</b> мoжнo нaйти 
                 ceгoдня вo мнoгиx языкax Eвpoпы. Ecли изyчaть пpoиcxoждeниe дaннoй фpaзы, иcтoки пpивeдyт нac к…</div>
                 <div class="image-container w-40"><img src="img/109.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'войне с Наполеоном',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'бpитaнcкoмy cyдoxoдcтвy',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'истории книгопечатанья',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'реформам Петра I ',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 16 question
        {
          type: 'oneOutFour',
          index: 18,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-100">Как называют бывалого моряка:</div></div>`,
          answers: [
            {
              id: 1,
              text: 'боцман',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'морской волк',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'пират',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'кракен',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 17 question
        {
          type: 'oneOutFour',
          index: 19,
          sosText: '«Континентальный шельф Российской Федерации (также называемый Российский континентальный шельф) ' +
            '— континентальный шельф. Геологически определяется как весь континентальный шельф, примыкающий к ' +
            'побережью России. В международном же праве Конвенция ООН по морскому праву более узко определяет ' +
            'протяжённость шельфа как океанское дно и недра подводных районов, которые находятся под суверенитетом ' +
            'России. Шельф Сибири в Северном Ледовитом океане является самым крупным (и наименее изученным) из ' +
            'шельфов, регион имеет стратегическое значение из-за запасов нефти и природного газа. Другие части ' +
            'российского шельфа, как правило, названы в честь соответствующих морей: Баренцевоморский шельф ' +
            '(шельф Баренцева моря), Чукотский шельф (шельф Чукотского моря) и др. За исключением внутренних морей ' +
            'России, эти шельфы используются совместно с другими странами, которые соседствуют на соответствующих ' +
            'морях. Например, шельф Чукотского моря разделён между Россией и США, в соответствии с Соглашением между ' +
            'СССР и США о линии разграничения морских пространств 1990 года. Площадь континентального шельфа, ' +
            'находящегося под юрисдикцией РФ, составляет около 5 млн км², что составляет около 1/5 площади шельфа ' +
            'Мирового океана».',
          sos: true,
          text: `<div class="question-container"><div class="text-container w-70">Каким образом в международном  
                праве Конвенции ООН по морскому праву  определяется протяжённость <b>континентального 
                шельфа Российской Федерации:</b></div>
                <div class="image-container w-30"><img src="img/110.png"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'как океанское дно и недра подводных районов',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 2,
              text: 'как прибрежная зона',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'граница проходит по суше',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'граница проходит по морю',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 3rd stage
        {
          type: 'stage',
          index: 20,
          sos: false,
          text: `<span class="stage">III ЭТАП «Морские узлы» <br> 10 - вопросов</span><img src="img/200.png">`,
          answers: []
        },
        // 18 question
        {
          type: 'dragDrop',
          index: 21,
          sos: false,
          text: `<div class="question-container">
                    <div class="text-container">Соотнесите фразеологические обороты с их значениями:<br>
                    <hr>
                    А. Разбираться в сложном сплетении причин, стечении обстоятельств.<br>
                    Б. Смело, решительно и сразу же разрешать какую-либо очень трудную задачу, 
                    находить посредством чего-либо выход из трудной ситуации)<br>
                    В. Постараться хорошенько запомнить что-либо.<br>
                    Г. Подчинить себе кого-либо, заставить быть покорным.</div>
                 </div>`,
          correct: [
            {
              id: 4,
              text: '«Распутывать узел»',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 1,
              text: '«Разрубать гордиев узел»',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 3,
              text: '«Завязать на память узелок»',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 2,
              text: '«Завязать в узел»',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
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
                  text: '«Разрубать гордиев узел»',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 2,
                  text: '«Завязать в узел»',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 3,
                  text: '«Завязать на память узелок»',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 4,
                  text: '«Распутывать узел»',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                }
              ]
            }
          ]
        },
        // 19 question
        {
          type: 'oneOutFour',
          index: 22,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-100">Продолжите выражение «Плавали – …!»:</div></div>`,
          answers: [
            {
              id: 1,
              text: 'сдюжим',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'сможем',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'видели',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'знаем',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 20 question
        {
          type: 'oneOutFour',
          index: 23,
          sos: false,
          text: `<div class="question-container--drag"><div class="drag-text-container">Бог морей  в древнеримской мифологии:</div>
                <div class="drag-question-grid">
                       <div class="drag-question-grid__label"><span>Марс</span></div>
                       <div class="drag-question-grid__label"><span>Нептун</span></div>
                       <div class="drag-question-grid__label"><span>Юпитер</span></div>
                       <div class="drag-question-grid__label"><span>Вулкан</span></div>
                       <div class="drag-question-grid__image"><img class="w-70" src="img/203-1.jpg"></div>
                       <div class="drag-question-grid__image"><img class="w-80" src="img/203-2.jpg"></div>
                       <div class="drag-question-grid__image"><img class="w-70" src="img/203-3.jpg"></div>
                       <div class="drag-question-grid__image"><img class="w-70" src="img/203-4.jpg"></div>
                    </div></div>`,
          answers: [
            {
              id: 1,
              text: 'Марс',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'Нептун',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'Юпитер',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'Вулкан',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 21 question
        {
          type: 'dragDrop',
          index: 24,
          sos: false,
          text: `<div class="question-container">
                    <div class="text-container">Собери поговорку</div>
                 </div>`,
          correct: [
            {
              id: 5,
              text: 'без',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 3,
              text: 'смелости',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 1,
              text: 'не',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 2,
              text: 'возьмешь',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 4,
              text: 'крепости',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            }
          ],
          answers: [
            {
              index: 1,
              items: [
                {
                  id: 1,
                  text: 'не',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 2,
                  text: 'возьмешь',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 3,
                  text: 'смелости',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 4,
                  text: 'крепости',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 5,
                  text: 'без',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                }
              ]
            }
          ]
        },
        // 22 question
        {
          type: 'dragDrop',
          index: 25,
          sos: false,
          text: `<div class="question-container">
                    <div class="text-container">Собери поговорку</div>
                 </div>`,
          correct: [
            {
              id: 5,
              text: 'русское',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 2,
              text: 'сердце',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 1,
              text: 'крепче',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 3,
              text: 'вражеской',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 4,
              text: 'брони',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            }
          ],
          answers: [
            {
              index: 1,
              items: [
                {
                  id: 1,
                  text: 'крепче',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 2,
                  text: 'сердце',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 3,
                  text: 'вражеской',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 4,
                  text: 'брони',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 5,
                  text: 'русское',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                }
              ]
            }
          ]
        },
        // 22 question
        {
          type: 'dragDrop',
          index: 26,
          sos: false,
          text: `<div class="question-container">
                    <div class="text-container">Собери поговорку</div>
                 </div>`,
          correct: [
            {
              id: 3,
              text: 'кто',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 7,
              text: 'моря',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 6,
              text: 'боится,',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 1,
              text: 'тому',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 4,
              text: 'в',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 5,
              text: 'луже',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 2,
              text: 'сидеть',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            }
          ],
          answers: [
            {
              index: 1,
              items: [
                {
                  id: 1,
                  text: 'тому',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 2,
                  text: 'сидеть',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 3,
                  text: 'кто',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 4,
                  text: 'в',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 5,
                  text: 'луже',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 6,
                  text: 'боится,',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 7,
                  text: 'моря',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                }
              ]
            }
          ]
        },
        // 23 question
        {
          type: 'dragDrop',
          index: 27,
          sos: false,
          text: `<div class="question-container">
                    <div class="text-container">Собери поговорку</div>
                 </div>`,
          correct: [
            {
              id: 4,
              text: 'человек',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 1,
              text: 'без',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 2,
              text: 'Родины,',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 3,
              text: 'что',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 7,
              text: 'соловей',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 5,
              text: 'без',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            },
            {
              id: 6,
              text: 'песни',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item--word': true
              }
            }
          ],
          answers: [
            {
              index: 1,
              items: [
                {
                  id: 1,
                  text: 'без',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 2,
                  text: 'Родины,',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 3,
                  text: 'что',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 4,
                  text: 'человек',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 5,
                  text: 'без',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 6,
                  text: 'песни',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                },
                {
                  id: 7,
                  text: 'соловей',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item--word': true
                  }
                }
              ]
            }
          ]
        },
        // 24 question
        {
          type: 'oneOutFour',
          index: 28,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-100">Какое море не относится к бассейну 
                Северного Ледовитого океана?</div></div>`,
          answers: [
            {
              id: 1,
              text: 'Баренцево',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'Карское',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'Лаптевых',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'Северное',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 25 question
        {
          type: 'dragDrop',
          index: 29,
          sos: false,
          text: `<div class="question-container--drag">
                    <div class="drag-text-container fs-2">Подберите название к определениям:
                    <hr>
                    A: ... - военное парусно-гребное судно с небольшим количеством пушек. Боле маневренное, 
                    чем другие суда 17 столетия. Может плыть в безветренную погоду. Именно ему приписывают 
                    такие нововведения, как таран и «система двойного весельного ряда».<br>
                    Б: ... — это крупногабаритный деревянный многопалубный парусник 16−18 столетия с довольно 
                    большим артиллерийским вооружением, который использовался в торговых и военных целях. 
                    Свою популярность галеоны получили как судна, перевозившие сокровища Испании и в битве 
                    Великой Армады, которая произошла в 1589 г.<br>
                    В: ... являлась любимым судном пиратов. Боевой силы вполне хватало для захвата 
                    торговых кораблей, а хорошая маневренность и быстроходность помогала уйти от погони. 
                    Если кто и мог преодолеть сложные места между рифами, то это только...<br>
                    Г: ... - боевое трехмачтовое судно с полным парусным оснащением и одной палубой для орудий. 
                    Это один из самых разнообразных по своим характеристикам типов парусников. Происхождение 
                    фрегаты начали от быстроходных и легких судов, применявшихся для плавания в проливе Ла-Манш 
                    примерно в конце 17 столетия.
                    </div>
                    <div class="drag-question-grid">
                       <div class="drag-question-grid__label"><span>Бригантина</span></div>
                       <div class="drag-question-grid__label"><span>Галеон</span></div>
                       <div class="drag-question-grid__label"><span>Фрегат</span></div>
                       <div class="drag-question-grid__label"><span>Галера</span></div>
                       <div class="drag-question-grid__image"><img src="img/206-1.jpg"></div>
                       <div class="drag-question-grid__image"><img src="img/206-2.jpg"></div>
                       <div class="drag-question-grid__image"><img src="img/206-3.jpg"></div>
                       <div class="drag-question-grid__image"><img src="img/206-4.jpg"></div>
                    </div>
                 </div>`,
          correct: [
            {
              id: 4,
              text: 'Галера',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 2,
              text: 'Галеон',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 1,
              text: 'Бригантина',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
              }
            },
            {
              id: 3,
              text: 'Фрегат',
              classes: {
                correct: true,
                incorrect: false,
                'drag-item': true
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
                  text: 'Бригантина',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 2,
                  text: 'Галеон',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 3,
                  text: 'Фрегат',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                },
                {
                  id: 4,
                  text: 'Галера',
                  classes: {
                    correct: false,
                    incorrect: false,
                    'drag-item': true
                  }
                }
              ]
            }
          ]
        },
        // 26 question
        {
          type: 'oneOutFour',
          index: 30,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-50">Что не использовалось 
                при общении кораблей друг с другом:</div>
                <div class="image-container w-50"><img src="img/207.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'семафорные флажки',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'азбука Морзе',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'сигнальные флаги',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'выстрел орудия',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 27 question
        {
          type: 'oneOutFour',
          index: 31,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-50">Нижняя горизонтальная 
                балка или балки, проходящие посередине днища судна от носовой до кормовой 
                его оконечности, и служащие для обеспечения прочности корпуса судна и обеспечения 
                остойчивости называется:</div>
                <div class="image-container w-50"><img src="img/208.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'клюв',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'кий',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'киль',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'куль',
              correct: true,
              classes: {
                correct: false
              }
            }
          ]
        },
        // 28 question
        {
          type: 'oneOutFour',
          index: 32,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-100">Скорость корабля измеряется</div>
                </div>`,
          answers: [
            {
              id: 1,
              text: 'в углах',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'в устах',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'в узлах',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: 'в узелках',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 28 question
        {
          type: 'oneOutFour',
          index: 32,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-100">Рубка на корабле – это…</div>
                </div>`,
          answers: [
            {
              id: 1,
              text: 'жилое помещение для команды корабля.',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'название снасти',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'способ ведения боя',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: 'место нахождения капитана',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 4th stage
        {
          type: 'stage',
          index: 33,
          sos: false,
          text: `<span class="stage">ФИНАЛ «Попутного ветра!» <br> 3 - вопроса</span>`,
          answers: []
        },
        // 29 question
        {
          type: 'oneOutFour',
          index: 34,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-50">Участвовал в Крымской войне, 
                оборонял Севастополь, командовал батареей на 4-м бастионе:</div>
                <div class="image-container w-50"><img src="img/301.png"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'Л.Н. Толстой',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 2,
              text: 'А.Н. Толстой',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'А.А. Фет',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'А.Н. Островский',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 29 question
        {
          type: 'oneOutFour',
          index: 35,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-50">Звуковой сигнал 
                маяка применялся:</div>
                <div class="image-container w-50"><img src="img/301.png"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'постоянно',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'периодически с равным интервалом по времени',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 3,
              text: 'при нулевой видимости в тумане',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 4,
              text: '3 раза в сутки (утром, днем, вечером)',
              correct: false,
              classes: {
                incorrect: false
              }
            }
          ]
        },
        // 30 question
        {
          type: 'oneOutFour',
          index: 36,
          sos: false,
          text: `<div class="question-container"><div class="text-container w-50">3. Какое значение 
                имеет выражение «Семь футов под килем»? </div>
                <div class="image-container w-50"><img src="img/303.jpg"></div></div>`,
          answers: [
            {
              id: 1,
              text: 'прогноз погоды для уходящих в море судов',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 2,
              text: 'пожелание доброго пути судну или человеку, уходящему в море',
              correct: true,
              classes: {
                correct: false
              }
            },
            {
              id: 3,
              text: 'мера длины киля судна',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            {
              id: 4,
              text: 'ничего: искусственно созданное выражение',
              correct: false,
              classes: {
                incorrect: false
              }
            },
            // end video
            {
              type: 'stage',
              index: 37,
              sos: false,
              text: `<video width="400" height="300" controls="controls">
                       <source src="video/final.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                    </video>`,
              answers: []
            },
          ]
        }
      ],
      currentQuestion: 28,
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
    },
    isSosButtonVisible() {
      return !_.isNil(this.questions[this.currentQuestion].sos) && this.questions[this.currentQuestion].sos
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
      this.showDraggableAnswer = false
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
    deniedHandle() {
      window.close()
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
      stopAudio('audioSos')
    },
    sosButtonClickHandle() {
      // playAudio('audioSos')
      this.preventAnswers = true
      this.nextVisible = true
      this.viewerContent = this.questions[this.currentQuestion].sosText
      this.classes.viewer.slide = true
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
