import React from "react";
import Layout from "./../components/Layout/Layout";

export const Contact = () => {
  return (
<>

      <div className="my-5 text-center">
        <h4 className="font-bold mb-2 text-2xl">Contact Us</h4>
      </div>
      <div className="flex justify-center items-center flex-col my-3">
        <div className="w-full md:w-3/4 lg:w-2/4">
          <table className="w-full border-collapse border border-black">
            <thead className="bg-black text-white">
              <tr>
                <th className="py-2">Contact Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  1800-00-0000 (toll-free)
                </td>
              </tr>
              <tr>
                <td className="py-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-skyblue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l18 12M3 18l18-12"
                    />
                  </svg>
                  help@roadsafe.com
                </td>
              </tr>
              <tr>
                <td className="py-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  1234567890
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  </>
  );
};

// export default Contact;
