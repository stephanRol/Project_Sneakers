import React from "react";

const Error404 = ({ error }) => {
  console.log(error);
  return (
    <div className="error404">
      {error ? (
        <>
          <p className="error">
            Server error: The server don't respond. This application has a
            limited number of API requests. If this number is exceeded, there
            will be no response from the server.
            <br />
            <br />
            Alternatively you can test the application with internal data from a
            JSON file.
          </p>
          <button>Test now</button>
        </>
      ) : (
        <h2 className="error err">404: Not Found</h2>
      )}
    </div>
  );
};

export default Error404;
