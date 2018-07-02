import { JapaneseResult } from "./JapaneseResult";

export interface DataResult {
    attribution: string;
    is_common: boolean;
    japanese: JapaneseResult[];
}