export default function Skill(props) {
  return (
    <div className="flex flex-col items-center w-32 md:w-40 border border-white rounded-xl bg-[#0070F3] p-4">
      <img src={props.logo} className="w-24 md:w-32" alt="Logo" />
      <p className="text-white text-center mt-2">{props.name}</p>
    </div>
  );
}
