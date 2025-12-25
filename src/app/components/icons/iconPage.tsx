import IconBase  from "./icon"

const Icon = (props : { action : () => void}) => {
  return <IconBase {...props} />
}

export default Icon