import React from 'react';

interface Props {
 title: string;
}

const HeaderTitle = ({ title }: Props) => {
 return (
  <p className="text-gray-800 text-3xl font-semibold leading-relaxed">
   {title}
  </p>
 );
};

export default HeaderTitle;
