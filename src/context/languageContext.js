import React from "react"
export const LanguageContext = React.createContext();

export const translation = {
  en: {
    menubar: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      portfolio: "Work",
      contact: "Contact",
    },
    social: {
      vk: "VK",
      fb: "Facebook",
      gh: "Github",
    },
    portfolio: {
      mesto: "Project Mesto",
      movie: "Project Movie",
      clerksy: "Project Clerksy",
      russianTravel: "Project Russian Travel",
      listDesign: "Design List",
    },
    title: "My Portfolio",
    greete: "Hello",
    me: ", I'm",
    name: "Alexey Volny",
    profession: "I'm a Front End Web Developer",
    about: "I like making websites. Here the code is not just letters and numbers, it comes to life. The changes are visible to the naked eye and it inspires me. My hobby is basketball. Basketball is a team game where each person must participate in order to win.",
    skillsInfo: "I mastered technologies and programs",
    work: "Recent Work",
    portfolioInfo: "Projects made by me at the moment",
  },
  ru: {
    menubar: {
      home: "Домой",
      about: "Обо мне",
      skills: "Навыки",
      portfolio: "Работы",
      contact: "Контакты",
    },
    social: {
      vk: "Вконтакте",
      fb: "Фейсбук",
      gh: "Гитхаб",
    },
    portfolio: {
      mesto: "Проект Mesto",
      movie: " Проект Movie",
      clerksy: "Проект Clerksy",
      russianTravel: "Проект Russian Travel",
      listDesign: "Дизайнерский вариант списка",
    },
    title: "Мое портфолио",
    greete: "Привет",
    me: ", меня зовут",
    name: "Алексей Вольный",
    profession: "Я фронтэнд разработчик",
    about: "Мне нравится делать сайты. Здесь код не просто буквы и цифры, он оживает. Изменения видны невооруженным глазом и меня это вдохновляет. Моё хобби это баскетбол. Баскетбол - командная игра, где каждый человек должен участвовать, чтобы победить.",
    skillsInfo: "Я освоил технологии и программы",
    work: "Недавние работы",
    portfolioInfo: "Проекты сделанный мной на текущий момент",
  }
}