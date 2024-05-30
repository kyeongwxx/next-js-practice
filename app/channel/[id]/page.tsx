import React from 'react';

type PageProps = {
  params: { id: string };
};

const page = ({ params }: PageProps) => {
  return <div>Channel/[{params.id}]</div>;
};

export default page;
