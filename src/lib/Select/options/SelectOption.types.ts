import React, { ReactNode } from "react";

export type selectOptionTypes = {
    option : ReactNode,
    onClick: (event:React.MouseEvent<HTMLDivElement>)=>void,
    selected: boolean
  };