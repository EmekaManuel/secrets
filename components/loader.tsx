import React from 'react';

interface Props {
 title: string;
 color: string;
}

const Loader: React.FC<Props> = ({ title, color }) => {
 return <span className={`${color} items-center justify-center`}>{title}</span>;
};

export default Loader;
