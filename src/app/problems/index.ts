import { twoSum } from "@/utils/problems/two-sum";
import { Problem } from "@/utils/types/problem";



interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,

};