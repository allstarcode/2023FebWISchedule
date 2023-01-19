import type { Schedule } from '../index';

export const allData: Schedule = [
  {
    daynum: '1',
    title: 'February 4th',
    activities: [
      {
        name: 'Welcome',
        time: '10:00AM - 10:15AM',
        duration: '15',
        actType: 'coreskill',
        links: [],
      },
      {
        name: 'Setup',
        time: '10:15AM - 10:30AM',
        duration: '15',
        actType: 'coreskill',
        links: [{ displayText: 'p5 Editor', linkURL: 'https://editor.p5js.org/' }],
      },
      {
        name: 'Intro to p5',
        time: '10:30AM - 11:15AM',
        duration: '45',
        actType: 'lecture',
        links: [
          {
            displayText: 'Presentation',
            linkURL:
              'https://docs.google.com/presentation/d/1hhmCZ-GQFufzAgBw6r3Y3dVoUC3MQvikS4IL6bl32U8/edit?usp=sharing',
          },
          {
            displayText: 'Code Along',
            linkURL:
              'https://docs.google.com/document/d/1D83VUnUzH-xmEnnSUsdFvAlVyv-5JTbFvCd8jaFUkL8/edit?usp=sharing',
          },
        ],
      },
      { name: 'BREAK', time: '11:15AM - 11:30AM', duration: '15', actType: 'misc', links: [] },
      {
        name: 'p5.js',
        time: '11:30AM - 12:00PM',
        duration: '30',
        actType: 'codealong',
        links: [
          {
            displayText: 'Project',
            linkURL:
              'https://docs.google.com/document/d/10CEWxBKrUvDpekjZo6iULWwbUEAOBGZtOrxKlcd97K4/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Draw Loop + Mouse Events',
        time: '12:00PM - 01:00PM',
        duration: '60',
        actType: 'lecture',
        links: [
          {
            displayText: 'Presentation',
            linkURL:
              'https://docs.google.com/presentation/d/1kygu2KuWKl2kquGf2UdbzzIUreH3jsBEK2Yq_ULoABA/edit?usp=sharing',
          },
          {
            displayText: 'Code Along',
            linkURL:
              'https://docs.google.com/document/d/1uZWuTYQnJBXUhqxb55HAjQg32BkCEGSF3VvAOLuNcNM/edit?usp=sharing',
          },
        ],
      },
    ],
  },
  {
    daynum: '2',
    title: 'February 5th',
    activities: [
      {
        name: 'Team Building',
        time: '10:00AM - 10:30AM',
        duration: '30',
        actType: 'teambuilding',
        links: [],
      },
      {
        name: 'Intro to p5',
        time: '10:30AM - 11:00AM',
        duration: '30',
        actType: 'lecture',
        links: [
          {
            displayText: 'Code Along',
            linkURL:
              'https://docs.google.com/document/d/1dUvaoKUcgvcfmA7SiHyn_qfCJLrWtAEGmN3hdPCzZCw/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'p5.js',
        time: '11:00AM - 11:15AM',
        duration: '15',
        actType: 'codealong',
        links: [
          {
            displayText: 'Project',
            linkURL:
              'https://docs.google.com/document/d/1NO1qoB8D48Jb9RtFrNzAfNk1R-i_TD4PiNzswCc9cJo/edit?usp=sharing',
          },
        ],
      },
      { name: 'BREAK', time: '11:15AM - 11:30AM', duration: '15', actType: 'misc', links: [] },
      {
        name: 'Bouncing Ball',
        time: '11:30AM - 12:15PM',
        duration: '45',
        actType: 'lecture',
        links: [
          {
            displayText: 'Code Along I',
            linkURL:
              'https://docs.google.com/document/d/1xYx86DKP8LDIqJbgCtpEnQIw6otO57j7DJ4aX29cxus/edit?usp=sharing',
          },
        ],
      },
      {
        name: 'Kahoot',
        time: '12:15PM - 12:45PM',
        duration: '30',
        actType: 'project',
        links: [{ displayText: 'Join Here', linkURL: '' }],
      },
      {
        name: 'Student Survey',
        time: '12:45PM - 01:00PM',
        duration: '15',
        actType: 'survey',
        links: [
          { displayText: 'Survey Link', linkURL: 'https://allstarcode.typeform.com/to/ogLI9wrD' },
        ],
      }
    ],
  },
];
