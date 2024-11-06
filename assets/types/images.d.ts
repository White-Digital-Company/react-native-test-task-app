declare module '*.png' {
  const value: any
  export default value
}

declare module '*.jpg' {
  const value: any
  export default value
}

declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content
}
