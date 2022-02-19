import React from "react"
export const LanguageContext = React.createContext();

export const translation = {
  en: {
    menubar: {
      home: "Home",
      about: "About me",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    social: {
      vk: "VK",
      fb: "Facebook",
      gh: "Github",
    },
    title: "My Portfolio",
    greete: "Hello",
    me: ", I'm",
    name: "Alexey Volny",
    profession: "I'm a Front End Web Developer",
    about: "I like making websites. Here the code is not just letters and numbers, it comes to life. The changes are visible to the naked eye and it inspires me. My hobby is basketball. Basketball is a team game where each person must participate in order to win.",
    skillsInfo: "I work with languages and programmes like",
    portfolioHeader: "Portfolio",
    mestoLanding: "Landing site for travel photographers - Concept",
    contactsParagraph: "Want to know more or just chat? You are welcome!"
  },
  ru: {
    menubar: {
      home: "Домой",
      about: "Обо мне",
      skills: "Навыки",
      portfolio: "Портфолио",
      contact: "Контакты",
    },
    social: {
      vk: "Вконтакте",
      fb: "Фейсбук",
      gh: "Гитхаб",
    },
    title: "Мое портфолио",
    greete: "Привет",
    me: ", меня зовут",
    name: "Алексей Вольный",
    profession: "Я фронтэнд разработчик",
    about: "Мне нравится делать сайты. Здесь код не просто буквы и цифры, он оживает. Изменения видны невооруженным глазом и меня это вдохновляет. Моё хобби это баскетбол. Баскетбол - командная игра, где каждый человек должен участвовать, чтобы победить.",
    skillsInfo: "Я знаком со следующими программами и языками",
    portfolioHeader: "Портфолио",
    mestoLanding: "Пример лэндинга для публикации фотографии",
    contactsParagraph: "Хотите узнать больше или просто пообщаться со мной? Добро пожаловать!"
  }
}