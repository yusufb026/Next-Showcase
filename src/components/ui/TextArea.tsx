import React from 'react';

function TextArea({ ...props }) {
  return (
    <textarea
      className=" m-5 h-32 resize-none rounded-lg  border-0 bg-gray-100  p-4 text-sm outline-0 "
      {...props}
    ></textarea>
  );
}

export default TextArea;
