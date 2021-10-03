import React, { useRef } from 'react'
import tw from 'twin.macro'
import { Dialog } from '@headlessui/react'
import { Title } from '../modal/title'
import { Description } from '../modal/description'
import { ModalProps } from '../modal'
import { CloseButton } from '../../atoms'

export type SideDrawerProps = ModalProps & {
  side?: 'left' | 'right'
  drawerRef?: React.RefObject<HTMLDivElement>
}

const noop = () => {}
const DefaultChildren = ''

const modalBaseStyles = tw`z-40 overflow-auto text-white`
const modalPositionStyles = tw`fixed top-0 w-96 h-screen transform ease-in-out transition-all duration-300`
const modalBackgroundStyles = tw`bg-bgSecondary shadow-xl`

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen = false,
  side = 'left',
  title = 'Title',
  description,
  drawerRef,
  handleClose = noop,
  overrideDialogBaseStyles,
  overrideOverlayStyles,
  overrideTitleStyles,
  overrideDescriptionStyles,
  children = DefaultChildren,
}) => {
  const closeButtonRef = useRef(null)

  return (
    // todo issue #48
    // <StyledTransition
    //   show={isOpen}
    //   side={side}
    //   enter="enter"
    //   enterFrom="enterFrom"
    //   enterTo="enterTo"
    //   leave="leave"
    //   leaveFrom="leaveFrom"
    //   leaveTo="leaveTo"
    // >
    /* @ts-ignore   */
    <Dialog
      as="aside"
      initialFocus={closeButtonRef}
      open={isOpen}
      onClose={handleClose}
      css={[modalBaseStyles]}
      ref={drawerRef}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay css={[tw`fixed inset-0 bg-white bg-opacity-30`, overrideOverlayStyles]} />
        <div
          css={[
            modalPositionStyles,
            modalBackgroundStyles,
            isOpen && side === 'left' && tw`translate-x-0`,
            !isOpen && side === 'left' && tw`-translate-x-full`,
            isOpen && side === 'right' && tw`-translate-x-full`,
            !isOpen && side === 'right' && tw`translate-x-0`,
            side === 'left' && tw`left-0!`,
            side === 'right' && tw`left-full!`,
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
              css={[tw`text-left mb-4 text-2xl`, overrideTitleStyles]}
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
        </div>
      </div>
    </Dialog>
    // </StyledTransition>
  )
}
