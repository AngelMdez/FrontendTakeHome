export const getMore = {
  methods: {
    getMore: async function (
      scroll,
      index,
      action,
      maxScrollPosition = 75
    ) {
      if (index && scroll > maxScrollPosition) {
        action(index)
      }
    }
  }
}
