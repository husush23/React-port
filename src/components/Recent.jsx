function Recent({ img, first, right, left }) {
  return (
    <div
      className={`space-y-4 py-12 ${
        first ? "md:col-span-2 md:mx-8" : left ? "md:mt-14" : "md:mb-14"
      }`}
    >
      <img src={img} className="mx-auto w-full" />
      <h2 className="text-2xl font-medium">Eleifend et quis</h2>
      <span className="text-slate-400">Visual Identity</span>
    </div>
  );
}

export default Recent;
