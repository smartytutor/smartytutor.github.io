import{j as n}from"./jsx-runtime-DR9Q75dM.js";import{useMDXComponents as l}from"./index-ChEI-nsM.js";import{M as e}from"./index-DD-lwvka.js";import"./index-DRjF_FHU.js";import"./iframe-BplEBOLz.js";import"./index-CmHj60O0.js";import"./index-CzpEL4_8.js";import"./index-DrFu-skq.js";function r(s){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...l(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"Вводный урок/Вступление/Руководство",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs"}}),`
`,n.jsx(i.h1,{id:"-тестирование-секции-вступление",children:'📋 Тестирование секции "Вступление"'}),`
`,n.jsx(i.h2,{id:"-цель-тестирования",children:"🎯 Цель тестирования"}),`
`,n.jsx(i.p,{children:'Секция "Вступление" - это первое знакомство пользователя с SmartyTutor. Критически важно проверить:'}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Первое впечатление"})," - пользователь понимает концепцию приложения"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Интерактивность"})," - все элементы реагируют корректно и интуитивно"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Обучение"})," - пользователь изучает основные механики (выбор ответов, работа с картами)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Плавность переходов"})," - нет зависаний или неожиданных скачков"]}),`
`]}),`
`,n.jsx(i.h2,{id:"-доступные-истории-для-тестирования",children:"🧪 Доступные истории для тестирования"}),`
`,n.jsx(i.h3,{id:"-основная-история-вступление",children:'📖 Основная история: "Вступление"'}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Полный сценарий"})," от приветствия до перехода к тренажёру"]}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Используйте для общей проверки связности и UX"}),`
`,n.jsx(i.li,{children:"Проверки критического пути пользователя"}),`
`,n.jsx(i.li,{children:"Общей оценки производительности"}),`
`]}),`
`,n.jsx(i.h3,{id:"-частичные-истории-для-детального-тестирования",children:"🎯 Частичные истории для детального тестирования:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"1. Выбор игры"})," - фокус на интерактивной механике с картами"]}),`
`]}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:["💡 ",n.jsx(i.strong,{children:"Совет"}),": начните с основной истории для понимания контекста, затем используйте частичные для глубокого анализа конкретных блоков"]}),`
`]}),`
`,n.jsx(i.h2,{id:"-подробный-чек-лист",children:"📝 Подробный чек-лист"}),`
`,n.jsx(i.h3,{id:"1--инициализация-и-ui",children:"1. 🚀 Инициализация и UI"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Прогресс-бар отображается с 4-мя секциями
✓ Активная секция "intro" подсвечена корректно
✓ Смартик появляется в состоянии "interest"
✓ Фон и общее оформление загружается без ошибок
✓ Нет ошибок JavaScript в консоли при загрузке
`})}),`
`,n.jsx(i.h3,{id:"2--блок-приветствия",children:"2. 👋 Блок приветствия"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Появляется приветственное сообщение от Смартика
✓ Смартик корректно анимируется (реагирует на сообщения)
✓ Переход к следующему этапу происходит автоматически через ~3-4 секунды
✓ Тексты отображаются без ошибок, хорошо читаются
✓ Состояние Смартика соответствует контексту (interest → talking)
`})}),`
`,n.jsx(i.h3,{id:"3--блок-а-ты-знаешь-математику",children:'3. ❓ Блок "А ты знаешь математику?"'}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Появляется вопрос о важности математики
✓ Отображаются 3 варианта ответа в кнопках:
  • "Конечно, нужна"
  • "Я думаю, что нет"
  • "Не знаю..."
✓ Все варианты кликабельны и реагируют на hover
✓ При клике на любой вариант происходит переход
✓ Выбранный вариант визуально выделяется перед переходом
✓ Нет возможности кликнуть несколько вариантов одновременно
`})}),`
`,n.jsx(i.h3,{id:"4--приглашение-в-путешествие",children:"4. 🧭 Приглашение в путешествие"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Мотивационное сообщение о математическом путешествии
✓ Смартик в подходящем состоянии для призыва к действию
✓ Подготовка пользователя к интерактивному блоку
✓ Плавный переход к следующему этапу
`})}),`
`,n.jsx(i.h3,{id:"5--выбор-игры---критически-важный-блок",children:"5. 🎲 Выбор игры - критически важный блок!"}),`
`,n.jsx(i.h4,{id:"начальное-состояние-карт",children:"Начальное состояние карт:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Отображаются 3 карты с драконом
✓ Все карты перевернуты рубашкой вверх
✓ Все действия заблокированы (blockFlipping: true, blockActivating: true)
✓ Визуальные индикаторы блокировки работают (курсор, затемнение)
✓ Карты не реагируют на клики в заблокированном состоянии
`})}),`
`,n.jsx(i.h4,{id:"после-инструкции-можно-переворачивать",children:'После инструкции "можно переворачивать":'}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Разблокируется только переворачивание (blockFlipping: false)
✓ Активация остается заблокированной (blockActivating: true)
✓ Карты теперь реагируют на hover при наведении
✓ При клике карта переворачивается, показывая дракона
✓ После переворота карта переходит в состояние "открыта"
`})}),`
`,n.jsx(i.h4,{id:"после-переворота-карты",children:"После переворота карты:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Переворачивание блокируется снова (blockFlipping: true)
✓ Активация разблокируется (blockActivating: false)
✓ Только открытые карты можно активировать
✓ Перевернутые карты остаются неактивными
✓ Визуальная обратная связь соответствует доступным действиям
`})}),`
`,n.jsx(i.h4,{id:"активация-карты",children:"Активация карты:"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ При клике на открытую карту она активируется
✓ Все действия снова блокируются
✓ Происходит переход к следующему блоку сценария
✓ Нет возможности активировать несколько карт
`})}),`
`,n.jsx(i.h3,{id:"6--переход-к-тренажёру",children:"6. 🎨 Переход к тренажёру"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ Фон плавно меняется на изображение с мемокартами
✓ Прозрачность фона устанавливается корректно (~0.7)
✓ Элементы интерфейса остаются читаемыми на новом фоне
✓ Смартик переходит в состояние "training"
✓ Появляется сообщение о переходе к следующей секции
`})}),`
`,n.jsx(i.h3,{id:"7--изолированный-режим-технические-проверки",children:"7. 🔗 Изолированный режим (технические проверки)"}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{children:`✓ В конце отображается сообщение "Переход на внешнее событие: trainer1-init"
✓ Это нормальное поведение для тестового режима
✓ В реальном приложении будет плавный переход к Тренажёру 1
✓ Кнопка "Далее" или аналогичная НЕ появляется (это корректно)
`})}),`
`,n.jsx(i.h2,{id:"-использование-карты-сценария",children:"🔍 Использование карты сценария"}),`
`,n.jsx(i.p,{children:"Откройте встроенную карту (🧭) для:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Визуального понимания"})," текущего положения в сценарии"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Проверки связей"})," между событиями (next, triggers)"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Понимания логики"})," блокировок и переходов"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Отладки"})," - если что-то идет не так, карта поможет понять где"]}),`
`]}),`
`,n.jsx(i.h2,{id:"️-особенности-и-частые-заблуждения",children:"⚠️ Особенности и частые заблуждения"}),`
`,n.jsx(i.h3,{id:"-нормальное-поведение-не-баги",children:"✅ Нормальное поведение (НЕ баги):"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Сообщения о внешних переходах"})," в конце - это информация для QA"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Автоматические переходы"})," через несколько секунд - нормально для диалогов"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Блокировка действий"}),' до инструкций - защита от "поломки" флоу']}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Одна активная карта"})," - пользователь должен выбрать только одну"]}),`
`]}),`
`,n.jsx(i.h3,{id:"-проблемы-требующие-внимания",children:"❌ Проблемы, требующие внимания:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Карты реагируют когда заблокированы"})," - нарушение логики блокировок"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Можно активировать перевернутую карту"})," - нарушение механики"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Переход не происходит после активации"})," - сломанные связи сценария"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Ошибки в консоли"})," любого типа - требуют исследования"]}),`
`]}),`
`,n.jsx(i.h2,{id:"-тестирование-интерактивности",children:"🎮 Тестирование интерактивности"}),`
`,n.jsx(i.h3,{id:"проверка-механики-cardselect",children:"Проверка механики CardSelect:"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Проверьте начальное состояние"})," - все заблокировано"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Дождитесь инструкции"})," - должно разблокироваться переворачивание"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Переверните карту"})," - только одну, проверьте блокировку после переворота"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Активируйте карту"})," - должен произойти переход"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Попробуйте edge cases"})," - клики в заблокированном состоянии, двойные клики"]}),`
`]}),`
`,n.jsx(i.h3,{id:"проверка-состояний-смартика",children:"Проверка состояний Смартика:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"interest"})," - в начале, при ожидании ответа пользователя"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"talking"})," - во время диалогов и объяснений"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"training"})," - в конце, при подготовке к тренировке"]}),`
`]}),`
`,n.jsx(i.h2,{id:"-критерии-успешного-прохождения",children:"📊 Критерии успешного прохождения"}),`
`,n.jsx(i.h3,{id:"-тест-пройден-успешно-если",children:"✅ Тест пройден успешно если:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Все пункты чек-листа выполнены без критических замечаний"}),`
`,n.jsx(i.li,{children:"Флоу проходится от начала до конца без зависаний"}),`
`,n.jsx(i.li,{children:"Интерактивные элементы работают согласно задумке"}),`
`,n.jsx(i.li,{children:"Нет ошибок JavaScript в консоли браузера"}),`
`,n.jsx(i.li,{children:"UI корректно отображается и читается"}),`
`,n.jsx(i.li,{children:"Автоматическая валидация сценария проходит без ошибок"}),`
`]}),`
`,n.jsx(i.h3,{id:"️-тест-пройден-с-замечаниями-если",children:"⚠️ Тест пройден с замечаниями если:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Есть незначительные визуальные недочеты"}),`
`,n.jsx(i.li,{children:"Минорные проблемы анимаций, не влияющие на функциональность"}),`
`,n.jsx(i.li,{children:"Мелкие UX улучшения, не критичные для релиза"}),`
`]}),`
`,n.jsx(i.h3,{id:"-тест-не-пройден-если",children:"❌ Тест не пройден если:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Любой интерактивный элемент полностью неработоспособен"}),`
`,n.jsx(i.li,{children:"Есть критические JavaScript ошибки"}),`
`,n.jsx(i.li,{children:"Флоу прерывается или зависает в важных точках"}),`
`,n.jsx(i.li,{children:"Серьезные проблемы с отображением интерфейса"}),`
`,n.jsx(i.li,{children:"Логика блокировок работает неправильно"}),`
`]}),`
`,n.jsx(i.h2,{id:"-рекомендуемые-скриншоты-для-отчета",children:"📸 Рекомендуемые скриншоты для отчета"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Начальное состояние"})," - прогресс-бар и приветствие"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Блок выбора ответа"})," - варианты ответов на вопрос о математике"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Карты в заблокированном состоянии"})," - начальное состояние карт"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Карты можно переворачивать"})," - состояние после инструкции"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Открытая карта"})," - результат переворота, готова к активации"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Измененный фон"})," - финальное состояние с фоном мемокарт"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Любые найденные проблемы"})," - скриншоты багов с контекстом"]}),`
`]})]})}function p(s={}){const{wrapper:i}={...l(),...s.components};return i?n.jsx(i,{...s,children:n.jsx(r,{...s})}):r(s)}export{p as default};
