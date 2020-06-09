export const statsHeaders = [
  {
    name: "competency",
    description:
      "How much do you feel confident on your capacity to do the job ?",
    format:
      "Level of competence to do the job felt by interviewed person on a scale from 1 to 10.",
    type: "Integer: from 1 to 10",
  },
  {
    name: "challenge",
    description: "How much do you feel challenged by your job ?",
    format:
      "Level of challenge to do the job felt by interviewed person on a scale from 1 to 10.",
    type: "Integer: from 1 to 10",
  },
  {
    name: "enterprise",
    description: "Do you feel your company satisfied by what you do ?",
    format:
      "Is interviewed think he fulfilled company expectation? Yes, Neutral, No",
    type: "Integer: Yes=1, Neutral=0, No=1",
  },
  {
    name: "personnal",
    description: "Do you feel satisfied by what you do ?",
    format:
      "Is interviewed think he fulfilled his career expectation? Yes, Neutral, No",
    type: "Integer: Yes=1, Neutral=0, No=1",
  },
  {
    name: "libertyMatter",
    label: "Liberty",
    description:
      "I am independant of others with my own work and responsibilities",
    format:
      "Level of importance for 'liberty' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "curiosityMatter",
    label: "Curiosity",
    description: "I have plenty of things to investigate and to think about.",
    format:
      "Level of importance for 'curiosity' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "acceptationMatter",
    label: "Acceptation",
    description: "The people around me approve what I do and who I am.",
    format:
      "Level of importance for 'acceptation' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "powerMatter",
    label: "Power",
    description:
      "There is enough room for me to influence what happens around me.",
    format:
      "Level of importance for 'power' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "honorMatter",
    label: "Honor",
    description:
      "I feel proud that my personnal values are reflected in how I work.",
    format:
      "Level of importance for 'honor' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "relationshipMatter",
    label: "Relationship",
    description:
      "I have good relationship with the people in and around my work.",
    format:
      "Level of importance for 'relationship' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "goalMatter",
    label: "Goal",
    description: "My purpose in life is reflected in the work I do.",
    format:
      "Level of importance for 'goal' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "statusMatter",
    label: "Status",
    description:
      "My position is good and recognized by the people who work with me.",
    format:
      "Level of importance for 'status' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "masteryMatter",
    label: "Mastery",
    description:
      "My work challenges my competence but it is still within my abilities.",
    format:
      "Level of importance for 'mastery' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "orderMatter",
    label: "Order",
    description:
      "There are enough rules and policies for a stable environnement.",
    format:
      "Level of importance for 'order' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10",
  },
  {
    name: "libertyScore",
    label: "Liberty",
    description:
      "I am independant of others with my own work and responsibilities",
    format:
      "Level of satisfaction for 'liberty' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "curiosityScore",
    label: "Curiosity",
    description: "I have plenty of things to investigate and to think about.",
    format:
      "Level of satisfaction for 'curiosity' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "acceptationScore",
    label: "Acceptation",
    description: "The people around me approve what I do and who I am.",
    format:
      "Level of satisfaction for 'acceptation' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "powerScore",
    label: "Power",
    description:
      "There is enough room for me to influence what happens around me.",
    format:
      "Level of satisfaction for 'power' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "honorScore",
    label: "Honor",
    description:
      "I feel proud that my personnal values are reflected in how I work.",
    format:
      "Level of satisfaction for 'honor' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "relationshipScore",
    label: "Relationship",
    description:
      "I have good relationship with the people in and around my work.",
    format:
      "Level of satisfaction for 'relationship' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "goalScore",
    label: "Goal",
    description: "My purpose in life is reflected in the work I do.",
    format:
      "Level of satisfaction for 'goal' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "statusScore",
    label: "Status",
    description:
      "My position is good and recognized by the people who work with me.",
    format:
      "Level of satisfaction for 'status' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "masteryScore",
    label: "Mastery",
    description:
      "My work challenges my competence but it is still within my abilities.",
    format:
      "Level of satisfaction for 'mastery' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
  {
    name: "orderScore",
    label: "Order",
    description:
      "There are enough rules and policies for a stable environnement.",
    format:
      "Level of satisfaction for 'order' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1",
  },
];

export const getStatsHeadersLabel = () =>
  statsHeaders.map((header) => header.name);

export const csvToJson = (csv) => {
  const lines = csv.split("\n").filter((line) => line);
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }

  return result;
};
