import React, { JSX, RefObject } from "react";
import '../style/CustomButton.scss';

type ComponentProps = {
    children: React.ReactNode,
    ref?: RefObject<HTMLButtonElement | null>,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function CustomButton ({children, ...props}: ComponentProps): JSX.Element {
    return <button className="custom-btn" {...props}><div className="custom-btn_children">{children}</div><span></span></button>
}