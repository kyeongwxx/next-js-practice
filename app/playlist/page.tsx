import React from 'react';

type PageProps = {
  searchParams: { list: string };
};

const page = ({ searchParams }: PageProps) => {
  return <div>Play List {searchParams.list}</div>;
};

export default page;
