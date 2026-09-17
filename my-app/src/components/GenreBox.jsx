function GenreBox({ genre, onGenreChange, genres }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">
        ประเภทหนัง
      </label>

      <select
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="rounded-lg border border-slate-300 bg-white px-4 py-2"
      >
        <option value="all">ทุกประเภท</option>

        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreBox;
