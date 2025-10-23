import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as r}from"./index-ChEI-nsM.js";import{M as l}from"./index-IO9T2G5y.js";import"./index-DRjF_FHU.js";import"./iframe-GcfYHmGm.js";import"./index-Bx0Ph3cE.js";import"./index-FTTXbSiM.js";import"./index-DrFu-skq.js";function e(i){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{title:"Вводный урок/Общее руководство",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"}}),`
`,n.jsx(s.h1,{id:"-руководство-по-тестированию-сценариев",children:"📋 Руководство по тестированию сценариев"}),`
`,n.jsx(s.h2,{id:"-общие-принципы",children:"🎯 Общие принципы"}),`
`,n.jsx(s.p,{children:"Каждая секция сценария должна быть протестирована на:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Функциональность"})," - все интерактивные элементы работают корректно"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Логика блокировок"}),' - пользователь не может "сломать" сценарий']}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"UI/UX"})," - корректное отображение, анимации и переходы"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Связность"})," - плавные переходы между событиями без зависаний"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Состояния"})," - правильные состояния компонентов и Смартика"]}),`
`]}),`
`,n.jsx(s.h2,{id:"-workflow-тестирования",children:"🧪 Workflow тестирования"}),`
`,n.jsx(s.h3,{id:"1-подготовка-к-тестированию",children:"1. Подготовка к тестированию"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Выберите историю"})," - откройте нужную секцию в Storybook"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Полноэкранный режим"})," - переключитесь в fullscreen для лучшего UX"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Откройте DevTools"})," (F12) - мониторинг ошибок и производительности"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Включите карту сценария"})," - нажмите 🧭 для открытия графа"]}),`
`]}),`
`,n.jsx(s.h3,{id:"2-использование-встроенных-инструментов",children:"2. Использование встроенных инструментов"}),`
`,n.jsx(s.h4,{id:"-интерактивная-карта-сценария",children:"🧭 Интерактивная карта сценария"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Визуализация потока"})," - видите все события и переходы"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Легенда типов"})," - понимание разных видов событий"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Навигация"})," - отслеживание текущего положения в сценарии"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Связи"})," - проверка корректности next/triggers соединений"]}),`
`]}),`
`,n.jsx(s.h4,{id:"-автоматическая-валидация",children:"🔍 Автоматическая валидация"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"При загрузке"})," - сценарий автоматически проверяется на корректность"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Консоль браузера"})," - отображение ошибок валидации с деталями"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Предупреждения"})," - потенциальные проблемы и рекомендации"]}),`
`]}),`
`,n.jsx(s.h4,{id:"-изолированные-блоки",children:"📦 Изолированные блоки"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Независимое тестирование"})," - каждая секция тестируется отдельно"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Информативные переходы"})," - показ внешних ссылок в виде сообщений"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Отсутствие зависимостей"})," - нет нужды в полном прохождении"]}),`
`]}),`
`,n.jsx(s.h4,{id:"-логирование-сценариев",children:"📋 Логирование сценариев"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"🎬 Scenario Player started"})," - запуск с информацией о количестве событий"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"🔧 Scenario player initialized"})," - инициализация плеера с начальным событием"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"🎬 Starting scenario from"})," - начало выполнения конкретного события"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"❌ No event found"})," - ошибки при переходах к несуществующим событиям"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"🔍 Runtime scenario validation"})," - результаты автоматической валидации"]}),`
`]}),`
`,n.jsxs(s.p,{children:["Логи находятся в Console браузера, группируются для удобства просмотра. Логирование можно отключить через ",n.jsx(s.code,{children:"setLoggingEnabled(false)"})," в консоли."]}),`
`,n.jsx(s.h3,{id:"3-пошаговое-тестирование",children:"3. Пошаговое тестирование"}),`
`,n.jsx(s.h4,{id:"основная-история-без-номера",children:"Основная история (без номера)"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Полный сценарий"})," - от начала до логического завершения"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Общий флоу"})," - проверка связности всего пути"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Критические точки"})," - особое внимание интерактивным элементам"]}),`
`]}),`
`,n.jsx(s.h4,{id:"частичные-истории-с-номерами-1-2-3",children:"Частичные истории (с номерами: 1., 2., 3...)"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Фокусное тестирование"})," - детальная проверка конкретных блоков"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Начало с середины"})," - тестирование без прохождения всего пути"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Специфические сценарии"})," - проверка edge cases и альтернативных путей"]}),`
`]}),`
`,n.jsx(s.h3,{id:"4-типы-проверок-по-компонентам",children:"4. Типы проверок по компонентам"}),`
`,n.jsx(s.h4,{id:"-интерактивные-элементы-cardselect-memocards",children:"🎯 Интерактивные элементы (CardSelect, MemoCards)"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`Начальное состояние:
✓ Все действия заблокированы (blockFlipping: true, blockActivating: true)
✓ Визуальные индикаторы блокировки корректны

После инструкции:
✓ Разблокируется одно действие (например, blockFlipping: false)
✓ Пользователь может выполнить разрешенное действие

После выполнения:
✓ Выполненное действие блокируется
✓ Разблокируется следующее действие
✓ Корректный переход к следующему событию

Завершение:
✓ Все действия снова заблокированы
✓ Переход к следующему блоку сценария
`})}),`
`,n.jsx(s.h4,{id:"-состояния-смартика",children:"🤖 Состояния Смартика"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`✓ interest - в моменты ожидания и вопросов
✓ talking - во время диалогов и объяснений
✓ training - в игровых/обучающих блоках
✓ happy - при достижениях и успехах
✓ Плавные переходы между состояниями
`})}),`
`,n.jsx(s.h4,{id:"-переходы-между-событиями",children:"🔄 Переходы между событиями"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`✓ next - автоматические переходы работают
✓ triggers - интерактивные переходы корректны
✓ Нет зависших состояний
✓ Все события достижимы
`})}),`
`,n.jsx(s.h2,{id:"-типичные-проблемы-и-их-диагностика",children:"🚨 Типичные проблемы и их диагностика"}),`
`,n.jsx(s.h3,{id:"ошибки-в-консоли-javascript",children:"Ошибки в консоли JavaScript"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`❌ Cannot read property 'X' of undefined
   → Проблема с данными или состоянием компонента

❌ Event 'event-id' not found
   → Ошибка в сценарии, неверная ссылка next/trigger

❌ Component not mounted
   → Проблема с жизненным циклом React компонента

❌ Validation failed: [details]
   → Ошибка структуры сценария, проверить связи
`})}),`
`,n.jsx(s.h3,{id:"проблемы-пользовательского-интерфейса",children:"Проблемы пользовательского интерфейса"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`❌ Элементы не отображаются
   → Проверить CSS, условия рендеринга

❌ Анимации не работают/тормозят
   → Проверить производительность, CSS transforms

❌ Неправильные цвета/стили
   → Проверить CSS classes, Tailwind конфигурацию

❌ Адаптивность нарушена
   → Тестировать на разных размерах экрана
`})}),`
`,n.jsx(s.h3,{id:"интерактивность",children:"Интерактивность"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`❌ Кнопки не реагируют
   → Проверить event handlers, блокировки

❌ Неправильная обработка ввода
   → Проверить состояние компонентов, валидацию

❌ Зависания интерфейса
   → Проверить бесконечные циклы, производительность
`})}),`
`,n.jsx(s.h2,{id:"-процедура-отчетности",children:"📊 Процедура отчетности"}),`
`,n.jsx(s.h3,{id:"во-время-тестирования",children:"Во время тестирования"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Реалтайм заметки"})," - записывайте проблемы по мере обнаружения"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Скриншоты/видео"})," - фиксируйте визуальные проблемы"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Шаги воспроизведения"})," - детальное описание как повторить баг"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Контекст событий"})," - на каком событии произошла проблема"]}),`
`]}),`
`,n.jsx(s.h3,{id:"после-завершения-тестирования-секции",children:"После завершения тестирования секции"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Общий статус"})," - ✅ прошла / ❌ не прошла / ⚠️ с замечаниями"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Список найденных проблем"})," с приоритетом (критический, высокий, средний, низкий)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Рекомендации"})," по улучшению UX или исправлению"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Положительные моменты"})," - что работает особенно хорошо"]}),`
`]}),`
`,n.jsx(s.h2,{id:"️-инструменты-разработчика",children:"🛠️ Инструменты разработчика"}),`
`,n.jsx(s.h3,{id:"chrome-devtools",children:"Chrome DevTools"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`Console - ошибки JavaScript и логи валидации
Network - загрузка ресурсов и производительность
Performance - профилирование анимаций и рендеринга
Elements - инспекция DOM и CSS
`})}),`
`,n.jsx(s.h3,{id:"react-devtools",children:"React DevTools"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`Components - структура и пропсы компонентов
Profiler - производительность React рендеринга
`})}),`
`,n.jsx(s.h3,{id:"storybook-возможности",children:"Storybook возможности"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`Controls - настройка параметров историй
Actions - логирование событий компонентов
Viewport - тестирование адаптивности
`})}),`
`,n.jsx(s.h2,{id:"-критерии-качества",children:"🎯 Критерии качества"}),`
`,n.jsx(s.h3,{id:"-секция-считается-готовой-к-релизу-если",children:"✅ Секция считается готовой к релизу если:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Все пункты чек-листа выполнены без критических замечаний"}),`
`,n.jsx(s.li,{children:"Нет ошибок JavaScript в консоли"}),`
`,n.jsx(s.li,{children:"Флоу проходится от начала до конца без зависаний или багов"}),`
`,n.jsx(s.li,{children:"UI корректно отображается на основных размерах экрана (desktop, tablet)"}),`
`,n.jsx(s.li,{children:"Интерактивные элементы работают согласно задумке"}),`
`,n.jsx(s.li,{children:"Переходы между событиями происходят плавно"}),`
`,n.jsx(s.li,{children:"Автоматическая валидация проходит без ошибок"}),`
`]}),`
`,n.jsx(s.h3,{id:"-секция-требует-доработки-если",children:"❌ Секция требует доработки если:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Любой интерактивный элемент полностью неработоспособен"}),`
`,n.jsx(s.li,{children:"Есть критические JavaScript ошибки, ломающие функциональность"}),`
`,n.jsx(s.li,{children:"Флоу прерывается или зависает в критических точках"}),`
`,n.jsx(s.li,{children:"Серьезные проблемы отображения на основных устройствах"}),`
`,n.jsx(s.li,{children:"Валидация выявляет структурные ошибки сценария"}),`
`]}),`
`,n.jsx(s.h3,{id:"️-секция-может-быть-выпущена-с-оговорками-если",children:"⚠️ Секция может быть выпущена с оговорками если:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Есть незначительные визуальные недочеты"}),`
`,n.jsx(s.li,{children:"Минорные проблемы анимаций, не влияющие на функциональность"}),`
`,n.jsx(s.li,{children:"Редкие edge cases, не затрагивающие основной пользовательский флоу"}),`
`,n.jsx(s.li,{children:"Предупреждения валидатора без критического влияния"}),`
`]})]})}function g(i={}){const{wrapper:s}={...r(),...i.components};return s?n.jsx(s,{...i,children:n.jsx(e,{...i})}):e(i)}export{g as default};
