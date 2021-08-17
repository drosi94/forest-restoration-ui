import styled from '@emotion/styled'
import tw from 'twin.macro'

export const Button = styled.button(tw`
  relative
  w-64 min-w-full
  flex justify-center
  py-2 px-4
  border border-transparent
  text-sm leading-5 font-medium
  rounded-md
  text-white
  bg-blue-600
  hover:bg-blue-500
  focus[outline-none ring-4 ring-blue-400]
  active:bg-blue-700
  transition duration-150 ease-in-out
  cursor-pointer
`)
