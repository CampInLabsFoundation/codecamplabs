import { Problem } from "../types/problem";
import { One } from "./1";

import { twoSum } from "./two-sum";


interface ProblemMap {
	[key: string]: Problem;
}

    // key: is the routing id
export const problems: ProblemMap = {
	"two-sum": twoSum,
    "1": One,
};