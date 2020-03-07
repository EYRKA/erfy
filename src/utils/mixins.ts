export const centerAlign = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
} as const;

export const ghostButton = {
  p: 0,
  outline: 'none',
  background: 'transparent',
  border: 'none',
  ':hover': {
    cursor: 'pointer'
  }
} as const;
