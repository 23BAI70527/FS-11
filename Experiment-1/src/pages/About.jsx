function About() {
  return (
    <div style={styles.container}>
      <h1>About</h1>
      <p>This app demonstrates SPA using React state and conditional rendering.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default About;
