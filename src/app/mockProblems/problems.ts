export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
		//id is the name of the page when we click on it.
	{	
		id: "1",
		title: "one",
		difficulty: "Hard",
		category: "",
		order: 1,
		videoId: "xvFZjo5PgG0",
	},
	{
		id: "2",
		title: "two",
		difficulty: "Medium",
		category: "",
		order: 2,
		videoId: "xvFZjo5PgG0",
	},

	{
		id: "two-sum",
		title: "two-sum",
		difficulty: "Easy",
		category: "",
		order: 100,
		videoId: "xvFZjo5PgG0",
	},
];