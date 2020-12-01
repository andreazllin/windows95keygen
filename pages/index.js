function Home() {
  return (
    <div className="center">
      <div className="container">
        <div className="card">
          <div className="card-title no-select">Generate a Windows NT 4.0 or Windows 95 Key!</div>
          <div className="card-content">
            <span className="no-select">Key: </span>
            <span id="keyOutput"> - </span>
          </div>
          <div className="card-footer no-select">
            <button className="btn" id="normalKeyButton">
              {' '}
              <span className="btn-text">Normal</span>{' '}
            </button>
            <button className="btn" id="oemKeyButton">
              {' '}
              <span className="btn-text">OEM</span>{' '}
            </button>
            <a target="_blank" href="https://github.com/nilaerdna/windows95keygen">
              <button className="btn" id="githubButton">
                {' '}
                <span className="btn-text">GitHub</span>{' '}
              </button>
            </a>
          </div>
        </div>
      </div>
      <script src="script.js"></script>
    </div>
  );
}

export default Home;
