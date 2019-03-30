import React, { Component } from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';

const LatexBox = ({latex}) => {
  console.log(latex)
  return (
    <div>
      <BlockMath math={latex}/>
    </div>

  )
}

export default LatexBox