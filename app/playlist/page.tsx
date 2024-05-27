import React from 'react';

const page = (props) => {
  console.log(props);
  return <div>Play List {props.searchParams.list}</div>;
};

export default page;
