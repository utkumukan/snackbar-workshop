export default function (theme) {
  return {
    card: {
      backgroundColor: "blue",
      width: "100%"
    },
    typography: {
      fontSize: "0.875rem",
      color: "#ffffff"
    },
    actionRoot: {
      padding: "10px 12px 10px 10px"
    },
    actionGrid: {
      gap: "4.65ch"
    },
    icons: {
      marginLeft: "auto"
    },
    expand: {
      padding: "8px 8px",
      transform: "rotate(0deg)",
      transition: theme.transitions.create("transform", {
        duration: 150
      }),
      color: "#ffffff"
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    collapse: {
      padding: 16
    }
  };
}
