import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>About PrepVerse AI</h1>

        <p>
          PrepVerse AI is an AI-powered interview preparation platform
          designed to help students and professionals prepare for interviews
          across Engineering, Medical, UPSC, MBA, Banking, Law and many more.
        </p>
      </div>
    </>
  );
}

export default About;