const Hero = () => (
  <header style={{
    height: "100vh",
    background: "linear-gradient(to right, #ffffff, #e6f0ff)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }}>
    <img src="logo192.png" alt="Logo" style={{ width: "120px" }} />
    <h1>Serengo</h1>
    <p>Enhancing the Safe Travel Experience for Tourists</p>
    <a href="#about" style={{ marginTop: "20px", color: "#007BFF" }}>Get Started ↓</a>
  </header>
);
export default Hero;
