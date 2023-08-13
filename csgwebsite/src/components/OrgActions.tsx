import React from "react";

const OrgActions = () => {
  return (
    <div className="flex row bg-bggray w-screen">
      <div>
        <h1>Subscribe to Our Newsletter!</h1>
        <div>
          <p>Words words words about the newsletter that IDK yet.</p>

          <button className="font-medium bg-buttonpurple rounded-lg">
            <a href="#">Subscribe!</a>
          </button>
        </div>
      </div>

      <div>
        <h1>Donate to Our Organization!</h1>
        <div>
          <p>Words words words about donating that IDK yet.</p>

          <button className="font-medium bg-buttonpurple rounded-lg">
            <a href="#">Donate!</a>
          </button>
        </div>
      </div>

      <div>
        <h1>Meet The Officers!</h1>
        <div>
          <p>Words words words about how cool and awesome our officers are.</p>

          <button className="font-medium bg-buttonpurple rounded-lg ">
            <a href="#">Learn More!</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrgActions;
