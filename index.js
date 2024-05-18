const plugin = require("tailwindcss/plugin");
const twCustomUtilities = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "flex-row": (value) => ({
          display: "flex",
          flexDirection: "row",
          ...value,
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
          ...value,
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
        start: {
          "align-items": "center",
          "justify-content": "flex-start"
        },
        end: {
          "align-items": "center",
          "justify-content": "flex-end"
        },
        center: {
          "align-items": "center",
          "justify-content": "center"
        },
        between: {
          "align-items": "center",
          "justify-content": "space-between"
        },
        around: {
          "align-items": "center",
          "justify-content": "space-around"
        },
        evenly: {
          "align-items": "center",
          "justify-content": "space-evenly"
        },
      },
      flexCol: {
        start: {
          "align-items": "flex-start",
          "justify-content": "center"
        },
        end: {
          "align-items": "flex-end",
          "justify-content": "center"
        },
        center: {
          "align-items": "center",
          "justify-content": "center"
        },
        baseline: {
          "align-items": "baseline",
          "justify-content": "center"
        },
        stretch: {
          "align-items": "stretch",
          "justify-content": "center"
        }
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
