module.exports = {
  '.rounded-box': { borderRadius: 'var(--rounded-box,1rem)' },
  '.rounded-t-box': {
    borderTopLeftRadius: 'var(--rounded-box,1rem)',
    borderTopRightRadius: 'var(--rounded-box,1rem)',
  },
  '.rounded-b-box': {
    borderBottomLeftRadius: 'var(--rounded-box,1rem)',
    borderBottomRightRadius: 'var(--rounded-box,1rem)',
  },
  '.rounded-btn': { borderRadius: 'var(--rounded-btn,.5rem)' },
  '.rounded-badge': { borderRadius: 'var(--rounded-badge,1.9rem)' },
  '.text-2xs': { fontSize: '.7rem' },
  '.glass,.glass.btn-active,.glass:hover': {
    border: 'none',
    WebkitBackdropFilter: 'blur(var(--glass-blur,40px))',
    backdropFilter: 'blur(var(--glass-blur,40px))',
    backgroundColor: 'transparent',
    backgroundImage:
      'linear-gradient(135deg,rgb(255 255 255/var(--glass-opacity,30%)),rgb(0 0 0/0)),linear-gradient(var(--glass-reflex-degree,100deg),rgb(255 255 255/var(--glass-reflex-opacity,10%)) 25%,rgb(0 0 0/0) 0)',
    boxShadow:
      '0 0 0 1px rgb(255 255 255/var(--glass-border-opacity,10%)) inset,0 0 0 2px rgb(0 0 0/5%)',
    textShadow: '0 1px rgb(0 0 0/var(--glass-text-shadow-opacity,5%))',
  },
  '.min-h-6': { minHeight: '1.5rem' },
  '.min-h-8': { minHeight: '2rem' },
  '.min-h-12': { minHeight: '3rem' },
  '.min-h-16': { minHeight: '4rem' },
  '.no-animation': { '-BtnFocusScale': '1', '-AnimationBtn': '0', '-AnimationInput': '0' },
  '.tab-border-none': { '-TabBorder': '0px' },
  '.tab-border': { '-TabBorder': '1px' },
  '.tab-border-2': { '-TabBorder': '2px' },
  '.tab-border-3': { '-TabBorder': '3px' },
  '.tab-rounded-none': { '-TabRadius': '0' },
  '.tab-rounded-lg': { '-TabRadius': '0.5rem' },
}
