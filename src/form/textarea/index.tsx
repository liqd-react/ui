import React, { ReactNode } from 'react';
import './style.scss';

export interface TextareaProps
{
    id?         : string
    inputID?    : string
    className?  : string
    children?   : string
}

export const Textarea: React.FC<TextareaProps> = ({ id, inputID, className, children }) => 
{
    return (
        <div id={id} className='Input Textarea'>
            <textarea id={inputID}>{children}</textarea>
        </div>
    );
}