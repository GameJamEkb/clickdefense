import {Level} from "../../levels/Level";


export class LevelsFactory {
     // Если кто-то придумает, как обойтись без этого дублирования - just do it
    static createLevelById(id: number): Level {
        switch (id) {
            case 1:
                return LevelsFactory.createFirstLevel();
            case 2:
                return LevelsFactory.createSecondLevel();
            default:
                throw new Error("Некорректный id уровня: " + id.toString())
        }
    }

    static createFirstLevel(): Level {
        return new Level(
            LevelFields[0],
            "Первый",
            LevelsFactory.createSecondLevel
        )
    }

    static createSecondLevel(): Level {
        return new Level(
            LevelFields[1],
            "Второй",
            () => null
        )
    }
}


const LevelFields = [
`____________________
______R_RR_R________
_____R_______R______
_____R_______R______
____________________
____________________
___RRRRRRR_RRRRRR___
___R____________R___
___R____________R___
___R___RRRRRR___R____
___R______G_____R___
___RRRRRRRRRRRRRR___
_________S__________`,

`____________________
____________________
____________________
____________________
____________________
____________________
___RRRRRRR_RRRRRR___
___R____________R___
___R____________R___
___R___RRRRRR___R____
___R______G_____R___
___RRRRRRRRRRRRRR___
_________S__________`
];