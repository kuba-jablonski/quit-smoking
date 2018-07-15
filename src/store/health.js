import { Duration } from "luxon";

export default {
  namespaced: true,
  state: {
    items: [
      {
        description:
          "Your blood pressure, pulse rate and the temperature of your hands and feet are beginning to return to normal",
        duration: Duration.fromObject({ minutes: 20 })
      },
      {
        description:
          "Remaining nicotine in your bloodstream has fallen to less than half of normal peak daily levels",
        duration: Duration.fromObject({ hours: 4 })
      },
      {
        description: "Carbon monoxide and oxygen levels back to normal",
        duration: Duration.fromObject({ hours: 12 })
      },
      {
        description: "Taste and smell senses regained",
        duration: Duration.fromObject({ hours: 48 })
      },
      {
        description: "Standardization of respiratory function",
        duration: Duration.fromObject({ hours: 72 })
      },
      {
        description: "Elimination of physical dependence on nicotine",
        duration: Duration.fromObject({ days: 10 })
      },
      {
        description:
          "Improvement of blood circulation and skin hydration, and disappearance of premature wrinkles",
        duration: Duration.fromObject({ months: 1 })
      },
      {
        description: "Physical condition improved",
        duration: Duration.fromObject({ months: 2 })
      },
      {
        description: "Hearth disease death risk reduced to half",
        duration: Duration.fromObject({ years: 1 })
      },
      {
        description:
          "Risk of developing lung cancer at same level as a non-smoker",
        duration: Duration.fromObject({ years: 10 })
      }
    ]
  },
  getters: {
    items(state) {
      return state.items;
    }
  }
};
