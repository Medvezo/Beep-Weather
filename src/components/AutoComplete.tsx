export default function AutoComplete({ suggestions }: { suggestions: any[] }) {
	console.log(suggestions);
	return (
		<>
			{suggestions.length > 0 && (
				<ul className="absolute top-full left-0 right-0 bg-white border border-black border-t-0 rounded-lg rounded-t-none list-none z-50">
					{suggestions.map((city, index) => (
						<li
							className="p-2 cursor-pointer text-black font-bold hover:bg-slate-200 transition-all duration-150 ease-in-out"
							key={index}
						>
							{city.name + ", " + city.countryCode}
						</li>
					))}
				</ul>
			)}
		</>
	);
}
