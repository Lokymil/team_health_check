export const statsHeaders = [
  {
    name: "competency",
    description:
      "Level of competence to do the job felt by interviewed person on a scale from 1 to 10.",
    type: "Integer: from 1 to 10"
  },
  {
    name: "challenge",
    description:
      "Level of challenge to do the job felt by interviewed person on a scale from 1 to 10.",
    type: "Integer: from 1 to 10"
  },
  {
    name: "enterprise",
    description:
      "Is interviewed think he fulfilled enterprise expectation? Yes, Neutral, No",
    type: "Integer: Yes=1, Neutral=0, No=1"
  },
  {
    name: "personnal",
    description:
      "Is interviewed think he fulfilled his career expectation? Yes, Neutral, No",
    type: "Integer: Yes=1, Neutral=0, No=1"
  },
  {
    name: "libertyMatter",
    description:
      "Level of importance for 'liberty' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "curiosityMatter",
    description:
      "Level of importance for 'curiosity' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "acceptationMatter",
    description:
      "Level of importance for 'acceptation' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "powerMatter",
    description:
      "Level of importance for 'power' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "honorMatter",
    description:
      "Level of importance for 'honor' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "relationshipMatter",
    description:
      "Level of importance for 'relationship' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "goalMatter",
    description:
      "Level of importance for 'goal' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "statusMatter",
    description:
      "Level of importance for 'status' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "masteryMatter",
    description:
      "Level of importance for 'mastery' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "orderMatter",
    description:
      "Level of importance for 'order' criterion in 'Moving Motivators' game.",
    type: "Integer: Most important=1, Less important=10"
  },
  {
    name: "libertyScore",
    description:
      "Level of satisfaction for 'liberty' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "curiosityScore",
    description:
      "Level of satisfaction for 'curiosity' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "acceptationScore",
    description:
      "Level of satisfaction for 'acceptation' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "powerScore",
    description:
      "Level of satisfaction for 'power' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "honorScore",
    description:
      "Level of satisfaction for 'honor' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "relationshipScore",
    description:
      "Level of satisfaction for 'relationship' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "goalScore",
    description:
      "Level of satisfaction for 'goal' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "statusScore",
    description:
      "Level of satisfaction for 'status' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "masteryScore",
    description:
      "Level of satisfaction for 'mastery' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  },
  {
    name: "orderScore",
    description:
      "Level of satisfaction for 'order' criterion in 'Moving Motivators' game.",
    type: "Integer: Positive=1, Neutral=0, Negative=-1"
  }
];

export const getStatsHeadersLabel = () =>
  statsHeaders.map(header => header.name);
