export const Alert = ({ text }: { text: string }) => {
  return (
    <dialog
      style={{
        position: 'fixed',
        backgroundColor: '#00471b',
        color: '#f5f6f7',
        top: '50%',
        left: '0%',
        right: '0',
        margin: 'auto',
        fontWeight: '700',
        fontSize: '1.2rem'
      }}
      open
    >
      {text}
    </dialog>
  );
};
