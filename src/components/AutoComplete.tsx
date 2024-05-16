export default function AutoComplete(suggestions: any) {
	return (
		<>
			{suggestions.length > 0 && (
				<ul>
					{suggestions.map((city: any, index: number) => (
						<li key={index}>{city.name}</li>
					))}
				</ul>
			)}
		</>
	);
}
