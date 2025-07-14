import image from "./assets/Image1.jpg";
import image2 from "./assets/Image2.jpg";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Homecontent.css";
function HomeContent() {
  const profile = image;
  const profile2 = image2;

  return (
    <>
      {/* content 1 - frontpage */}
      <div
        className="content-1-bg container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          minHeight: "120vh",
          padding: "0 0 0 0",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            flex: 1,
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "7vw",
              maxWidth: 600,
            }}
          >
            <h1
              style={{
                fontWeight: 700,
                fontSize: "2.8rem",
                color: "#222",
                marginBottom: "1rem",
                lineHeight: 1.1,
              }}
            >
              Hello, I’m <br />
              <span style={{ color: "#222" }}>Zaldy D. Malig</span>
            </h1>
            <p
              style={{
                color: "#444",
                fontSize: "1rem",
                marginBottom: "1.5rem",
                maxWidth: 420,
              }}
            >
              I’m a{" "}
              <span style={{ fontWeight: 600, color: "#a259ff" }}>
                Web Developer
              </span>{" "}
              based in{" "}
              <span style={{ fontWeight: 600, color: "#377dff" }}>
                Valenzuela, Philippines
              </span>
              . I strive to build immersive and beautiful web applications
              through carefully crafted code and user-centric design.
            </p>
            <a
              href="#"
              className="btn"
              style={{
                background: "linear-gradient(135deg, #a259ff 0%, #377dff 100%)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "8px",
                padding: "0.6rem 2rem",
                fontSize: "1rem",
                border: "none",
                marginBottom: "2.5rem",
                boxShadow: "0 2px 8px rgba(55,125,255,0.15)",
                width: "fit-content",
                textDecoration: "none",
              }}
            >
              Say Hello!
            </a>
            {/* Stats Row */}
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                marginTop: "1rem",
                maxWidth: 420,
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 16px rgba(162,89,255,0.08)",
                  padding: "1.2rem 2.2rem",
                  textAlign: "center",
                  flex: 1,
                  minWidth: 110,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#a259ff",
                  }}
                >
                  1 Y.
                </div>
                <div style={{ fontSize: "0.95rem", color: "#444" }}>
                  Experience
                </div>
              </div>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 16px rgba(162,89,255,0.08)",
                  padding: "1.2rem 2.2rem",
                  textAlign: "center",
                  flex: 1,
                  minWidth: 110,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#a259ff",
                  }}
                >
                  4
                </div>
                <div style={{ fontSize: "0.95rem", color: "#444" }}>
                  Project Completed
                </div>
              </div>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0 2px 16px rgba(162,89,255,0.08)",
                  padding: "1.2rem 2.2rem",
                  textAlign: "center",
                  flex: 1,
                  minWidth: 110,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#a259ff",
                  }}
                >
                  4
                </div>
                <div style={{ fontSize: "0.95rem", color: "#444" }}>
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 400,
            }}
          >
            <img
              src={profile}
              alt="Zaldy D. Malig"
              style={{
                width: "340px",
                height: "400px",
                objectFit: "cover",
                borderRadius: "18px",
                boxShadow: "0 4px 32px rgba(55,125,255,0.10)",
              }}
            />
          </div>
        </div>
        {/* Fade transition at the bottom */}
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
            height: "80px",
            background:
              "linear-gradient(to bottom, rgba(247,214,250,0) 0%, #fff 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />
      </div>

      {/* content 2 - about me */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          background: "transparent",
          margin: "48px 0",
          height: "100vh",
        }}
        className="container-fluid"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 2px 32px rgba(55,125,255,0.10)",
            padding: "2.5rem 2.5rem",
            maxWidth: "1000px",
            width: "100%",
            alignItems: "center",
            gap: "2.5rem",
            position: "relative",
            top: "-120px",
            zIndex: 10,
          }}
        >
          {/* Left: Image */}
          <div>
            <img
              src={profile2}
              alt="Zaldy D. Malig"
              style={{
                width: "30vw",
                height: "auto",
                objectFit: "cover",
                borderRadius: "14px",
                boxShadow: "0 2px 16px rgba(162,89,255,0.10)",
                paddingRight: "2rem",
                border: "0.3px solid #0000002f",
                backgroundPosition: "center",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20vw",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#fff",
                  padding: "1rem 0",
                  position: "relative",
                  bottom: "30px",
                  zIndex: 12,
                  width: "20vw",
                  boxShadow: "0 2px 32px rgba(0, 0, 0, 0.31)",
                }}
                className="col-md-auto border-top rounded"
              >
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={28} color="#a259ff" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={28} color="#a259ff" />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={28} color="#a259ff" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} color="#a259ff" />
                </a>
              </div>
            </div>
          </div>
          {/* Right: Text and Actions */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                fontWeight: 700,
                fontSize: "1.4rem",
                marginBottom: "0.7rem",
                color: "#222",
              }}
            >
              I am a Junior-Level Web Developer.
            </h3>
            <p style={{ color: "#444", marginBottom: "0.7rem" }}>
              I design and develop stylish, modern websites, web services, and
              online stores tailored to customer needs, school projects, and
              capstone requirements. I'm passionate about creating seamless and
              engaging digital user experiences.
            </p>
            <p style={{ color: "#444", marginBottom: "1.2rem" }}>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>
            <div
              style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem" }}
            >
              <a
                href="#"
                className="btn btn-primary"
                style={{
                  background:
                    "linear-gradient(135deg, #a259ff 0%, #377dff 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "8px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1rem",
                  border: "none",
                  boxShadow: "0 2px 8px rgba(55,125,255,0.15)",
                  textDecoration: "none",
                }}
              >
                My Project
              </a>
              <a
                href="#"
                className="btn btn-outline-primary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: 600,
                  borderRadius: "8px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "1rem",
                  border: "1.5px solid #a259ff",
                  color: "#a259ff",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(162,89,255,0.05)",
                  textDecoration: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ verticalAlign: "middle" }}
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5V13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6a.5.5 0 0 1 1 0V13a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.6a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                </svg>
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* content 3 - Languages */}

      <div className="container py-5">
        <div className="row">
          {/* LEFT: Text content */}
          <div className="col-md-5 mb-4">
            <h2 className="fw-bold mb-3">Development Stacks</h2>
            <p>
              With 1 year of hands-on experience, I've worked with a variety of
              development tools and technologies to build responsive,
              user-friendly web applications and designs. My stack includes:
            </p>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
          </div>

          {/* RIGHT: Cards layout */}
          <div className="col-md-7">
            <div className="row">
              {/* Left: Typescript card */}
              <div className="col-md-4 d-flex justify-content-center align-items-center mb-3 ">
                <div
                  style={{
                    background: "#fff",
                    padding: "24px",
                    borderRadius: "16px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    width: "100%",
                    maxWidth: "220px",
                  }}
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript"
                    width="32"
                    className="mb-3"
                  />
                  <h6 className="fw-semibold mb-1">Typescript</h6>
                  <p className="text-muted small m-0">
                    Writing safer, more maintainable code with static typing.
                  </p>
                </div>
              </div>

              {/* Right: 2x2 card grid */}
              <div className="col-md-8">
                <div className="row g-3">
                  {/* HTML & CSS */}
                  <div className="col-sm-6">
                    <div
                      style={{
                        background: "#fff",
                        padding: "24px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        height: "100%",
                      }}
                    >
                      <div className="d-flex gap-2 mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                          alt="HTML5"
                          width="24"
                        />
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                          alt="CSS3"
                          width="24"
                        />
                      </div>
                      <h6 className="fw-semibold mb-1">1. HTML & CSS</h6>
                      <p className="text-muted small m-0">
                        Used to structure clean and semantic web content.
                      </p>
                    </div>
                  </div>

                  {/* Node.js */}
                  <div className="col-sm-6">
                    <div
                      style={{
                        background: "#fff",
                        padding: "24px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        height: "100%",
                      }}
                    >
                      <div className="mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                          alt="Node.js"
                          width="24"
                        />
                      </div>
                      <h6 className="fw-semibold mb-1">2. Node.JS</h6>
                      <p className="text-muted small m-0">
                        Handling backend logic and creating RESTful APIs.
                      </p>
                    </div>
                  </div>

                  {/* React */}
                  <div className="col-sm-6">
                    <div
                      style={{
                        background: "#fff",
                        padding: "24px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        height: "100%",
                      }}
                    >
                      <div className="mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                          alt="React"
                          width="24"
                        />
                      </div>
                      <h6 className="fw-semibold mb-1">3. React</h6>
                      <p className="text-muted small m-0">
                        Building component-based user interfaces efficiently.
                      </p>
                    </div>
                  </div>

                  {/* Javascript */}
                  <div className="col-sm-6">
                    <div
                      style={{
                        background: "#fff",
                        padding: "24px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                        height: "100%",
                      }}
                    >
                      <div className="mb-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          alt="Javascript"
                          width="24"
                        />
                      </div>
                      <h6 className="fw-semibold mb-1">4. Javascript</h6>
                      <p className="text-muted small m-0">
                        Core language for dynamic, interactive frontend
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container d-flex flex-column align-items-center text-center">
          <h2 className="text-center">Recent Project</h2>
          <p className="w-100 w-md-50">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>

        <div className="col">
          {/* Add here the project description and most project */}
          <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" />
            <p>Project Description</p>
            <div className="btn btn-primary">
              <p>Interested &rarr;</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div">
        <p>Do you have Project Idea? Let's discuss your project!</p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>

        <p className="btn btn-primary">Let’s work Together &rarr;</p>
      </div>
      <div className="row">
        <div className="col">
          <p>What do i do?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </p>
          <div className="btn">Say Hello</div>
        </div>
        <div className="col">
          <div className="card">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}></div>
      <div
        style={{
          display: "flex",
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          padding: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div style={{ flex: 1, marginRight: "2rem" }}>
          <h2>Let's discuss your Project</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div>
            <div>
              <strong>Address:</strong>
              <div>New Mexico 31134</div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <strong>My Email:</strong>
              <div>xyzmail@gmail.com</div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <strong>Call Me Now:</strong>
              <div>00-1234 00000</div>
            </div>
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={32} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <form>
            <div>
              <label>Name*</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label>Email*</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Location</label>
              <input type="text" name="location" />
            </div>
            <div>
              <label>Budget*</label>
              <input type="text" name="budget" />
            </div>
            <div>
              <label>Subject*</label>
              <input type="text" name="subject" />
            </div>
            <div>
              <label>Message*</label>
              <textarea name="message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default HomeContent;
