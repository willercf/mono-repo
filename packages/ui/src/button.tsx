import React from 'react';

type Props = {
    label: string;
}

export const Button: React.FC<Props> = ({ label }) => {
    return <button> My Button {label}</button>
}

////export const Button = ( { label }: { label: string } ) => label + "!";