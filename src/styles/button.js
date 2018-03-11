const styles = theme => ({
  buttonOutline: {
    backgroundColor: "transparent",
    border: "2px solid #306ffd",
    borderRadius: "20px",
    padding: ".5rem 1.5rem",
    fontWeight: 700,
    color: "#306ffd",
    marginTop: "1rem",
    "&:hover": {
      color: "#306ffd",
      backgroundColor: "#e1eaff"
    }
  },
  buttonWhite: {
    marginTop: "2rem",
    fontSize: "16px",
    fontSize: "1rem",
    border: "0 solid #fff",
    color: "#306ffd",
    backgroundColor: "#fff",
    borderRadius: "50px",
    padding: "1rem 1.5rem",
    boxShadow: "0 0 20px rgba(0,0,0,.2)",
    transition: "box-shadow .2s ease",
    fontWeight: "700",
    "&:active, &:focus, &:hover": {
      backgroundColor: "#fff",
      boxShadow: "0 0 20px rgba(0,0,0,.7)"
    }
  }
});

export default styles;
