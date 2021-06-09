import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
   state: {
      projects: [
         {
            id: 1,
            title: 'eCommerce Website',
            description: [
               'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam delectus, ipsa, nesciunt fugit fugiat amet expedita odit minus officia.',
            ],
            technologies: [
               'HTML/CSS',
               'JS',
               'Vue',
               'TailwindCSS',
               'PHP',
               'Laravel',
               'MySQL',
            ],
            demoLink: 'https://www.google.com',
            githubLink: 'https://github.com/ramirezraph',
            imageLinks: [
               'classroom/login.png',
               'classroom/classes.png',
               'classroom/class.png',
            ],
         },
         {
            id: 2,
            title: 'Online Classroom',
            description: [
               'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam delectus, ipsa, nesciunt fugit fugiat amet expedita odit minus officia eveniet ullam dignissimos aut dolore velit.',
            ],
            technologies: [
               'HTML/CSS',
               'JS',
               'Vue',
               'Vuetify',
               'TypeScript',
               'Google Firebase',
            ],
            demoLink: 'https://www.google.com',
            githubLink: 'https://github.com/ramirezraph',
            imageLinks: [
               'classroom/class.png',
               'classroom/login.png',
               'classroom/login.png',
               'classroom/classes.png',
            ],
         },
         {
            id: 3,
            title: 'Social Media Website',
            description: [
               'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam delectus, ipsa, nesciunt fugit fugiat amet expedita odit minus officia eveniet ullam dignissimos.',
            ],
            technologies: [
               'HTML/CSS',
               'JS',
               'Vue',
               'TailwindCSS',
               'PHP',
               'Laravel',
               'MySQL',
            ],
            demoLink: 'https://www.google.com',
            githubLink: 'https://github.com/ramirezraph',
            imageLinks: [
               'classroom/classes.png',
               'classroom/login.png',
               'classroom/class.png',
            ],
         },
      ],
   },
   getters: {
      projects(state) {
         return state.projects;
      },
   },
   mutations: {},
   actions: {},
});
