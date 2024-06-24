import React from "react";
const Contact = () => {
  return (
    <>
      <div className="my-14">
        <div className="container dark:bg-dark bg-gray-100 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="col-span-2 py-5 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-black/80 dark:text-white">
                <span className="text-primary">Sweat now Shine later</span> Your
                body is the reflection of you lifestyle choices..
              </h1>
            </div>
            <div className="text-center grid place-items-center">
              <button className="primary-btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
