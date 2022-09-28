const plugin = require("tailwindcss/plugin");
const twCustomUtilities = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "flex-row": (value) => ({
          display: "flex",
          "align-items": "center",
          "justify-content": value,
        }),
      },
      {
        values: {
          ...theme("flexRow"),
          ...theme("gridAutoFit"),
        },
      }
    );
    matchUtilities(
      {
        "flex-col": (value) => ({
          display: "flex",
          flexDirection: "column",
          "align-items": value,
          "justify-content": `flex-center`,
        }),
      },
      {
        values: theme("flexCol"),
      }
    );
    matchUtilities(
      {
        "grid-auto-fit": (value) => ({
          display: "grid",
          gridTemplateColumns: `repeat(auto-fit, minmax(${value}, 1fr))`,
        }),
      },
      {
        values: theme("gridAutoFit"),
      }
    );
  },
  {
    theme: {
      flexRow: {
        start: "flex-start",
        end: "flex-end",
        center: "center",
        between: "space-between",
        around: "space-around",
        evenly: "space-evenly",
      },
      flexCol: {
        start: "flex-start",
        end: "flex-end",
        center: "center",
        baseline: "baseline",
        stretch: "stretch",
      },
      gridAutoFit: {
        DEFAULT: "16rem",
        xs: "12rem",
        sm: "14rem",
        md: "16rem",
        lg: "18rem",
        xl: "20rem",
      },
    },
  }
);

module.exports = twCustomUtilities;
