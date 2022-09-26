import { twMerge } from 'tailwind-merge'

export const Button1 = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        `${
          props.disabled
            ? 'bg-white/30'
            : 'bg-gray-light hover:bg-primary hover:text-white'
        } rounded-md flex items-center justify-center text-base font-normal transition duration-300`,
        props.className
      )}
    >
      {children}
    </button>
  )
}

export const HeaderButton = ({ children, ...props }) => {
  return (
    <div className='w-20'>
    <button
      {...props}
      className={twMerge('w-20 m-auto font-sans font-thin text-3xl text-white', props.className)}
    >
      {children}
    </button>
    <hr className='w-16 mx-auto mt-1 rounded'/>
    </div>
  )
}
