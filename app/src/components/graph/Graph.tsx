type GraphPropTypes = {
  width: number;
  height: number;
}

function Graph({ width, height }: GraphPropTypes) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>

    </svg>
  )
}

export default Graph
