// function addControl(name, config) {
// 	return {
// 		name,
// 		...config,
// 		render: (props) => {
// 			const Component = config.type;
// 			return <Component {...config} {...props} />;
// 		},
// 	};
// }
// export default addControl;

export default function addControl(name, config) {
	const Component = config.type;
	const newConfig = { ...config };
	delete newConfig.type;

	if (!Component) return null;

	// Return a React element that can be rendered directly
	return <Component key={name} {...newConfig} />;
}
