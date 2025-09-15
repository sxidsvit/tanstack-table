const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];

const DATA = [
  {
    task: "Добавить новую функцию",
    status: STATUS_ON_DECK,
    due: new Date("2023/10/15"),
    notes: "Это заметка",
  },
  {
    task: "Написать интеграционные тесты",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Использовать Jest",
  },
  {
    task: "Добавить интеграцию с Instagram",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "Нет заметок",
  },
  {
    task: "Очистить базу данных",
    status: null,
    due: new Date("2023/02/15"),
    notes: "Удалить старые данные",
  },
  {
    task: "Переработать API-эндпоинты",
    status: STATUS_TESTING,
    due: null,
    notes: "Нет заметок",
  },
  {
    task: "Добавить документацию к API",
    status: null,
    due: new Date("2023/09/12"),
    notes: "Добавить JSDoc ко всем эндпоинтам",
  },
  {
    task: "Обновить пакеты NPM",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Обновить React и Chakra UI",
  },
  {
    task: "Оптимизировать запросы к базе данных",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Ускорить медленные запросы",
  },
  {
    task: "Реализовать аутентификацию пользователей",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/08"),
    notes: "Использовать OAuth2 и JWT",
  },
  {
    task: "Создать макеты пользовательского интерфейса",
    status: null,
    due: new Date("2023/09/30"),
    notes: "Разработать макеты UI",
  },
  {
    task: "Исправить проблемы кроссбраузерной совместимости",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Устранить проблемы с браузерами",
  },
  {
    task: "Провести аудит безопасности",
    status: null,
    due: new Date("2023/10/22"),
    notes: "Аудит безопасности",
  },
  {
    task: "Создать обучающий гид для пользователей",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/15"),
    notes: "Руководство по адаптации пользователей",
  },
  {
    task: "Оптимизировать производительность фронтенда",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Улучшить производительность",
  },
  {
    task: "Провести ревью кода",
    status: null,
    due: new Date("2023/10/05"),
    notes: "Организовать встречу по ревью кода",
  },
  {
    task: "Внедрить непрерывную интеграцию",
    status: STATUS_ON_DECK,
    due: new Date("2023/11/01"),
    notes: "Настроить CI/CD пайплайны",
  },
  {
    task: "Перейти на облачный хостинг",
    status: STATUS_DEPLOYED,
    due: null,
    notes: "Миграция на облако",
  },
  {
    task: "Создать опрос для обратной связи пользователей",
    status: null,
    due: new Date("2023/09/25"),
    notes: "Опрос для обратной связи",
  },
  {
    task: "Обновить пользовательскую документацию",
    status: STATUS_TESTING,
    due: null,
    notes: "Переработать документацию",
  },
  {
    task: "Исправить баги и провести QA-тестирование",
    status: null,
    due: new Date("2023/10/10"),
    notes: "Устранить баги и провести QA",
  },
  {
    task: "Реализовать поддержку мобильного приложения",
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: "Добавить поддержку мобильных устройств",
  },
  {
    task: "Улучшить систему прав пользователей",
    status: null,
    due: new Date("2023/09/18"),
    notes: "Усовершенствовать систему разрешений",
  },
];


export default DATA;
