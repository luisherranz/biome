// Arrow function in middle position with type annotation
callFunction(
	firstArgument,
	(param: string) => {
		return param.toUpperCase();
	},
	thirdArgument
);

// Arrow function in middle with default parameter
callFunction(
	firstArgument,
	(param = "default") => {
		return param;
	},
	thirdArgument
);
