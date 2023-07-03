export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problems: Problem[] = [
	{
		id: "1",
		title: "1",
		difficulty: "Easy",
		category: "",
		order: 1,
		videoId: "xvFZjo5PgG0",
	},
	{
		id: "2",
		title: "2",
		difficulty: "Hard",
		category: "",
		order: 2,
		videoId: "xvFZjo5PgG0",
	},
	{
		id: "3",
		title: "3",
		difficulty: "Medium",
		category: "",
		order: 3,
		videoId: "xvFZjo5PgG0",
	},

];