import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-light bg-light"
        style={{
          borderTop: "4px solid #2196f3",
          boxShadow: "0 2px 8px rgba(55,125,255,0.05)",
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.75rem 2rem",
            minHeight: "70px",
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          {/* Left: Avatar and Name */}
          <div
            className="d-flex align-items-center"
            style={{ minWidth: 0, fontFamily: "'Work Sans', sans-serif" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #a259ff 0%, #377dff 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.5rem",
                marginRight: "10px",
                boxShadow: "0 2px 8px rgba(55,125,255,0.15)",
                fontFamily: "'Work Sans', sans-serif",
                flexShrink: 0,
              }}
            >
              Z
            </span>
            <span
              style={{
                fontWeight: 500,
                fontSize: "1.25rem",
                fontFamily: "'Work Sans', sans-serif",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Zaldy Malig
            </span>
          </div>
          {/* Center: Navigation (desktop only) */}
          <ul
            className="navbar-nav flex-row d-none d-lg-flex"
            style={{
              gap: "1.5rem",
              margin: 0,
              padding: "0 30px 0 0",
              listStyle: "none",
              flex: 1,
              justifyContent: "end",
              display: "flex",
              fontFamily: "'Work Sans', sans-serif",
            }}
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{
                  color: "#222",
                  fontWeight: 500,
                  padding: 0,
                  fontSize: "1rem",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#222",
                  fontWeight: 500,
                  padding: 0,
                  fontSize: "1rem",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#222",
                  fontWeight: 500,
                  padding: 0,
                  fontSize: "1rem",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#222",
                  fontWeight: 500,
                  padding: 0,
                  fontSize: "1rem",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#222",
                  fontWeight: 500,
                  padding: 0,
                  fontSize: "1rem",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#222",
                  fontWeight: 500,
                  padding: 0,
                  fontSize: "1rem",
                  fontFamily: "'Work Sans', sans-serif",
                }}
              >
                Services
              </a>
            </li>
          </ul>
          {/* Right: Contact Me Button (desktop only) */}
          <div
            className="d-none d-lg-block"
            style={{ minWidth: 0, fontFamily: "'Work Sans', sans-serif" }}
          >
            <a
              href="#"
              className="btn"
              style={{
                background: "linear-gradient(135deg, #a259ff 0%, #377dff 100%)",
                color: "#fff",
                fontWeight: 600,
                borderRadius: "8px",
                padding: "0.5rem 1.5rem",
                fontSize: "1rem",
                border: "none",
                boxShadow: "0 2px 8px rgba(55,125,255,0.15)",
                minWidth: "120px",
                textAlign: "center",
                fontFamily: "'Work Sans', sans-serif",
              }}
            >
              Contact Me
            </a>
          </div>
          {/* Hamburger for mobile (after nav links and button) */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNav"
            aria-controls="mobileNav"
            aria-label="Toggle navigation"
            style={{
              marginLeft: "1rem",
              border: "none",
              background: "none",
              fontFamily: "'Work Sans', sans-serif",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        {/* Offcanvas Sidebar for Mobile */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="mobileNav"
          aria-labelledby="mobileNavLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="mobileNavLabel">
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #a259ff 0%, #377dff 100%)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1.2rem",
                  marginRight: "8px",
                  fontFamily: "inherit",
                }}
              >
                Z
              </span>
              Zaldy Malig
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav" style={{ gap: "1rem" }}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="#"
                className="btn w-100"
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
                  textAlign: "center",
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
