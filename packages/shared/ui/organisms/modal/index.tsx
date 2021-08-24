import React, { useRef } from 'react'
import tw from 'twin.macro'
import { useMedia } from 'react-use'
import { Dialog } from '@headlessui/react'
import { Button, CloseButton } from '../../atoms'
import { StyledTransition } from './transition'
import { Title } from './title'
import { Description } from './description'

export type ModalProps = {
  /**
   * If true, the modal will open
   */
  isOpen?: boolean
  /**
   * The header title of the modal
   */
  title: string
  /**
   * The description of the modal
   */
  description?: string
  /**
   * Rounded border
   */
  rounded?: boolean
  /**
   * Full width modal
   */
  fullWidth?: boolean
  /**
   * Fullscreen modal
   */
  fullScreen?: boolean
  /**
   * Override modal base styling
   */
  overrideDialogBaseStyles?: any
  /**
   * Override modal overlay styling
   */
  overrideOverlayStyles?: any
  /**
   * Override header title styling
   */
  overrideTitleStyles?: any
  /**
   * Override description styling
   */
  overrideDescriptionStyles?: any
  /**
   * Override footer spacing styling
   */
  overrideFooterSpacingStyles?: any
  /**
   * Override footer spacing styling
   */
  overrideFooterStyles?: any
  /**
   * A callback to be called when the modal is closed
   */
  handleClose?: () => void
  /**
   * Component to render at the bottom of the modal
   */
  Footer?: React.ReactNode
  children?: string | React.ReactNode
}

const noop = () => {}
const DefaultFooter = <Button>OK</Button>
const DefaultChildren = ''

const modalBaseStyles = tw`z-40 overflow-y-auto text-white`
const modalPositionStyles = tw`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-72`
const modalBackgroundStyles = tw`bg-bgSecondary shadow-xl`

export const Modal: React.FC<ModalProps> = ({
  isOpen = false,
  title = 'Title',
  description,
  fullWidth,
  fullScreen,
  rounded,
  handleClose = noop,
  overrideDialogBaseStyles,
  overrideOverlayStyles,
  overrideTitleStyles,
  overrideDescriptionStyles,
  overrideFooterSpacingStyles,
  overrideFooterStyles,
  Footer = DefaultFooter,
  children = DefaultChildren,
  ...rest
}) => {
  const isSmallDevice = useMedia('(max-width: 1080px)')
  const closeButtonRef = useRef(null)

  return (
    <StyledTransition
      show={isOpen}
      enter="enter"
      enterFrom="enterFrom"
      enterTo="enterTo"
      leave="leave"
      leaveFrom="leaveFrom"
      leaveTo="leaveTo"
    >
      <Dialog initialFocus={closeButtonRef} onClose={handleClose} css={[modalBaseStyles]} {...rest}>
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay css={[tw`fixed inset-0 bg-white bg-opacity-30`, overrideOverlayStyles]} />
          <div
            css={[
              modalPositionStyles,
              modalBackgroundStyles,
              rounded && tw`rounded-md`,
              fullWidth && tw`w-screen`,
              (fullScreen || isSmallDevice) && tw`w-screen h-screen`,
              overrideDialogBaseStyles,
            ]}
          >
            <div tw="p-2">
              <CloseButton buttonRef={closeButtonRef} onClick={handleClose} />
            </div>
            <div tw="px-10 py-4">
              <Dialog.Title
                as={Title}
                variant="heading"
                css={[tw`text-center mb-4 text-2xl`, overrideTitleStyles]}
              >
                {title}
              </Dialog.Title>
              {description ? (
                <Dialog.Description as={Description} css={[tw`mb-4`, overrideDescriptionStyles]}>
                  {description}
                </Dialog.Description>
              ) : null}
              <div tw="mb-4">{children}</div>
            </div>
            {Footer ? (
              <>
                <hr css={[tw`w-full`, overrideFooterSpacingStyles]} />
                <div css={[tw`px-6 py-4 flex justify-end`, overrideFooterStyles]}>{Footer}</div>
              </>
            ) : null}
          </div>
        </div>
      </Dialog>
    </StyledTransition>
  )
}
