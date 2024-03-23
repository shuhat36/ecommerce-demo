function SolidButton({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="hover:bg-slate-500 text-white font-semibold bg-slate-900 px-4 py-3 border border-slate-900 rounded-full"
    >
      {text}
    </button>
  );
}

export default SolidButton;
